import { Injectable } from '@nestjs/common';

export interface QuickProfileResponse {
  questionId: string;
  answer: 'A' | 'B' | 'C' | 'D';
}

export interface ThreadScore {
  score: number;
  percentage: number;
  collapseDirection: string;
}

export interface AssessmentResults {
  threadScores: {
    presence: ThreadScore;
    consent: ThreadScore;
    memory: ThreadScore;
    pause: ThreadScore;
    embodiment: ThreadScore;
    uncertainty: ThreadScore;
    becoming: ThreadScore;
  };
  movementAverages: {
    see: number;
    hold: number;
    emerge: number;
  };
  holdPracticeMapping: {
    halt: string[];
    observe: string[];
    look: string[];
    decide: string[];
  };
}

@Injectable()
export class ScoringService {
  // Question mappings for Quick Profile (3 questions per thread)
  private readonly quickProfileMapping = {
    presence: ['Q1', 'Q2', 'Q3'],
    consent: ['Q4', 'Q5', 'Q6'],
    memory: ['Q7', 'Q8', 'Q9'],
    pause: ['Q10', 'Q11', 'Q12'],
    embodiment: ['Q13', 'Q14', 'Q15'],
    uncertainty: ['Q16', 'Q17', 'Q18'],
    becoming: ['Q19', 'Q20', 'Q21'],
  };

  // Reverse-scored questions (where D=4 still indicates high capacity)
  // Questions 8, 14, 18, 20, 21 are phrased positively
  private readonly reverseScored = ['Q8', 'Q14', 'Q18', 'Q20', 'Q21'];

  /**
   * Score the Quick Profile assessment
   * Returns thread scores, movement averages, and HOLD practice mapping
   */
  scoreQuickProfile(responses: QuickProfileResponse[]): AssessmentResults {
    const threadScores = {
      presence: this.scoreThread(responses, this.quickProfileMapping.presence),
      consent: this.scoreThread(responses, this.quickProfileMapping.consent),
      memory: this.scoreThread(responses, this.quickProfileMapping.memory),
      pause: this.scoreThread(responses, this.quickProfileMapping.pause),
      embodiment: this.scoreThread(responses, this.quickProfileMapping.embodiment),
      uncertainty: this.scoreThread(responses, this.quickProfileMapping.uncertainty),
      becoming: this.scoreThread(responses, this.quickProfileMapping.becoming),
    };

    // Calculate See, Hold, Emerge averages
    const seeAverage = this.average([
      threadScores.presence.score,
      threadScores.consent.score,
      threadScores.memory.score,
      threadScores.pause.score,
    ]);

    const holdAverage = this.average([
      threadScores.embodiment.score,
      threadScores.uncertainty.score,
    ]);

    const emergeScore = threadScores.becoming.score;

    return {
      threadScores,
      movementAverages: {
        see: seeAverage,
        hold: holdAverage,
        emerge: emergeScore,
      },
      holdPracticeMapping: this.mapToHoldPractice(threadScores),
    };
  }

  /**
   * Score a single thread (3 questions)
   * Returns raw score (3-12), percentage, and collapse direction
   */
  private scoreThread(
    responses: QuickProfileResponse[],
    questionIds: string[],
  ): ThreadScore {
    let totalScore = 0;
    let aCount = 0; // "Very much like me" for negative questions
    let bCount = 0; // "Somewhat like me"
    let cCount = 0; // "Not much like me"
    let dCount = 0; // "Not at all like me" for negative questions

    questionIds.forEach((qId) => {
      const response = responses.find((r) => r.questionId === qId);

      if (response) {
        const isReverse = this.reverseScored.includes(qId);
        const score = this.getQuestionScore(response.answer, isReverse);
        totalScore += score;

        // Track answer distribution for collapse direction
        if (response.answer === 'A') aCount++;
        else if (response.answer === 'B') bCount++;
        else if (response.answer === 'C') cCount++;
        else if (response.answer === 'D') dCount++;
      }
    });

    // Max score is 12 (3 questions × 4 points each)
    const maxScore = questionIds.length * 4;
    const percentage = (totalScore / maxScore) * 100;

    // Determine collapse direction
    // If mostly A/B answers (lower capacity), collapsing toward first pole
    // If mostly C/D answers (higher capacity), balanced or toward second pole
    let collapseDirection: string;
    const lowCapacityCount = aCount + bCount;
    const highCapacityCount = cCount + dCount;

    if (lowCapacityCount >= 2) {
      collapseDirection = 'low'; // Frequent collapse
    } else if (highCapacityCount >= 2) {
      collapseDirection = 'balanced'; // Balanced or high capacity
    } else {
      collapseDirection = 'moderate'; // Mixed
    }

    return {
      score: totalScore,
      percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal
      collapseDirection,
    };
  }

  /**
   * Convert answer to score
   * Regular questions: A=1, B=2, C=3, D=4
   * Reverse questions: Still A=1, B=2, C=3, D=4 (they're phrased to align)
   */
  private getQuestionScore(
    answer: 'A' | 'B' | 'C' | 'D',
    isReverse: boolean,
  ): number {
    const scores = { A: 1, B: 2, C: 3, D: 4 };
    return scores[answer];
  }

  /**
   * Calculate average of scores
   */
  private average(scores: number[]): number {
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round((sum / scores.length) * 10) / 10; // Round to 1 decimal
  }

  /**
   * Map thread scores to HOLD practice focus
   * Based on the Quick Profile guide:
   * - Low SEE threads (< 60%) → HALT + OBSERVE
   * - Low HOLD threads (< 70%) → OBSERVE + LOOK
   * - Low EMERGE thread (< 70%) → DECIDE
   */
  private mapToHoldPractice(threadScores: Record<string, ThreadScore>) {
    const mapping = {
      halt: [] as string[],
      observe: [] as string[],
      look: [] as string[],
      decide: [] as string[],
    };

    // SEE threads (PRESENCE, CONSENT, MEMORY, PAUSE)
    // Low scores → need HALT + OBSERVE
    ['presence', 'consent', 'memory', 'pause'].forEach((thread) => {
      if (threadScores[thread].percentage < 60) {
        mapping.halt.push(thread.toUpperCase());
        mapping.observe.push(thread.toUpperCase());
      } else if (threadScores[thread].percentage < 75) {
        mapping.observe.push(thread.toUpperCase());
      }
    });

    // HOLD threads (EMBODIMENT, UNCERTAINTY)
    // Low scores → need OBSERVE + LOOK
    ['embodiment', 'uncertainty'].forEach((thread) => {
      if (threadScores[thread].percentage < 70) {
        mapping.observe.push(thread.toUpperCase());
        mapping.look.push(thread.toUpperCase());
      }
    });

    // EMERGE thread (BECOMING)
    // Low score → need DECIDE
    if (threadScores.becoming.percentage < 70) {
      mapping.decide.push('BECOMING');
    }

    // Remove duplicates
    mapping.halt = [...new Set(mapping.halt)];
    mapping.observe = [...new Set(mapping.observe)];
    mapping.look = [...new Set(mapping.look)];
    mapping.decide = [...new Set(mapping.decide)];

    return mapping;
  }
}
