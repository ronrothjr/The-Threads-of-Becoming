import { Injectable, NotFoundException, Logger, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TrainingSession, TrainingSessionDocument } from '../schemas/training-session.schema';
import { TrainingProgress, TrainingProgressDocument } from '../schemas/training-progress.schema';
import { ModuleProgress, ModuleProgressDocument } from '../schemas/module-progress.schema';
import { TrainingModule, TrainingModuleDocument, TrainingModuleSchema } from './schemas/training-module.schema';
import { AssessmentsService } from '../assessments/assessments.service';
import { PracticeAssignmentService } from './practice-assignment.service';

interface TrainingConfiguration {
  growthEdges: string[]; // Thread names to focus on
  intensity: 'gentle' | 'moderate' | 'challenging';
  duration: number; // minutes per session
  learningStyle: string[];
  sessionsPerWeek: number;
}

interface TrainingUnitContent {
  title: string;
  objective: string;
  openingFraming: string;
  closingReflection: string;
  estimatedDuration: number;
  duration: number;
  threadFocus: string[];
  capacityTier: string;
  difficultyLevel: number;
  objectives: string[];
  activities: any[];
  reflectionPrompts: string[];
  practiceHomework: string;
  learningStyles: string[];
}

@Injectable()
export class TrainingService {
  private readonly logger = new Logger(TrainingService.name);

  constructor(
    @InjectModel(TrainingSession.name) private trainingSessionModel: Model<TrainingSessionDocument>,
    @InjectModel(TrainingProgress.name) private trainingProgressModel: Model<TrainingProgressDocument>,
    @InjectModel(ModuleProgress.name) private moduleProgressModel: Model<ModuleProgressDocument>,
    @InjectModel(TrainingModule.name) private trainingModuleModel: Model<TrainingModuleDocument>,
    private assessmentsService: AssessmentsService,
    @Inject(forwardRef(() => PracticeAssignmentService))
    private practiceAssignmentService: PracticeAssignmentService,
  ) {}

  async initializeTrainingProgram(userId: string, config: TrainingConfiguration) {
    this.logger.log(`Starting training initialization for user ${userId}`);
    this.logger.debug(`Config: ${JSON.stringify(config)}`);

    try {
      // Check if training program already exists
      this.logger.log('Checking for existing training program...');
      const existingProgress = await this.trainingProgressModel.findOne({ userId });

      if (existingProgress) {
        this.logger.log('Training program already exists, returning existing progress');
        const nextSession = await this.generateNextSession(userId);
        return {
          trainingProgress: existingProgress,
          firstSession: nextSession,
        };
      }

      // Get user's comprehensive analysis
      this.logger.log('Fetching comprehensive analysis...');
      const analysis = await this.assessmentsService.getComprehensivePatternAnalysis(userId);
      this.logger.log(`Analysis fetched: ${analysis.detectedPatterns.length} patterns detected`);

      // Determine sessions per week based on intensity
      const sessionsPerWeek = {
        gentle: 2,
        moderate: 3,
        challenging: 5,
      }[config.intensity];

      // Create training progress record
      this.logger.log('Creating training progress record...');
      const trainingProgress = new this.trainingProgressModel({
        userId,
        programStartDate: new Date(),
        totalWeeks: 12, // Default program length
        currentWeek: 1,
        primaryThreads: config.growthEdges,
        secondaryThreads: [],
        primaryPattern: analysis.detectedPatterns[0]?.id,
        intensity: config.intensity,
        sessionsPerWeek,
        averageDuration: config.duration,
        threadProgress: this.initializeThreadProgress(config.growthEdges, analysis.threadScores),
        patternProgress: this.initializePatternProgress(analysis.detectedPatterns),
      });

      await trainingProgress.save();
      this.logger.log('Training progress saved successfully');

      // Generate first session
      this.logger.log('Generating first training session...');
      const firstSession = await this.generateNextSession(userId);
      this.logger.log('First session generated successfully');

      return {
        trainingProgress,
        firstSession,
      };
    } catch (error) {
      this.logger.error(`Error initializing training program: ${error.message}`, error.stack);
      throw error;
    }
  }

