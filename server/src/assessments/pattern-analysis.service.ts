import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Journal, JournalDocument } from '../schemas/journal.schema';
import { Practice, PracticeDocument } from '../schemas/practice.schema';

export interface PatternInsight {
  category: string;
  insight: string;
  evidence: string[];
  recommendation: string;
}

@Injectable()
export class PatternAnalysisService {
  constructor(
    @InjectModel(Journal.name) private journalModel: Model<JournalDocument>,
    @InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>,
  ) {}

  async analyzeUserPatterns(userId: string): Promise<{
    insights: PatternInsight[];
    summary: string;
    threadFocus: Record<string, number>;
    commonThemes: string[];
    practiceConsistency: {
      totalDays: number;
      averageGap: number;
      longestStreak: number;
      threadDiversity: number;
    };
  }> {
    const journals = await this.journalModel.find({ userId }).sort({ createdAt: -1 }).limit(50).exec();
    const practices = await this.practiceModel.find({ userId }).sort({ createdAt: -1 }).limit(50).exec();

    const insights: PatternInsight[] = [];
    const threadFocus: Record<string, number> = {};
    const commonThemes: string[] = [];

    // Analyze thread focus distribution
    journals.forEach(j => {
      threadFocus[j.threadFocus] = (threadFocus[j.threadFocus] || 0) + 1;
    });

    practices.forEach(p => {
      threadFocus[p.threadId] = (threadFocus[p.threadId] || 0) + 1;
    });

    // Pattern 1: Thread Avoidance
    const allThreads = ['PRESENCE', 'CONSENT', 'MEMORY', 'PAUSE', 'EMBODIMENT', 'UNCERTAINTY', 'BECOMING'];
    const addressedThreads = Object.keys(threadFocus);
    const avoidedThreads = allThreads.filter(t => !addressedThreads.includes(t));

    if (avoidedThreads.length > 0) {
      insights.push({
        category: 'Avoidance Pattern',
        insight: `You haven't journaled or practiced with ${avoidedThreads.join(', ')} yet.`,
        evidence: [`0 entries for ${avoidedThreads.length} threads`],
        recommendation: `Consider exploring ${avoidedThreads[0]} this week. Sometimes the threads we avoid are the ones we need most.`,
      });
    }

    // Pattern 2: Overemphasis on one thread
    const maxThread = Object.entries(threadFocus).sort((a, b) => b[1] - a[1])[0];
    const totalEntries = journals.length + practices.length;
    if (maxThread && maxThread[1] / totalEntries > 0.4) {
      insights.push({
        category: 'Focus Imbalance',
        insight: `${((maxThread[1] / totalEntries) * 100).toFixed(0)}% of your work focuses on ${maxThread[0]}.`,
        evidence: [`${maxThread[1]} of ${totalEntries} entries`],
        recommendation: `While deep focus is valuable, consider broadening to other threads. Often our strongest thread isn't where we need the most growth.`,
      });
    }

    // Pattern 3: Language analysis - resistance words
    const allJournalText = journals.map(j => j.content.toLowerCase()).join(' ');
    const resistanceWords = ['can\'t', 'unable', 'impossible', 'too hard', 'don\'t know how', 'confused', 'stuck'];
    const resistanceCount = resistanceWords.filter(word => allJournalText.includes(word)).length;

    if (resistanceCount > 3 && journals.length > 5) {
      insights.push({
        category: 'Language Pattern: Resistance',
        insight: 'Your journal entries frequently use language of impossibility and stuckness.',
        evidence: resistanceWords.filter(w => allJournalText.includes(w)),
        recommendation: 'Try reframing: instead of "I can\'t," ask "What would it take to...?" Notice how the question shifts your relationship to the difficulty.',
      });
    }

    // Pattern 4: Awareness language - noticing words
    const awarenessWords = ['noticed', 'realized', 'saw', 'recognized', 'observed', 'aware', 'felt'];
    const awarenessCount = awarenessWords.filter(word => allJournalText.includes(word)).length;

    if (awarenessCount > 5 && journals.length > 5) {
      insights.push({
        category: 'Language Pattern: Growing Awareness',
        insight: 'You frequently use language of observation and noticing.',
        evidence: awarenessWords.filter(w => allJournalText.includes(w)),
        recommendation: 'This meta-awareness is a strength. Keep cultivating it - the gap between event and reaction is where transformation happens.',
      });
    }

    // Pattern 5: Practice consistency
    if (practices.length >= 3) {
      const practiceDates = practices.map(p => new Date(p.createdAt!).getTime()).sort((a, b) => b - a);
      const gaps: number[] = [];
      for (let i = 0; i < practiceDates.length - 1; i++) {
        gaps.push((practiceDates[i] - practiceDates[i + 1]) / (1000 * 60 * 60 * 24));
      }
      const avgGap = gaps.reduce((a, b) => a + b, 0) / gaps.length;

      if (avgGap > 7) {
        insights.push({
          category: 'Practice Rhythm',
          insight: 'Your practice sessions are often more than a week apart.',
          evidence: [`Average gap: ${avgGap.toFixed(1)} days`],
          recommendation: 'Consider smaller, more frequent practices. Five minutes daily builds capacity more effectively than hour-long sessions once a week.',
        });
      } else if (avgGap < 2) {
        insights.push({
          category: 'Practice Rhythm',
          insight: 'You practice frequently and consistently.',
          evidence: [`Average gap: ${avgGap.toFixed(1)} days`],
          recommendation: 'Your consistency is impressive. Notice how this regular practice is changing your baseline capacity.',
        });
      }
    }

    // Pattern 6: Journal depth - word count analysis
    const avgWordCount = journals.reduce((sum, j) => sum + j.content.split(' ').length, 0) / Math.max(journals.length, 1);
    if (avgWordCount < 20 && journals.length > 3) {
      insights.push({
        category: 'Journaling Depth',
        insight: 'Your journal entries tend to be brief (averaging ' + Math.round(avgWordCount) + ' words).',
        evidence: ['Short entries across multiple days'],
        recommendation: 'Try spending an extra 2 minutes per entry. Ask yourself: "What am I not saying here?" The unspoken often holds the most wisdom.',
      });
    }

    // Pattern 7: Relational language
    const relationalWords = ['partner', 'spouse', 'friend', 'family', 'colleague', 'boss', 'child', 'parent', 'relationship'];
    const relationalCount = relationalWords.filter(word => allJournalText.includes(word)).length;

    if (relationalCount > 3 && journals.length > 3) {
      commonThemes.push('Relational Dynamics');
      insights.push({
        category: 'Context Pattern: Relationships',
        insight: 'Many of your entries focus on relational challenges.',
        evidence: relationalWords.filter(w => allJournalText.includes(w)),
        recommendation: 'Relationships are where we collapse most visibly. Notice: when you hold tension in relationship, what thread collapses first?',
      });
    }

    // Pattern 8: Emotional language
    const emotionWords = {
      anxiety: ['anxious', 'worried', 'nervous', 'stressed', 'fear', 'afraid'],
      anger: ['angry', 'frustrated', 'irritated', 'mad', 'furious'],
      sadness: ['sad', 'depressed', 'hopeless', 'grief', 'loss'],
      shame: ['ashamed', 'embarrassed', 'guilty', 'wrong', 'bad'],
    };

    for (const [emotion, words] of Object.entries(emotionWords)) {
      const count = words.filter(w => allJournalText.includes(w)).length;
      if (count > 2) {
        commonThemes.push(emotion.charAt(0).toUpperCase() + emotion.slice(1));
      }
    }

    // Calculate practice consistency metrics
    let longestStreak = 0;
    let currentStreak = 0;
    const allActivityDates = [...journals.map(j => j.createdAt), ...practices.map(p => p.createdAt)]
      .filter((d): d is Date => d !== undefined)
      .map(d => {
        const date = new Date(d);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
      })
      .sort((a, b) => b - a);

    const uniqueDates = [...new Set(allActivityDates)];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < uniqueDates.length; i++) {
      if (i === 0 || uniqueDates[i - 1] - uniqueDates[i] === 86400000) {
        currentStreak++;
        longestStreak = Math.max(longestStreak, currentStreak);
      } else {
        currentStreak = 1;
      }
    }

