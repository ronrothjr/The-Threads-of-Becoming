import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Journal, JournalDocument } from '../schemas/journal.schema';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class JournalService {
  constructor(
    @InjectModel(Journal.name) private journalModel: Model<JournalDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async createEntry(
    userId: string,
    threadFocus: string,
    content: string,
    practiceType?: string,
    experiencedAt?: Date,
    tags?: string[],
  ) {
    const entry = new this.journalModel({
      userId,
      threadFocus,
      content,
      practiceType,
      experiencedAt: experiencedAt || new Date(),
      tags: tags || [],
    });

    await entry.save();

    // Update user's journal days count
    await this.updateJournalDaysCount(userId);

    return entry;
  }

  async updateEntry(
    userId: string,
    entryId: string,
    updates: {
      threadFocus?: string;
      content?: string;
      practiceType?: string;
      tags?: string[];
    },
  ) {
    const entry = await this.journalModel.findOne({
      _id: entryId,
      userId,
    });

    if (!entry) {
      throw new Error('Entry not found or unauthorized');
    }

    Object.assign(entry, updates);
    await entry.save();

    return entry;
  }

  async deleteEntry(userId: string, entryId: string) {
    const result = await this.journalModel.deleteOne({
      _id: entryId,
      userId,
    });

    if (result.deletedCount === 0) {
      throw new Error('Entry not found or unauthorized');
    }

    // Update user's journal days count after deletion
    await this.updateJournalDaysCount(userId);

    return { deleted: true };
  }

  async getEntries(userId: string, limit = 50) {
    return this.journalModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }

  async getStats(userId: string) {
    const entries = await this.journalModel.find({ userId }).exec();

    // Count unique days with journal entries
    const uniqueDays = new Set(
      entries.map((entry) => {
        const date = new Date(entry.createdAt || new Date());
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }),
    );

    const journalDaysCount = uniqueDays.size;
    const totalEntries = entries.length;

    // Get thread focus breakdown
    const threadBreakdown: Record<string, number> = {};
    entries.forEach((entry) => {
      threadBreakdown[entry.threadFocus] =
        (threadBreakdown[entry.threadFocus] || 0) + 1;
    });

    return {
      journalDaysCount,
      totalEntries,
      threadBreakdown,
      requirementMet: journalDaysCount >= 10,
    };
  }

  private async updateJournalDaysCount(userId: string) {
    const stats = await this.getStats(userId);
    const user = await this.userModel.findById(userId).exec();

    if (user) {
      user.unlockProgress = {
        ...user.unlockProgress,
        journalDaysCount: stats.journalDaysCount,
      };

      // Check if Extended Assessment should be unlocked
      if (
        stats.journalDaysCount >= 10 &&
        !user.unlockProgress.extendedUnlocked
      ) {
        user.unlockProgress.extendedUnlocked = true;
        user.unlockProgress.unlockedAt = new Date();
      }

      await user.save();
    }
  }
}