  private initializeThreadProgress(threads: string[], threadScores: any) {
    const progress: any = {};

    for (const thread of threads) {
      const score = threadScores[thread];
      if (score) {
        progress[thread] = {
          startingCapacity: score.percentage,
          currentSelfRating: Math.round(score.percentage / 10), // Convert to 1-10 scale
          sessionCount: 0,
          capacityGrowth: 0,
          milestones: [],
        };
      }
    }

    return progress;
  }

  private initializePatternProgress(detectedPatterns: any[]) {
    const progress: any = {};

    for (const pattern of detectedPatterns) {
      progress[pattern.id] = {
        startingConfidence: pattern.detectionConfidence,
        recognitionInstances: 0,
        interruptionSuccesses: 0,
      };
    }

    return progress;
  }

  async generateNextSession(userId: string): Promise<any> {
    // Get training progress
    const progress = await this.trainingProgressModel.findOne({ userId }).exec();

    if (!progress) {
      throw new NotFoundException('Training program not initialized');
    }

    // Get comprehensive analysis
    const analysis = await this.assessmentsService.getComprehensivePatternAnalysis(userId);

    // Determine which thread to focus on this session
    const focusThread = this.selectFocusThread(progress, analysis);

    // Determine capacity tier for content
    const capacityTier = this.determineCapacityTier(
      progress.threadProgress[focusThread]?.currentSelfRating || 1
    );

    // Generate training unit content
    const content = await this.generateTrainingContent(
      focusThread,
      capacityTier,
      progress.intensity,
      progress.averageDuration || 30,
      analysis
    );

    // Create training session record
    const session = new this.trainingSessionModel({
      userId,
      sessionNumber: progress.totalSessionsCompleted + 1,
      weekNumber: progress.currentWeek,
      template: 'single_thread',
      threadFocus: [focusThread],
      patternConnection: analysis.detectedPatterns[0]?.id,
      difficultyLevel: this.calculateDifficultyLevel(capacityTier),
      capacityTier,
      selectedGrowthEdges: progress.primaryThreads,
      intensity: progress.intensity,
      duration: progress.averageDuration,
      learningStyle: [], // TODO: Get from user preferences
      title: content.title,
      objective: content.objective,
      openingFraming: content.openingFraming,
      closingReflection: content.closingReflection,
      estimatedDuration: content.estimatedDuration,
      activities: content.activities,
    });

    await session.save();

    return session.toObject();
  }

  private selectFocusThread(progress: TrainingProgressDocument, analysis: any): string {
    // Priority 1: Primary threads that haven't been practiced recently
    const threadsByLastSession = progress.primaryThreads
      .map(thread => ({
        thread,
        lastSession: progress.threadProgress[thread]?.lastSessionDate,
        sessionCount: progress.threadProgress[thread]?.sessionCount || 0,
      }))
      .sort((a, b) => {
        if (!a.lastSession) return -1;
        if (!b.lastSession) return 1;
        return a.lastSession.getTime() - b.lastSession.getTime();
      });

    // Return thread with oldest last session (or no session yet)
    return threadsByLastSession[0].thread;
  }

  private determineCapacityTier(selfRating: number): string {
    if (selfRating <= 2.5) return 'foundation'; // 0-25% capacity
    if (selfRating <= 5) return 'building';     // 26-50% capacity
    if (selfRating <= 7.5) return 'deepening';  // 51-75% capacity
    return 'mastery';                           // 76-100% capacity
  }

  private calculateDifficultyLevel(capacityTier: string): number {
    const tierMap = {
      foundation: 1,
      building: 2,
      deepening: 3,
      mastery: 4,
    };
    return tierMap[capacityTier] || 1;
  }

