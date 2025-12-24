import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Practice, PracticeDocument } from '../schemas/practice.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { Journal, JournalDocument } from '../schemas/journal.schema';

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Journal.name) private journalModel: Model<JournalDocument>,
  ) {}

  async logPractice(
    userId: string,
    threadId: string,
    practiceType: string,
    notes?: string,
  ) {
    const practice = new this.practiceModel({
      userId,
      threadId,
      practiceType,
      notes,
      completedAt: new Date(),
    });

    await practice.save();

    // Update user's practice days count
    await this.updatePracticeDaysCount(userId);

    return practice;
  }

  async getPracticeHistory(userId: string, limit = 50) {
    return this.practiceModel
      .find({ userId })
      .sort({ completedAt: -1 })
      .limit(limit)
      .exec();
  }

  async updatePractice(userId: string, practiceId: string, notes?: string) {
    const practice = await this.practiceModel.findOne({
      _id: practiceId,
      userId,
    });

    if (!practice) {
      throw new Error('Practice not found or unauthorized');
    }

    if (notes !== undefined) {
      practice.notes = notes;
    }

    await practice.save();

    return practice;
  }

  async getStats(userId: string) {
    const practices = await this.practiceModel.find({ userId }).exec();

    // Count unique days with practice sessions
    const uniqueDays = new Set(
      practices.map((practice) => {
        const date = new Date(practice.completedAt);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }),
    );

    const practiceDaysCount = uniqueDays.size;
    const totalSessions = practices.length;

    // Get thread practice breakdown
    const threadBreakdown: Record<string, number> = {};
    practices.forEach((practice) => {
      threadBreakdown[practice.threadId] =
        (threadBreakdown[practice.threadId] || 0) + 1;
    });

    // Get practice type breakdown
    const typeBreakdown: Record<string, number> = {};
    practices.forEach((practice) => {
      typeBreakdown[practice.practiceType] =
        (typeBreakdown[practice.practiceType] || 0) + 1;
    });

    return {
      practiceDaysCount,
      totalSessions,
      threadBreakdown,
      typeBreakdown,
    };
  }

  private async updatePracticeDaysCount(userId: string) {
    const stats = await this.getStats(userId);
    const user = await this.userModel.findById(userId).exec();

    if (user) {
      user.unlockProgress = {
        ...user.unlockProgress,
        practiceDaysCount: stats.practiceDaysCount,
      };

      await user.save();
    }
  }

  async getAnalytics(userId: string) {
    // Get journal entries
    const journalEntries = await this.journalModel.find({ userId }).exec();
    const practices = await this.practiceModel.find({ userId }).exec();

    // Journal stats
    const journalDays = new Set(
      journalEntries.map((entry) => {
        const date = new Date(entry.createdAt || new Date());
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }),
    );

    const journalThreadBreakdown: Record<string, number> = {};
    journalEntries.forEach((entry) => {
      journalThreadBreakdown[entry.threadFocus] =
        (journalThreadBreakdown[entry.threadFocus] || 0) + 1;
    });

    // Practice stats
    const practiceDays = new Set(
      practices.map((practice) => {
        const date = new Date(practice.completedAt);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }),
    );

    const practiceThreadBreakdown: Record<string, number> = {};
    const practiceTypeBreakdown: Record<string, number> = {};

    practices.forEach((practice) => {
      practiceThreadBreakdown[practice.threadId] =
        (practiceThreadBreakdown[practice.threadId] || 0) + 1;
      practiceTypeBreakdown[practice.practiceType] =
        (practiceTypeBreakdown[practice.practiceType] || 0) + 1;
    });

    // Calculate streaks (days with any activity)
    const allActivities = [...journalEntries, ...practices].sort(
      (a, b) =>
        new Date(a.createdAt || a['completedAt']).getTime() -
        new Date(b.createdAt || b['completedAt']).getTime(),
    );

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activityDates = new Set(
      allActivities.map((activity) => {
        const date = new Date(activity.createdAt || activity['completedAt']);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
      }),
    );

    const sortedDates = Array.from(activityDates).sort((a, b) => b - a);

    // Calculate current streak
    let checkDate = today.getTime();
    for (const dateTime of sortedDates) {
      if (dateTime === checkDate || dateTime === checkDate - 86400000) {
        currentStreak++;
        checkDate = dateTime - 86400000;
      } else {
        break;
      }
    }

    // Calculate longest streak
    for (let i = 0; i < sortedDates.length; i++) {
      tempStreak = 1;
      for (let j = i + 1; j < sortedDates.length; j++) {
        if (sortedDates[j] === sortedDates[j - 1] - 86400000) {
          tempStreak++;
        } else {
          break;
        }
      }
      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
    }

    // Recent activity (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentJournal = journalEntries.filter(
      (e) => e.createdAt && new Date(e.createdAt) >= thirtyDaysAgo,
    );
    const recentPractice = practices.filter(
      (p) => new Date(p.completedAt) >= thirtyDaysAgo,
    );

    const journalActivityByDate: Record<string, number> = {};
    recentJournal.forEach((entry) => {
      if (entry.createdAt) {
        const dateStr = new Date(entry.createdAt).toISOString().split('T')[0];
        journalActivityByDate[dateStr] = (journalActivityByDate[dateStr] || 0) + 1;
      }
    });

    const practiceActivityByDate: Record<string, number> = {};
    recentPractice.forEach((practice) => {
      const dateStr = new Date(practice.completedAt)
        .toISOString()
        .split('T')[0];
      practiceActivityByDate[dateStr] =
        (practiceActivityByDate[dateStr] || 0) + 1;
    });

    return {
      journalStats: {
        totalEntries: journalEntries.length,
        journalDaysCount: journalDays.size,
        threadBreakdown: journalThreadBreakdown,
        recentActivity: Object.entries(journalActivityByDate).map(
          ([date, count]) => ({ date, count }),
        ),
      },
      practiceStats: {
        totalSessions: practices.length,
        practiceDaysCount: practiceDays.size,
        threadBreakdown: practiceThreadBreakdown,
        typeBreakdown: practiceTypeBreakdown,
        recentActivity: Object.entries(practiceActivityByDate).map(
          ([date, count]) => ({ date, count }),
        ),
      },
      streaks: {
        currentStreak,
        longestStreak,
      },
    };
  }
}
