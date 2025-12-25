import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Journal, JournalDocument } from '../schemas/journal.schema';
import { Practice, PracticeDocument } from '../schemas/practice.schema';

export interface UnlockAnalysis {
  isUnlocked: boolean;
  canUnlock: boolean;
  requirements: {
    journalDays: { current: number; required: number; met: boolean };
    practiceSessions: { current: number; required: number; met: boolean };
    threadDiversity: { current: number; required: number; met: boolean };
    daysSinceQuickProfile: { current: number; required: number; met: boolean };
  };
  insights: {
    mostJournaledThread: string;
    mostPracticedThread: string;
    threadDistribution: Record<string, number>;
    commonContexts: string[];
    collapseIndicators: string[];
    personalizedMessage: string;
  };
  journalAnalysis: {
    totalEntries: number;
    uniqueDays: number;
    threadEngagement: Record<string, { count: number; percentage: number }>;
    contextPatterns: Record<string, number>;
  };
  practiceAnalysis: {
    totalSessions: number;
    uniqueDays: number;
    sessionsWithNotes: number;
    avgNotesLength: number;
    insightfulSessions: number;
  };
}

@Injectable()
export class ExtendedUnlockService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Journal.name) private journalModel: Model<JournalDocument>,
    @InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>,
  ) {}

  async analyzeUnlockStatus(userId: string): Promise<UnlockAnalysis> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new Error('User not found');
    }

    // Check if already unlocked via purchase or subscription
    const isPremium = ['premium', 'professional'].includes(user.subscription?.tier);
    const hasPurchased = user.assessments?.extendedPurchased;
    const alreadyUnlocked = user.unlockProgress?.extendedUnlocked;

    if (isPremium || hasPurchased || alreadyUnlocked) {
      return this.buildUnlockedResponse(userId, user, true);
    }

    // Get journal and practice data
    const journals = await this.journalModel.find({ userId }).exec();
    const practices = await this.practiceModel.find({ userId }).exec();

    // Calculate unique days
    const journalDays = new Set(
      journals.map((j) => {
        const date = new Date(j.createdAt || new Date());
        return date.toISOString().split('T')[0];
      }),
    ).size;

    const practiceDays = new Set(
      practices.map((p) => {
        const date = new Date(p.completedAt || new Date());
        return date.toISOString().split('T')[0];
      }),
    ).size;

    // Calculate thread diversity
    const threadsEngaged = new Set([
      ...journals.map((j) => j.threadFocus),
      ...practices.map((p) => p.threadId),
    ]);

    // Days since Quick Profile
    const quickProfileDate = user.assessments?.quickProfileDate;
    const daysSinceQuickProfile = quickProfileDate
      ? Math.floor(
          (Date.now() - new Date(quickProfileDate).getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

    // Count practice sessions with meaningful notes
    const sessionsWithNotes = practices.filter(
      (p) => p.notes && p.notes.length > 50,
    ).length;

    // Check requirements (updated to 5 practices)
    const requirements = {
      journalDays: { current: journalDays, required: 10, met: journalDays >= 10 },
      practiceSessions: {
        current: sessionsWithNotes,
        required: 5,
        met: sessionsWithNotes >= 5,
      },
      threadDiversity: {
        current: threadsEngaged.size,
        required: 3,
        met: threadsEngaged.size >= 3,
      },
      daysSinceQuickProfile: {
        current: daysSinceQuickProfile,
        required: 14,
        met: daysSinceQuickProfile >= 14,
      },
    };

    const canUnlock = Object.values(requirements).every((req) => req.met);

    // Auto-unlock if requirements met
    if (canUnlock && !alreadyUnlocked) {
      await this.userModel.findByIdAndUpdate(userId, {
        'unlockProgress.extendedUnlocked': true,
        'unlockProgress.unlockedAt': new Date(),
        'unlockProgress.journalDaysCount': journalDays,
        'unlockProgress.practiceDaysCount': practiceDays,
      });
    }

    return this.buildUnlockedResponse(userId, user, canUnlock, requirements);
  }

  private async buildUnlockedResponse(
    userId: string,
    user: UserDocument,
    isUnlocked: boolean,
    requirements?: any,
  ): Promise<UnlockAnalysis> {
    const journals = await this.journalModel.find({ userId }).exec();
    const practices = await this.practiceModel.find({ userId }).exec();

    // Analyze thread distribution
    const threadCounts: Record<string, number> = {};
    journals.forEach((j) => {
      threadCounts[j.threadFocus] = (threadCounts[j.threadFocus] || 0) + 1;
    });
    practices.forEach((p) => {
      threadCounts[p.threadId] = (threadCounts[p.threadId] || 0) + 1;
    });

    const totalEngagements = journals.length + practices.length;
    const threadEngagement: Record<string, { count: number; percentage: number }> = {};
    Object.entries(threadCounts).forEach(([thread, count]) => {
      threadEngagement[thread] = {
        count,
        percentage: Math.round((count / totalEngagements) * 100),
      };
    });

    // Find most engaged threads
    const sortedThreads = Object.entries(threadCounts).sort((a, b) => b[1] - a[1]);
    const mostJournaledThread = sortedThreads[0]?.[0] || 'none';
    const mostPracticedThread = sortedThreads[0]?.[0] || 'none';

    // Analyze contexts from practice types
    const contextPatterns: Record<string, number> = {};
    practices.forEach((p) => {
      if (p.practiceType) {
        contextPatterns[p.practiceType] = (contextPatterns[p.practiceType] || 0) + 1;
      }
    });

    // Detect collapse indicators from journal content
    const collapseIndicators: string[] = [];
    const allContent = journals.map((j) => j.content.toLowerCase()).join(' ');

    if (allContent.includes('should have') || allContent.includes('regret')) {
      collapseIndicators.push('Regret pattern (PAUSE collapse A)');
    }
    if (allContent.includes('rushed') || allContent.includes('reacted quickly')) {
      collapseIndicators.push('Impulsivity (PAUSE collapse A)');
    }
    if (
      allContent.includes('put it off') ||
      allContent.includes('procrastinated') ||
      allContent.includes('avoided')
    ) {
      collapseIndicators.push('Procrastination (PAUSE collapse B)');
    }
    if (allContent.includes("didn't feel") || allContent.includes('numb')) {
      collapseIndicators.push('Disconnection from body (EMBODIMENT collapse A)');
    }
    if (allContent.includes('overwhelmed') || allContent.includes('too much sensation')) {
      collapseIndicators.push('Body overwhelm (EMBODIMENT collapse B)');
    }

    // Generate personalized message
    const daysSince = user.assessments?.quickProfileDate
      ? Math.floor(
          (Date.now() - new Date(user.assessments.quickProfileDate).getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

    let personalizedMessage = '';
    if (isUnlocked) {
      personalizedMessage = `You've engaged with the Threads framework through ${journals.length} journal entries and ${practices.length} practice sessions over ${daysSince} days. Your Extended Assessment ($10 one-time purchase) is ready! This deeper 70-question assessment will identify your specific collapse patterns and provide targeted guidance. Premium subscribers get instant access for free.`;
    } else {
      const remaining: string[] = [];
      if (requirements?.journalDays && !requirements.journalDays.met) {
        remaining.push(
          `${requirements.journalDays.required - requirements.journalDays.current} more journal days`,
        );
      }
      if (requirements?.practiceSessions && !requirements.practiceSessions.met) {
        remaining.push(
          `${requirements.practiceSessions.required - requirements.practiceSessions.current} more practice sessions with notes`,
        );
      }
      if (requirements?.threadDiversity && !requirements.threadDiversity.met) {
        remaining.push(
          `practice with ${requirements.threadDiversity.required - requirements.threadDiversity.current} more threads`,
        );
      }
      if (requirements?.daysSinceQuickProfile && !requirements.daysSinceQuickProfile.met) {
        remaining.push(
          `wait ${requirements.daysSinceQuickProfile.required - requirements.daysSinceQuickProfile.current} more days`,
        );
      }

      personalizedMessage = `Keep practicing! To unlock the Extended Assessment ($10 one-time purchase, free for Premium subscribers), you need to: ${remaining.join(', ')}. This ensures you have real experience to draw from when taking the deeper assessment.`;
    }

    // Calculate practice quality metrics
    const sessionsWithNotes = practices.filter((p) => p.notes && p.notes.length > 0);
    const avgNotesLength =
      sessionsWithNotes.length > 0
        ? Math.round(
            sessionsWithNotes.reduce((sum, p) => sum + (p.notes?.length || 0), 0) /
              sessionsWithNotes.length,
          )
        : 0;
    const insightfulSessions = practices.filter(
      (p) => p.notes && p.notes.length > 100,
    ).length;

    const journalDays = new Set(
      journals.map((j) => new Date(j.createdAt || new Date()).toISOString().split('T')[0]),
    ).size;
    const practiceDays = new Set(
      practices.map((p) =>
        new Date(p.completedAt || new Date()).toISOString().split('T')[0],
      ),
    ).size;

    return {
      isUnlocked,
      canUnlock: isUnlocked,
      requirements: requirements || {
        journalDays: { current: journalDays, required: 10, met: true },
        practiceSessions: {
          current: sessionsWithNotes.length,
          required: 5,
          met: true,
        },
        threadDiversity: {
          current: Object.keys(threadCounts).length,
          required: 3,
          met: true,
        },
        daysSinceQuickProfile: { current: daysSince, required: 14, met: true },
      },
      insights: {
        mostJournaledThread,
        mostPracticedThread,
        threadDistribution: threadCounts,
        commonContexts: Object.keys(contextPatterns),
        collapseIndicators,
        personalizedMessage,
      },
      journalAnalysis: {
        totalEntries: journals.length,
        uniqueDays: journalDays,
        threadEngagement,
        contextPatterns,
      },
      practiceAnalysis: {
        totalSessions: practices.length,
        uniqueDays: practiceDays,
        sessionsWithNotes: sessionsWithNotes.length,
        avgNotesLength,
        insightfulSessions,
      },
    };
  }
}