  private async generateTrainingContent(
    thread: string,
    capacityTier: string,
    intensity: string,
    duration: number,
    analysis: any
  ): Promise<TrainingUnitContent> {
    // Get thread-specific content for capacity tier
    const baseContent = this.getThreadContent(thread, capacityTier);

    // Add pattern connection if applicable
    const patternContent = this.addPatternConnection(
      thread,
      analysis.detectedPatterns[0],
      capacityTier
    );

    // Combine base activities and pattern connection activities
    const allActivities = [...baseContent.activities, ...patternContent.activities];

    // Adjust for duration and normalize to schema structure
    const activities = this.adjustActivitiesForDuration(
      allActivities,
      duration
    );

    return {
      title: baseContent.title,
      objective: baseContent.objectives[0] || `Build capacity in ${thread}`,
      openingFraming: `Welcome to your ${thread.toUpperCase()} training session. Today we're focusing on ${capacityTier} level work.`,
      closingReflection: `Take a moment to notice what shifted during this session. What did you discover about ${thread}?`,
      estimatedDuration: duration,
      duration,
      threadFocus: [thread],
      capacityTier,
      difficultyLevel: this.calculateDifficultyLevel(capacityTier),
      objectives: baseContent.objectives,
      activities,
      reflectionPrompts: baseContent.reflectionPrompts,
      practiceHomework: baseContent.practiceHomework,
      learningStyles: [],
    };
  }

  private getThreadContent(thread: string, capacityTier: string): any {
    // For now, return PAUSE content as example
    // TODO: Expand to all threads and tiers

    if (thread === 'pause' && capacityTier === 'foundation') {
      return {
        title: 'Understanding PAUSE: Creating the Gap',
        objectives: [
          'Understand what PAUSE means',
          'Recognize when you react automatically',
          'Practice creating a simple 3-second gap',
        ],
        activities: [
          {
            activityId: 'pause_foundation_teaching',
            type: 'teaching',
            content: 'PAUSE is the gap between trigger and response. Without it, we react automatically.',
            estimatedTime: 3,
          },
          {
            activityId: 'pause_foundation_recall',
            type: 'exercise',
            prompt: 'Recall a recent automatic reaction. Notice: was there ANY gap? Even a split second?',
            responseType: 'text',
            estimatedTime: 5,
          },
          {
            activityId: 'pause_foundation_practice',
            type: 'practice',
            content: 'This week: Practice ONE intentional 3-second pause when checking your phone.',
            estimatedTime: 2,
          },
        ],
        reflectionPrompts: [
          'What did you notice when you recalled your automatic reaction?',
          'What would change with even a 3-second pause?',
        ],
        practiceHomework: 'Practice ONE intentional 3-second pause when checking your phone this week.',
      };
    }

    if (thread === 'pause' && capacityTier === 'building') {
      return {
        title: 'PAUSE: Widening the Gap',
        objectives: [
          'Increase pause capacity from 3 seconds to 30 seconds',
          'Recognize your typical collapse triggers',
          'Practice widening the gap in real situations',
        ],
        activities: [
          {
            activityId: 'pause_building_teaching',
            type: 'teaching',
            content: 'The pause isn\'t about stopping forever. It\'s about creating enough space to choose your response.',
            estimatedTime: 3,
          },
          {
            activityId: 'pause_building_identify',
            type: 'exercise',
            prompt: 'Identify your top 3 automatic reactions. What would change with a 30-second pause before each?',
            responseType: 'list',
            estimatedTime: 7,
          },
          {
            activityId: 'pause_building_practice',
            type: 'practice',
            content: 'This week: In one triggering situation, practice a full 30-second pause before responding.',
            estimatedTime: 5,
          },
        ],
        reflectionPrompts: [
          'What became visible in the 30-second gap?',
          'What was challenging about widening the pause?',
        ],
        practiceHomework: 'In one triggering situation this week, practice a full 30-second pause before responding.',
      };
    }

    // Default fallback
    return {
      title: `${thread.toUpperCase()} Training - ${capacityTier}`,
      objectives: ['Explore this thread', 'Build capacity'],
      activities: [],
      reflectionPrompts: ['What did you learn?'],
      practiceHomework: 'Practice this thread this week.',
    };
  }