    const practiceGaps: number[] = [];
    for (let i = 0; i < uniqueDates.length - 1; i++) {
      practiceGaps.push((uniqueDates[i] - uniqueDates[i + 1]) / (1000 * 60 * 60 * 24));
    }
    const averageGap = practiceGaps.length > 0 ? practiceGaps.reduce((a, b) => a + b, 0) / practiceGaps.length : 0;

    // Generate summary
    let summary = '';
    if (journals.length === 0 && practices.length === 0) {
      summary = 'You haven\'t started journaling or practicing yet. Your Personal Journey Map gives you the roadmap - now it\'s time to begin walking the path.';
    } else if (journals.length > 10 || practices.length > 10) {
      summary = `You've created ${journals.length} journal entries and ${practices.length} practice sessions. This consistent engagement is building real capacity. The patterns below show where you're developing awareness and where there's room to deepen.`;
    } else {
      summary = `You've started your journey with ${journals.length} journal entries and ${practices.length} practice sessions. You're building the foundation. The insights below will help you focus your continued practice.`;
    }

    return {
      insights,
      summary,
      threadFocus,
      commonThemes: [...new Set(commonThemes)],
      practiceConsistency: {
        totalDays: uniqueDates.length,
        averageGap,
        longestStreak,
        threadDiversity: Object.keys(threadFocus).length,
      },
    };
  }
}
