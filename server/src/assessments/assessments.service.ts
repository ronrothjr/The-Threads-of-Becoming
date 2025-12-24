import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assessment, AssessmentDocument } from '../schemas/assessment.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { ScoringService } from './scoring.service';
import { QuickProfileResponse } from './scoring.service';


@Injectable()
export class AssessmentsService {
  constructor(
    @InjectModel(Assessment.name) private assessmentModel: Model<AssessmentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private scoringService: ScoringService,
  ) {}

  async submitQuickProfile(userId: string, responses: QuickProfileResponse[]) {
    if (responses.length !== 21) {
      throw new Error('Quick Profile requires exactly 21 responses');
    }

    const expectedQuestions = Array.from({ length: 21 }, (_, i) => `Q${i + 1}`);
    const receivedQuestions = responses.map((r) => r.questionId).sort();
    const missingQuestions = expectedQuestions.filter(
      (q) => !receivedQuestions.includes(q),
    );

    if (missingQuestions.length > 0) {
      throw new Error(
        `Missing responses for questions: ${missingQuestions.join(', ')}`,
      );
    }

    const results = this.scoringService.scoreQuickProfile(responses);
    const timestampedResponses = responses.map((r) => ({
      ...r,
      answeredAt: new Date(),
    }));

    // Mark any incomplete assessments as complete
    await this.assessmentModel.deleteMany({
      userId,
      type: 'quick_profile',
      isComplete: false,
    });

    const assessment = new this.assessmentModel({
      userId,
      type: 'quick_profile',
      responses: timestampedResponses,
      results,
      completedAt: new Date(),
      isComplete: true,
    });

    await assessment.save();

    await this.userModel.findByIdAndUpdate(userId, {
      'assessments.quickProfileCompleted': true,
      'assessments.quickProfileDate': new Date(),
    });

    return {
      message: 'Quick Profile assessment completed successfully',
      assessmentId: assessment._id,
      results,
    };
  }

  async getQuickProfileResults(userId: string) {
    const assessment = await this.assessmentModel
      .findOne({
        userId,
        type: 'quick_profile',
        isComplete: true,
      })
      .sort({ completedAt: -1 })
      .exec();

    if (!assessment) {
      throw new NotFoundException(
        'No Quick Profile assessment found for this user',
      );
    }

    return {
      results: assessment.results,
      completedAt: assessment.completedAt,
      assessmentId: assessment._id,
    };
  }

  async getAssessmentHistory(userId: string) {
    const assessments = await this.assessmentModel
      .find({ userId, isComplete: true })
      .sort({ completedAt: -1 })
      .select('type completedAt results.movementAverages')
      .exec();

    return assessments.map((a) => ({
      id: a._id,
      type: a.type,
      completedAt: a.completedAt,
      movementAverages: a.results?.movementAverages,
    }));
  }

  async hasCompletedQuickProfile(userId: string): Promise<boolean> {
    const count = await this.assessmentModel
      .countDocuments({
        userId,
        type: 'quick_profile',
        isComplete: true,
      })
      .exec();

    return count > 0;
  }

  async getUserSubscription(userId: string) {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      subscription: user.subscription,
      assessments: user.assessments,
    };
  }

  async getQuickProfileRetakeInfo(userId: string) {
    const user = await this.userModel.findById(userId).exec();

    if (!user || !user.assessments?.quickProfileCompleted) {
      return {
        canRetake: false,
        daysUntilRetake: null,
        lastTakenDate: null,
        nextAvailableDate: null,
      };
    }

    // If quickProfileDate is missing, fall back to the assessment's completedAt date
    let lastTaken: Date;
    if (user.assessments.quickProfileDate) {
      lastTaken = new Date(user.assessments.quickProfileDate);
    } else {
      // Find the most recent Quick Profile assessment
      const assessment = await this.assessmentModel
        .findOne({
          userId,
          type: 'quick_profile',
          isComplete: true,
        })
        .sort({ completedAt: -1 })
        .exec();

      if (!assessment || !assessment.completedAt) {
        return {
          canRetake: false,
          daysUntilRetake: null,
          lastTakenDate: null,
          nextAvailableDate: null,
        };
      }

      lastTaken = new Date(assessment.completedAt);

      // Update user record with the date for future lookups
      await this.userModel.findByIdAndUpdate(userId, {
        'assessments.quickProfileDate': lastTaken,
      });
    }

    const now = new Date();
    const daysSinceLastTaken = Math.floor(
      (now.getTime() - lastTaken.getTime()) / (1000 * 60 * 60 * 24),
    );
    const daysUntilRetake = Math.max(0, 30 - daysSinceLastTaken);
    const canRetake = daysSinceLastTaken >= 30;

    const nextAvailableDate = new Date(lastTaken);
    nextAvailableDate.setDate(nextAvailableDate.getDate() + 30);

    return {
      canRetake,
      daysUntilRetake,
      lastTakenDate: lastTaken,
      nextAvailableDate,
    };
  }

  async savePartialQuickProfile(
    userId: string,
    responses: QuickProfileResponse[],
    questionOrder?: string[],
  ) {
    let assessment = await this.assessmentModel.findOne({
      userId,
      type: 'quick_profile',
      isComplete: false,
    });

    const timestampedResponses = responses.map((r) => ({
      ...r,
      answeredAt: new Date(),
    }));

    if (assessment) {
      assessment.responses = timestampedResponses;
      assessment.lastSavedAt = new Date();
      if (questionOrder && questionOrder.length > 0) {
        assessment.questionOrder = questionOrder;
      }
      await assessment.save();
    } else {
      assessment = new this.assessmentModel({
        userId,
        type: 'quick_profile',
        responses: timestampedResponses,
        isComplete: false,
        lastSavedAt: new Date(),
        questionOrder: questionOrder || [],
      });
      await assessment.save();
    }

    return {
      message: 'Progress saved',
      assessmentId: assessment._id,
      responseCount: responses.length,
    };
  }

  async getPartialQuickProfile(userId: string) {
    const assessment = await this.assessmentModel
      .findOne({
        userId,
        type: 'quick_profile',
        isComplete: false,
      })
      .exec();

    if (!assessment) {
      return null;
    }

    return {
      responses: assessment.responses,
      questionOrder: assessment.questionOrder || [],
      lastSavedAt: assessment.lastSavedAt,
      responseCount: assessment.responses.length,
    };
  }

  async hasPartialQuickProfile(userId: string): Promise<boolean> {
    const count = await this.assessmentModel
      .countDocuments({
        userId,
        type: 'quick_profile',
        isComplete: false,
      })
      .exec();

    return count > 0;
  }

  async getUnlockStatus(userId: string) {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const unlockProgress = user.unlockProgress || {
      extendedUnlocked: false,
      journalDaysCount: 0,
      practiceDaysCount: 0,
    };

    const journalRequirementMet = unlockProgress.journalDaysCount >= 10;

    return {
      extendedUnlocked: unlockProgress.extendedUnlocked,
      journalDaysCount: unlockProgress.journalDaysCount,
      journalRequirementMet,
      journalDaysRemaining: Math.max(0, 10 - unlockProgress.journalDaysCount),
      practiceDaysCount: unlockProgress.practiceDaysCount,
      unlockedAt: unlockProgress.unlockedAt,
    };
  }
}