  private addPatternConnection(thread: string, primaryPattern: any, capacityTier: string): any {
    if (!primaryPattern) {
      return { activities: [] };
    }

    // Check if this thread is part of the pattern's core collapse
    const isPatternThread = primaryPattern.coreCollapse
      .map((t: string) => t.toLowerCase())
      .includes(thread.toLowerCase());

    if (!isPatternThread) {
      return { activities: [] };
    }

    return {
      activities: [
        {
          activityId: 'pattern_connection',
          type: 'teaching',
          content: `Your ${primaryPattern.name} pattern shows up as collapse in ${thread.toUpperCase()}. ${primaryPattern.description}`,
          estimatedTime: 2,
        },
        {
          activityId: 'pattern_recognition',
          type: 'exercise',
          prompt: `Watch for these behavioral signs this week: ${primaryPattern.behavioralSigns.slice(0, 3).join(', ')}`,
          responseType: 'checklist',
          options: primaryPattern.behavioralSigns,
          estimatedTime: 3,
        },
      ],
    };
  }

  private adjustActivitiesForDuration(activities: any[], targetDuration: number): any[] {
    const totalEstimatedTime = activities.reduce(
      (sum, activity) => sum + (activity.estimatedTime || 5),
      0
    );

    // Normalize activity structure to match schema
    const normalizedActivities = activities.map(activity => ({
      type: activity.type,
      content: activity.content || activity.prompt || '',
      estimatedMinutes: activity.estimatedTime || 5,
      guidance: activity.guidance || activity.responseType || undefined,
    }));

    if (totalEstimatedTime <= targetDuration) {
      return normalizedActivities;
    }

    // Remove lowest priority activities to fit duration
    // For now, just return all activities
    // TODO: Implement smart prioritization
    return normalizedActivities;
  }

  async completeSession(
    userId: string,
    sessionId: string,
    completionData: {
      activityResponses: any[];
      postSessionRating: number;
      insights: string;
      homeworkCommitment?: string;
    }
  ) {
    const session = await this.trainingSessionModel.findById(sessionId).exec();

    if (!session || session.userId.toString() !== userId) {
      throw new NotFoundException('Training session not found');
    }

    // Update session with completion data
    session.completedAt = new Date();
    session.timeSpent = Math.round(
      (session.completedAt.getTime() - (session.startedAt?.getTime() || Date.now())) / 60000
    );
    session.postSessionCapacityRating = completionData.postSessionRating;

    // Update activities with responses
    session.activities = session.activities.map((activity: any, index: number) => ({
      ...activity,
      completed: true,
      responses: completionData.activityResponses[index],
      insights: completionData.insights,
    }));

    session.completionPercentage = 100;

    await session.save();

    // Update training progress
    await this.updateTrainingProgress(userId, session, completionData);

    return {
      message: 'Training session completed successfully',
      sessionId: session._id,
      progress: await this.getTrainingProgress(userId),
    };
  }

  private async updateTrainingProgress(
    userId: string,
    session: TrainingSessionDocument,
    completionData: any
  ) {
    const progress = await this.trainingProgressModel.findOne({ userId }).exec();

    if (!progress) return;

    // Update overall stats
    progress.totalSessionsCompleted += 1;
    progress.totalTimeSpent += session.timeSpent || 0;

    // Update thread-specific progress
    const focusThread = session.threadFocus[0];
    if (progress.threadProgress[focusThread]) {
      progress.threadProgress[focusThread].sessionCount += 1;
      progress.threadProgress[focusThread].lastSessionDate = new Date();
      progress.threadProgress[focusThread].currentSelfRating = completionData.postSessionRating;

      // Calculate capacity growth
      const growth = completionData.postSessionRating -
        (session.preSessionCapacityRating || progress.threadProgress[focusThread].currentSelfRating);
      progress.threadProgress[focusThread].capacityGrowth += growth;
    }

    // Update streak
    // TODO: Implement proper streak calculation based on dates
    progress.currentStreak += 1;
    progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);

