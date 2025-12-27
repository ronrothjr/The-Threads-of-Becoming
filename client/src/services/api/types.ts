/**
 * Centralized TypeScript interfaces for all API requests and responses
 */

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

// ============================================================================
// AUTHENTICATION
// ============================================================================

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  message?: string;
}

export interface UserProfile {
  email: string;
  name?: string;
  createdAt?: string;
}

// ============================================================================
// ASSESSMENTS
// ============================================================================

export interface AssessmentResponse {
  questionId: string;
  answer: string;
  answeredAt?: Date;
}

export interface PartialAssessment {
  responses: AssessmentResponse[];
  questionOrder?: string[];
}

export interface ThreadScore {
  raw: number;
  score: number; // Alias for backward compatibility
  percentage: number;
  collapseDirection?: string;
}

export interface ThreadScores {
  presence: ThreadScore;
  consent: ThreadScore;
  memory: ThreadScore;
  pause: ThreadScore;
  embodiment: ThreadScore;
  uncertainty: ThreadScore;
  becoming: ThreadScore;
}

export interface MovementAverages {
  see: number;
  hold: number;
  emerge: number;
}

export interface CollapseDirections {
  presence: 'withdrawal' | 'merger' | 'balanced';
  consent: 'coercion' | 'merger' | 'balanced';
  memory: 'trapped' | 'disconnected' | 'balanced';
  pause: 'impulsive' | 'frozen' | 'balanced';
  embodiment: 'disembodied' | 'overwhelmed' | 'balanced';
  uncertainty: 'grasping' | 'paralyzed' | 'balanced';
  becoming: 'rigid' | 'fluid' | 'balanced';
}

export interface HoldPracticeMapping {
  halt: { threads: string[] };
  observe: { threads: string[] };
  look: { threads: string[] };
  decide: { threads: string[] };
}

export interface AssessmentResults {
  threadScores: ThreadScores;
  movementAverages: MovementAverages;
  collapseDirections: CollapseDirections;
  holdPracticeMapping: HoldPracticeMapping;
}

export interface AssessmentStatus {
  quickProfileCompleted: boolean;
  hasPartialQuickProfile: boolean;
  personalJourneyMapCompleted?: boolean;
  canRetake?: boolean;
  daysUntilRetake?: number;
  lastTakenDate?: string;
  nextAvailableDate?: string;
}

export interface SubmitAssessmentRequest {
  responses: AssessmentResponse[];
}

export interface SubmitAssessmentResponse {
  message: string;
  results?: AssessmentResults;
}

// Pattern Analysis Types
export interface CollapsePattern {
  id: string;
  name: string;
  confidence: number;
  coreThreads: string[];
  description: string;
  experience: string;
  behavioralSigns: string[];
  theTrap: string;
  deeperFears: string[];
  deeperNeeds: string[];
  breakingSteps: string[];
  holdFocus: string;
  customPractices: string[];
}

export interface CascadeStep {
  thread: string;
  collapseType: string;
  effect: string;
  order: number;
}

export interface PatternCascade {
  id: string;
  trigger: string;
  sequence: CascadeStep[];
  finalPattern: string;
}

export interface DevelopmentPathItem {
  priority: 'immediate' | 'near-term' | 'long-term';
  thread: string;
  currentState: string;
  targetState: string;
  rationale: string;
  practices: string[];
  estimatedWeeks: number;
  rank: number;
}

export interface ComprehensiveAnalysis {
  detectedPatterns: CollapsePattern[];
  cascades: PatternCascade[];
  developmentPath: DevelopmentPathItem[];
  threadScores?: ThreadScores;
}

export interface PatternAnalysisInsight {
  type: string;
  message: string;
  data?: any;
}

export interface PatternAnalysis {
  insights: PatternAnalysisInsight[];
  summary: string;
  threadFocus: Record<string, number>;
  commonThemes: string[];
  practiceConsistency: {
    averageGap: number;
    longestStreak: number;
    threadDiversity: number;
  };
}

export interface UnlockAnalysis {
  isUnlocked: boolean;
  canUnlock: boolean;
  requirements: {
    journalDaysRequired: number;
    journalDaysCompleted: number;
    daysFromQuickProfile: number;
    daysRequired: number;
  };
  insights: string[];
}

// ============================================================================
// JOURNAL
// ============================================================================

