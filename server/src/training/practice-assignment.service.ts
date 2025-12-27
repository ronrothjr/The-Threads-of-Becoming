import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PracticeAssignmentResponse } from '../schemas/practice-assignment.schema';

@Injectable()
export class PracticeAssignmentService {
  constructor(
    @InjectModel(PracticeAssignmentResponse.name)
    private practiceAssignmentModel: Model<PracticeAssignmentResponse>,
  ) {}

  /**
   * Create practice assignments when a user completes a module
   */
  async createAssignmentsForModule(userId: string, moduleId: string, module: any) {
    const userObjectId = new Types.ObjectId(userId);
    const completionDate = new Date();

    // Filter practice assignments and weekly reflections
    const practicePrompts = module.writingPrompts.filter(
      (p: any) => p.context === 'practice-assignment' || p.context === 'weekly-reflection'
    );

    const assignments: PracticeAssignmentResponse[] = [];

    for (let i = 0; i < practicePrompts.length; i++) {
      const prompt = practicePrompts[i];
      const promptIndex = module.writingPrompts.indexOf(prompt);

      const scheduledDate = new Date(completionDate);
      scheduledDate.setDate(scheduledDate.getDate() + (prompt.scheduledAfterDays || 0));

      const assignment = new this.practiceAssignmentModel({
        userId: userObjectId,
        moduleId,
        assignmentType: prompt.context,
        assignmentIndex: promptIndex,
        prompt: prompt.prompt,
        scheduledDate,
        metadata: {
          type: prompt.type,
          suggestedDuration: prompt.suggestedDuration,
          guidance: prompt.guidance,
          optional: prompt.optional,
        },
      });

      assignments.push(await assignment.save());
    }

    return assignments;
  }

  /**
   * Get all pending practice assignments for a user
   */
  async getPendingAssignments(userId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const now = new Date();

    return this.practiceAssignmentModel
      .find({
        userId: userObjectId,
        completedAt: null,
        scheduledDate: { $lte: now },
        skipped: false,
      })
      .sort({ scheduledDate: 1 })
      .exec();
  }

  /**
   * Get upcoming practice assignments (scheduled but not yet due)
   */
  async getUpcomingAssignments(userId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const now = new Date();

    return this.practiceAssignmentModel
      .find({
        userId: userObjectId,
        completedAt: null,
        scheduledDate: { $gt: now },
        skipped: false,
      })
      .sort({ scheduledDate: 1 })
      .exec();
  }

  /**
   * Get a specific assignment by ID
   */
  async getAssignment(userId: string, assignmentId: string) {
    const userObjectId = new Types.ObjectId(userId);

    const assignment = await this.practiceAssignmentModel.findOne({
      _id: assignmentId,
      userId: userObjectId,
    });

    if (!assignment) {
      throw new NotFoundException('Practice assignment not found');
    }

    return assignment;
  }

  /**
   * Submit a response to a practice assignment
   */
  async submitResponse(userId: string, assignmentId: string, response: string) {
    const userObjectId = new Types.ObjectId(userId);

    const assignment = await this.practiceAssignmentModel.findOne({
      _id: assignmentId,
      userId: userObjectId,
    });

    if (!assignment) {
      throw new NotFoundException('Practice assignment not found');
    }

    assignment.response = response;
    assignment.completedAt = new Date();
    assignment.metadata = {
      ...assignment.metadata,
      wordCount: response.split(/\s+/).length,
      characterCount: response.length,
    };

    return assignment.save();
  }

  /**
   * Skip a practice assignment
   */
  async skipAssignment(userId: string, assignmentId: string) {
    const userObjectId = new Types.ObjectId(userId);

    const assignment = await this.practiceAssignmentModel.findOne({
      _id: assignmentId,
      userId: userObjectId,
    });

    if (!assignment) {
      throw new NotFoundException('Practice assignment not found');
    }

    assignment.skipped = true;
    assignment.completedAt = new Date();

    return assignment.save();
  }

  /**
   * Get completed assignments for a user (for review/reflection)
   */
  async getCompletedAssignments(userId: string, limit = 20) {
    const userObjectId = new Types.ObjectId(userId);

    return this.practiceAssignmentModel
      .find({
        userId: userObjectId,
        completedAt: { $ne: null },
      })
      .sort({ completedAt: -1 })
      .limit(limit)
      .exec();
  }

  /**
   * Get assignment statistics for a user
   */
  async getAssignmentStats(userId: string) {
    const userObjectId = new Types.ObjectId(userId);

    const [total, completed, skipped, pending] = await Promise.all([
      this.practiceAssignmentModel.countDocuments({ userId: userObjectId }),
      this.practiceAssignmentModel.countDocuments({
        userId: userObjectId,
        completedAt: { $ne: null },
        skipped: false,
      }),
      this.practiceAssignmentModel.countDocuments({
        userId: userObjectId,
        skipped: true,
      }),
      this.practiceAssignmentModel.countDocuments({
        userId: userObjectId,
        completedAt: null,
        skipped: false,
        scheduledDate: { $lte: new Date() },
      }),
    ]);

    return {
      total,
      completed,
      skipped,
      pending,
      completionRate: total > 0 ? (completed / total) * 100 : 0,
    };
  }
}