    await progress.save();
  }

  async getTrainingProgress(userId: string) {
    const progress = await this.trainingProgressModel.findOne({ userId }).exec();

    if (!progress) {
      throw new NotFoundException('No training program found');
    }

    return progress;
  }

  async startSession(userId: string, sessionId: string) {
    const session = await this.trainingSessionModel.findById(sessionId).exec();

    if (!session || session.userId.toString() !== userId) {
      throw new NotFoundException('Training session not found');
    }

    session.startedAt = new Date();
    await session.save();

    return session;
  }

  async getModuleForUser(moduleId: string) {
    // For now, just use the admin service to get the module
    // Later we can add access control, progress tracking, etc.
    const moduleModel = this.trainingSessionModel.db.model(TrainingModule.name, TrainingModuleSchema);

    const module = await moduleModel.findOne({ moduleId }).exec();

    if (!module) {
      throw new NotFoundException(`Module ${moduleId} not found`);
    }

    return module;
  }

  async getAvailableModules(userId: string) {
    // For now, return all published modules
    // Later we can filter based on user progress, tier, etc.
    const moduleModel = this.trainingSessionModel.db.model(TrainingModule.name, TrainingModuleSchema);

    const modules = await moduleModel.find({ published: true }).exec();

    return modules;
  }

  async completeModule(userId: string, moduleId: string, completionData: any) {
    // Get the module to access writing prompts
    const moduleModel = this.trainingSessionModel.db.model(TrainingModule.name, TrainingModuleSchema);

    const module = await moduleModel.findOne({ moduleId }).exec();

    if (!module) {
      throw new NotFoundException(`Module ${moduleId} not found`);
    }

    // Mark module progress as completed
    await this.moduleProgressModel.findOneAndUpdate(
      { userId, moduleId },
      { completed: true, lastAccessedAt: new Date() },
      { upsert: true }
    );

    // Create practice assignments for this module
    const assignments = await this.practiceAssignmentService.createAssignmentsForModule(
      userId,
      moduleId,
      module
    );

    this.logger.log(`Module ${moduleId} completed by user ${userId}. Created ${assignments.length} practice assignments.`);

    return {
      success: true,
      moduleId,
      practiceAssignmentsCreated: assignments.length,
      assignments: assignments.map((a: any) => ({
        id: a._id,
        prompt: a.prompt,
        scheduledDate: a.scheduledDate,
        type: a.assignmentType,
      })),
    };
  }

  async getModuleProgress(userId: string, moduleId: string) {
    const progress = await this.moduleProgressModel.findOne({ userId, moduleId }).exec();

    if (!progress) {
      return null;
    }

    return progress;
  }

  async saveModuleProgress(userId: string, moduleId: string, progressData: any) {
    const progress = await this.moduleProgressModel.findOneAndUpdate(
      { userId, moduleId },
      {
        currentPhase: progressData.currentPhase,
        phaseItemIndex: progressData.phaseItemIndex,
        allResponses: progressData.allResponses,
        sessionStartTime: progressData.sessionStartTime,
        lastAccessedAt: new Date(),
        completed: progressData.completed || false,
      },
      { upsert: true, new: true }
    );

    return progress;
  }

  async getAllModulesWithProgress(userId: string) {
    // Get all published training modules
    const modules = await this.trainingModuleModel.find({ published: true }).lean();

    // Get all module progress for this user
    // NOTE: userId is stored as string in moduleprogresses collection
    const progressRecords = await this.moduleProgressModel.find({
      userId
    }).lean();

    // Create a map of moduleId -> progress
    const progressMap = new Map();
    progressRecords.forEach(p => {
      progressMap.set(p.moduleId, p);
    });

    // Combine modules with their progress
    const modulesWithProgress = modules.map(module => ({
      ...module,
      progress: progressMap.get(module.moduleId) || null,
    }));

    return modulesWithProgress;
  }
}