export interface JournalEntry {
  _id: string;
  userId: string;
  date: Date;
  threadFocus?: string;
  content: string;
  practiceType?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateJournalRequest {
  threadFocus?: string;
  content: string;
  practiceType?: string;
  tags?: string[];
}

export interface UpdateJournalRequest {
  content: string;
  tags?: string[];
}

export interface JournalStats {
  journalDaysCount: number;
  totalEntries: number;
  requirementMet: boolean;
}

// ============================================================================
// PRACTICE
// ============================================================================

export interface PracticeEntry {
  _id: string;
  userId: string;
  date: Date;
  threadId: string;
  practiceType: string;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface LogPracticeRequest {
  threadId: string;
  practiceType: string;
  notes?: string;
}

export interface UpdatePracticeRequest {
  notes: string;
}

export interface PracticeAnalytics {
  journalStats: JournalStats;
  practiceStats: {
    totalPractices: number;
    uniqueDays: number;
    threadDistribution: Record<string, number>;
  };
  streaks: {
    current: number;
    longest: number;
  };
}

// ============================================================================
// PRACTICE ASSIGNMENTS
// ============================================================================

export interface PracticeAssignment {
  _id: string;
  userId: string;
  assignedDate: Date;
  dueDate: Date;
  thread: string;
  practiceType: string;
  prompt: string;
  status: 'pending' | 'completed' | 'skipped';
  completedAt?: Date;
  response?: string;
}

export interface SubmitAssignmentRequest {
  response: string;
}

// ============================================================================
// TRAINING MODULES
// ============================================================================

export interface AudioContent {
  text: string;
  voiceId?: string;
  speed?: number;
  audioUrl?: string;
  duration?: number;
  generatedAt?: string;
}

export interface Slide {
  slideNumber: number;
  title: string;
  visualDescription: string;
  visualUrl?: string;
  narration: AudioContent;
}

export interface Meditation {
  title: string;
  duration: number;
  script: AudioContent;
}

export interface Exercise {
  title: string;
  type: 'solo' | 'partner' | 'group' | 'written';
  duration: number;
  instructions: string;
  phases?: {
    name: string;
    duration: number;
    instructions: string;
  }[];
}

export interface WritingPrompt {
  prompt: string;
  type: 'foundation' | 'building' | 'deepening' | 'mastery';
  guidance?: string;
}

export interface KnowledgeCheck {
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface Practice {
  title: string;
  type: 'micro' | 'mini' | 'real-world';
  frequency: string;
  instructions: string;
  successCriteria?: string;
}

export interface TrainingModule {
  _id: string;
  moduleId: string;
  thread: string;
  tier: 'foundation' | 'building' | 'deepening' | 'mastery';
  title: string;
  objective: string;
  estimatedDuration: number;
  slides?: Slide[];
  meditations?: Meditation[];
  exercises?: Exercise[];
  writingPrompts?: WritingPrompt[];
  knowledgeChecks?: KnowledgeCheck[];
  practices?: Practice[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ModuleProgress {
  currentPhase: string;
  phaseItemIndex: number;
  allResponses?: any[];
  sessionStartTime?: string;
  completed?: boolean;
}

export interface SaveProgressRequest {
  currentPhase: string;
  phaseItemIndex: number;
  allResponses?: any[];
  sessionStartTime?: number | string;
  completed?: boolean;
}

export interface CompleteModuleRequest {
  duration?: number;
  responses?: any[];
  practicePrompts?: any[];
}

// ============================================================================
// TRAINING PROGRAM
// ============================================================================

export interface InitializeTrainingRequest {
  growthEdges: string[];
  intensity: 'gentle' | 'moderate' | 'challenging';
  duration: number;
  learningStyle: string[];
  sessionsPerWeek?: number;
}

export interface ThreadProgress {
  startingCapacity: number;
  currentSelfRating: number;
  sessionCount: number;
  lastSessionDate: Date;
  capacityGrowth: number;
  milestones: {
    date: Date;
    achievement: string;
    capacityRating: number;
  }[];
}

export interface PatternProgress {
  startingConfidence: number;
  recognitionInstances: number;
  interruptionSuccesses: number;
  lastRecognitionDate: Date;
}

export interface TrainingProgress {
  userId: string;
  programStartDate: Date;
  totalWeeks: number;
  currentWeek: number;
  primaryThreads: string[];
  secondaryThreads?: string[];
  primaryPattern?: string;
  intensity: 'gentle' | 'moderate' | 'challenging';
  sessionsPerWeek: number;
  averageDuration: number;
  totalSessionsCompleted: number;
  totalTimeSpent: number;
  currentStreak: number;
  longestStreak: number;
  threadProgress: Record<string, ThreadProgress>;
  patternProgress?: Record<string, PatternProgress>;
  completionRate: number;
  averageEngagement: number;
  averageInsightQuality: number;
  nextAssessmentRecommended?: Date;
  recommendedFocus?: string;
}

// ============================================================================
// ADMIN
// ============================================================================

export interface Voice {
  voice_id: string;
  name: string;
}

export interface GenerateAudioRequest {
  voiceId?: string;
  speed?: number;
  emotion?: string;
  text?: string;
}

export interface GenerateAudioResponse {
  duration: number;
  audioUrl: string;
  generatedAt: string;
}

export interface UpdateScriptRequest {
  text: string;
}

export interface UpdateDescriptionRequest {
  visualDescription: string;
}

// ============================================================================
// CONTACT
// ============================================================================

export interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  newsletter?: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
