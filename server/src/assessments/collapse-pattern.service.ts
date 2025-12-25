import { Injectable } from '@nestjs/common';

export interface CollapsePattern {
  id: string;
  name: string;
  coreCollapse: string[];
  description: string;
  experience: string;
  behavioralSigns: string[];
  theTrap: string;
  breakingThePattern: string[];
  holdFocus: string;
  deeperFears: string[];
  deeperNeeds: string[];
  customPractices: string[];
  detectionConfidence: number; // 0-1 score
}

export interface PatternCascade {
  trigger: string;
  sequence: Array<{
    thread: string;
    collapseType: string;
    effect: string;
  }>;
  finalPattern: string;
}

export interface DevelopmentPath {
  priority: 'immediate' | 'near-term' | 'long-term';
  thread: string;
  currentState: string;
  targetState: string;
  rationale: string;
  practices: string[];
  estimatedWeeks: number;
}

interface ThreadScoreData {
  score: number;
  percentage: number;
  collapseDirection: string;
}

@Injectable()
export class CollapsePatternService {
  private patterns = [
    {
      id: 'righteous_reactor',
      name: 'The Righteous Reactor',
      coreCollapse: ['PAUSE', 'CONSENT', 'BECOMING'],
      signature: {
        pause: 'low', // Impulsive/reactive
        consent: 'low', // Must change others
        becoming: 'low', // Position = identity
      },
      description: 'Quick to react, driven by moral urgency, fuses identity with positions',
      experience: 'When I see something wrong, I HAVE to respond. How can I stay silent when people are being harmed? If I don\'t speak up, I\'m complicit.',
      behavioralSigns: [
        'Rapid-fire responses to triggering content',
        'Long, passionate arguments that rarely change minds',
        'Feeling exhausted but unable to disengage',
        'Broken relationships over disagreements',
        'Regret after heated exchanges (but repeating the pattern)',
      ],
      theTrap: 'The collapse feels like moral consistency, but it\'s actually moral reactivity. The pattern generates heat without light, burns bridges that might carry truth across.',
      breakingThePattern: [
        'Interrupt PAUSE first — Create the gap. Even 30 seconds changes everything.',
        'Question BECOMING — "Is my identity actually at stake here, or just my position?"',
        'Release CONSENT — "What if I let them be wrong and stayed connected?"',
      ],
      holdFocus: 'The "H" step—HALT—is critical. If you can pause, the rest of the collapse often doesn\'t happen.',
      deeperFears: [
        'Fear of being complicit in harm through silence',
        'Fear of losing moral identity',
        'Fear that not fighting = not caring',
        'Fear of being seen as weak or compromising',
      ],
      deeperNeeds: [
        'Need to be recognized as morally consistent',
        'Need to protect vulnerable others',
        'Need for ideological coherence',
        'Need to matter through advocacy',
      ],
      customPractices: [
        'Practice the 30-second pause before responding to triggering content',
        'Journal: "What would I lose if I didn\'t respond right now?"',
        'Experiment with staying connected to someone you disagree with without trying to change them',
        'Notice the physical sensations that precede your reactive urge',
      ],
    },
    {
      id: 'anxious_avoider',
      name: 'The Anxious Avoider',
      coreCollapse: ['EMBODIMENT', 'UNCERTAINTY', 'PAUSE'],
      signature: {
        embodiment: 'low', // Disembodied/retreating
        uncertainty: 'low', // False certainty to end discomfort
        pause: 'high', // Avoidance/procrastination
      },
      description: 'Avoids discomfort, retreats into abstraction, takes rigid positions to end uncertainty',
      experience: 'I just don\'t want to deal with it. These conversations never go anywhere. I know what I believe—why put myself through that?',
      behavioralSigns: [
        'Changing the subject when things get uncomfortable',
        '"Let\'s not talk politics" as a consistent position',
        'Strong opinions held privately, never tested publicly',
        'Physically leaving or checking out during difficult conversations',
        'Preferring online engagement over in-person (more control)',
      ],
      theTrap: 'Avoidance feels like wisdom ("I\'m above the fray") but it\'s actually escape. The Anxious Avoider never develops the capacity to hold difficult conversations—and those conversations become more difficult the longer they\'re avoided.',
      breakingThePattern: [
        'Build EMBODIMENT capacity in low-stakes situations — Practice staying with mild discomfort',
        'Use EMBODIMENT as early warning — Notice the body\'s escape signals as information',
        'Soften UNCERTAINTY collapse — "I could be somewhat right AND this is more complicated"',
      ],
      holdFocus: 'The "O" step—OBSERVE your body—catches the avoidance impulse before it triggers retreat.',
      deeperFears: [
        'Fear of being overwhelmed by emotion',
        'Fear of being called out as ignorant or harmful',
        'Fear of losing control in the conversation',
        'Fear of discovering uncertainty about cherished beliefs',
      ],
      deeperNeeds: [
        'Need for emotional safety',
        'Need to protect self-image',
        'Need for predictability and control',
        'Need to avoid shame',
      ],
      customPractices: [
        'Body scan practice: Notice where discomfort lives in your body without leaving',
        'Gradual exposure: Start with 2-minute difficult conversations, then build',
        'Practice saying "I don\'t know" about something you care about',
        'Notice the moment you want to change the subject—stay for 30 more seconds',
      ],
    },
    {
      id: 'tribal_warrior',
      name: 'The Tribal Warrior',
      coreCollapse: ['MEMORY', 'CONSENT', 'PRESENCE'],
      signature: {
        memory: 'low', // Trapped in inherited narrative
        consent: 'low', // Others as enemies
        presence: 'low', // Relating to categories not people
      },
      description: 'Defends the tribe, sees outsiders as enemies, inherited story becomes THE story',
      experience: 'My people have always known this. Our history proves it. And these people attacking us—they\'ve been doing this forever. We have to fight back.',
      behavioralSigns: [
        '"Us vs. them" framing of most conflicts',
        'Deep identification with group (party, nation, faith, movement)',
        'Perceiving neutral parties as enemies ("If you\'re not with us...")',
        'Aggressive defense when group is criticized',
        'Inability to see legitimate critique of in-group',
      ],
      theTrap: 'The collapse transforms appropriate group love into reactive tribalism. The inherited narrative becomes the only narrative; outsiders become enemies; defense becomes attack.',
      breakingThePattern: [
        'Examine MEMORY — "Is this truly MY story, or one I inherited? Where did I learn this?"',
        'Question the enemy — "What if they\'re not enemies but people I disagree with?"',
        'Rebuild PRESENCE — Practice meeting the actual person, not the category',
      ],
      holdFocus: 'The "L" step—LOOK for the tension—helps: "I want to protect my people AND I want to see others accurately."',
      deeperFears: [
        'Fear of betraying the tribe',
        'Fear of exile from community',
        'Fear that questioning the narrative means abandoning values',
        'Fear of the tribe being destroyed',
      ],
      deeperNeeds: [
        'Need to belong to something larger',
        'Need to honor inherited values',
        'Need to protect loved ones',
        'Need for historical continuity',
      ],
      customPractices: [
        'Interview someone from your "tribe" about what THEY believe (not the party line)',
        'Practice: "This person I disagree with also wants..." (find the human need)',
        'Examine one inherited belief: "Do I actually hold this, or am I carrying it?"',
        'Notice when you\'re relating to a category vs. the person in front of you',
      ],
    },
    {
      id: 'paralyzed_intellectual',
      name: 'The Paralyzed Intellectual',
      coreCollapse: ['UNCERTAINTY', 'PAUSE', 'BECOMING'],
      signature: {
        uncertainty: 'high', // Excessive doubt
        pause: 'high', // Paralysis not readiness
        becoming: 'high', // No stable ground
      },
      description: 'Sees all sides, unable to commit, uses intelligence to avoid action',
      experience: 'I can see merit in multiple positions. I don\'t want to be wrong. Every time I form a view, I see the counter-argument. So I just... think about it more.',
      behavioralSigns: [
        'Endlessly researching before taking positions',
        '"It\'s complicated" as a final answer',
        'Critiquing all sides without committing to any',
        'Feeling superior to "simpletons" with clear views',
        'Paralysis in the face of needed decisions',
      ],
      theTrap: 'The pattern uses intelligence as defense against commitment. The fear of being wrong prevents action. Meanwhile, the world is shaped by people willing to be wrong.',
      breakingThePattern: [
        'Rebuild PAUSE toward action — "I can act without certainty"',
        'Reframe UNCERTAINTY — Holding uncertainty doesn\'t mean paralysis; it means humble action',
        'Establish BECOMING with continuity — "I can have stable commitments that evolve"',
      ],
      holdFocus: 'The "D" step—DECIDE who you want to be—is crucial. Decisional identity creates ground to act from.',
      deeperFears: [
        'Fear of being wrong and exposed as foolish',
        'Fear of becoming "one of those certain people"',
        'Fear of commitment limiting future options',
        'Fear of discovering one\'s own biases',
      ],
      deeperNeeds: [
        'Need to be intellectually respected',
        'Need to maintain all options',
        'Need to be more nuanced than others',
        'Need to avoid the shame of error',
      ],
      customPractices: [
        'Practice provisional commitment: "For the next month, I\'ll act as if X is true"',
        'Make one small decision per day without additional research',
        'Notice when analysis becomes avoidance: "Am I seeking truth or safety?"',
        'Journal: "What if being 70% right and committed beats being uncertain and inactive?"',
      ],
    },
    {
      id: 'constant_converter',
      name: 'The Constant Converter',
      coreCollapse: ['CONSENT', 'UNCERTAINTY', 'PRESENCE'],
      signature: {
        consent: 'low', // Must convert others
        uncertainty: 'low', // Excessive certainty
        presence: 'low', // Not seeing the actual person
      },
      description: 'Driven to convince, certain of rightness, pursues disengagers, damages relationships',
      experience: 'I\'m not aggressive, I\'m passionate. And I\'m RIGHT. If they would just listen, they\'d understand. I\'m doing them a favor.',
      behavioralSigns: [
        'Every conversation becomes an opportunity to convince',
        '"Teaching moments" that feel like lectures',
        'Pursuing people who try to disengage',
        'Feeling responsible for others\' views',
        'Damaged relationships from relentless advocacy',
      ],
      theTrap: 'The pattern destroys the relationship through which persuasion could actually happen. People don\'t change because they\'re overwhelmed; they change when they feel respected enough to reconsider.',
      breakingThePattern: [
        'Release CONSENT — "What if I let them find their own way?"',
        'Soften UNCERTAINTY collapse — "What if I\'m not as certain as I feel?"',
        'Build PRESENCE — See the actual person, not the conversion project',
      ],
      holdFocus: 'The "L" step helps here: "I want to share truth AND I want to stay connected."',
      deeperFears: [
        'Fear that others\' wrongness reflects on you',
        'Fear of being complicit through silence',
        'Fear that not converting = not caring',
        'Fear of helplessly watching people make mistakes',
      ],
      deeperNeeds: [
        'Need to be helpful and valued',
        'Need to spread important truth',
        'Need to reduce suffering through knowledge',
        'Need to be seen as wise',
      ],
      customPractices: [
        'Practice: Have one conversation this week where you ask 5 questions and share 0 opinions',
        'Notice the urge to correct—let it pass without acting',
        'Journal: "What would it cost me to let them be wrong?"',
        'Experiment: Can you stay curious about why they believe what they believe?',
      ],
    },
    {
      id: 'frozen_deer',
      name: 'The Frozen Deer',
      coreCollapse: ['PAUSE', 'EMBODIMENT', 'CONSENT'],
      signature: {
        pause: 'high', // Freezing not responding
        embodiment: 'low', // Overwhelmed by body
        consent: 'low', // Can\'t hold boundaries
      },
      description: 'Freeze response in conflict, dissociates, physical overwhelm, processes only afterward',
      experience: 'When things get heated, I just... shut down. I can\'t think. I feel my heart racing, face flushing, mind going blank. I just wait for it to be over.',
      behavioralSigns: [
        'Going silent in conflict',
        'Dissociating during difficult conversations',
        'Physical symptoms (racing heart, sweating, freezing)',
        'Agreeing just to end the conflict',
        'Processing (anger, clarity, responses) only afterward',
      ],
      theTrap: 'The freeze response is a legitimate nervous system state—this isn\'t choice, it\'s biology. But without intervention, the pattern reinforces itself: difficult conversations become more frightening because they always end the same way.',
      breakingThePattern: [
        'Build EMBODIMENT capacity first — Practice noticing body states outside of conflict',
        'Expand PAUSE toward choice — "I can freeze AND I can also choose to speak"',
        'Build CONSENT boundaries gradually — Start with very small assertions',
      ],
      holdFocus: 'The "O" step—OBSERVE your body—is foundational. Building body awareness outside of conflict makes it possible to stay present during conflict.',
      deeperFears: [
        'Fear of being overwhelmed and losing control',
        'Fear of saying the wrong thing',
        'Fear of the other person\'s anger or disappointment',
        'Fear of abandonment if you assert yourself',
      ],
      deeperNeeds: [
        'Need for safety and predictability',
        'Need to avoid shame',
        'Need to be liked and accepted',
        'Need for nervous system regulation',
      ],
      customPractices: [
        'Daily body awareness practice: 5 minutes noticing sensations without judgment',
        'Practice saying "I need a moment" before shutting down',
        'Start with low-stakes disagreements (what movie to watch) and notice freeze response',
        'After freeze: Journal what you wish you\'d said, then practice saying it alone',
        'Consider working with a trauma-informed therapist if pattern has trauma roots',
      ],
    },
    {
      id: 'shapeshifter',
      name: 'The Shapeshifter',
      coreCollapse: ['BECOMING', 'CONSENT', 'MEMORY'],
      signature: {
        becoming: 'high', // No stable identity
        consent: 'low', // Merging with others
        memory: 'high', // No anchor in inheritance
      },
      description: 'No stable positions, agrees with whoever they\'re with, feels unreal to themselves',
      experience: 'I\'m not sure what I believe. I tend to agree with whoever I\'m talking to. I\'ve changed my views so many times... maybe I don\'t have real views?',
      behavioralSigns: [
        'Agreeing with different people in different contexts',
        'Feeling influenced by the last thing they read or heard',
        'No consistent positions over time',
        'Discomfort when asked "What do YOU think?"',
        'Fear of being pinned down',
      ],
      theTrap: 'The Shapeshifter\'s openness is real—they genuinely CAN see multiple perspectives. But without ground, they can\'t contribute their own truth. They feel unreal to themselves and unreliable to others.',
      breakingThePattern: [
        'Build BECOMING stability — "What remains true across contexts? What\'s MY perspective?"',
        'Reclaim MEMORY selectively — "What from my inheritance do I actually value?"',
        'Develop CONSENT boundaries — "I can understand their view without adopting it"',
      ],
      holdFocus: 'The "D" step—DECIDE who you want to be—creates ground. Even provisional identity is better than none.',
      deeperFears: [
        'Fear of being wrong and rigid',
        'Fear of losing flexibility and openness',
        'Fear of conflict that comes with having positions',
        'Fear of being "like those certain people"',
      ],
      deeperNeeds: [
        'Need to be liked by everyone',
        'Need to remain open and flexible',
        'Need to avoid the responsibility of positions',
        'Need to fit in different contexts',
      ],
      customPractices: [
        'Journal practice: "One thing I believe regardless of who I\'m with..."',
        'Notice when you\'re shape-shifting: What triggered it? What\'s the cost?',
        'Practice holding a position for one full conversation even when you see the other side',
        'Identify 3 core values that don\'t change context to context',
      ],
    },
    {
      id: 'identity_fortress',
      name: 'The Identity Fortress',
      coreCollapse: ['BECOMING', 'MEMORY', 'UNCERTAINTY'],
      signature: {
        becoming: 'low', // Fixed identity
        memory: 'low', // Inherited narrative as truth
        uncertainty: 'low', // No real doubt
      },
      description: 'Identity is settled and permanent, inherited narrative is absolute truth, no evolution allowed',
      experience: 'I know who I am. I\'ve always known. My values don\'t change based on fashion. I\'m not "evolving"—I\'m being faithful to what\'s true.',
      behavioralSigns: [
        'Pride in never changing core positions',
        'Suspicion of "flip-floppers" or people who change',
        '"I am what I am" as a statement of strength',
        'Resistance to self-examination as unnecessary or threatening',
        'Views that haven\'t changed in decades',
      ],
      theTrap: 'The fortress can\'t distinguish between core values (worth protecting) and inherited rigidity (worth releasing). Stability becomes defensive rigidity rather than grounded flexibility.',
      breakingThePattern: [
        'Introduce UNCERTAINTY gently — "What if 5% of this could be reconsidered?"',
        'Examine MEMORY — "Which inherited beliefs have I actually tested?"',
        'Offer BECOMING reframe — "Stability AND growth can coexist; evolution isn\'t betrayal"',
      ],
      holdFocus: 'The "L" step introduces creative tension: "I want to be faithful to my values AND I want to keep growing."',
      deeperFears: [
        'Fear of betraying family/community/faith',
        'Fear that change = weakness or being influenced',
        'Fear of losing coherent identity',
        'Fear of discovering you\'ve been wrong all along',
      ],
      deeperNeeds: [
        'Need for stability and continuity',
        'Need to honor inheritance',
        'Need to be seen as consistent and trustworthy',
        'Need for clear identity',
      ],
      customPractices: [
        'Gentle experiment: "What\'s one small belief I could hold more lightly?"',
        'Distinguish inherited from chosen: "Which of my views did I test vs. absorb?"',
        'Practice: "I can be faithful to X AND stay curious about Y"',
        'Notice when self-examination feels threatening—what are you protecting?',
      ],
    },
  ];

  detectPatterns(threadScores: Record<string, ThreadScoreData>): CollapsePattern[] {
    const detectedPatterns: CollapsePattern[] = [];

    for (const pattern of this.patterns) {
      let matchScore = 0;
      let totalChecks = 0;

      // Check each thread in the pattern signature
      for (const [thread, expectedDirection] of Object.entries(pattern.signature)) {
        const threadData = threadScores[thread];
        if (!threadData) continue;

        totalChecks++;
        const actualDirection = this.categorizeCollapseDirection(threadData.percentage, threadData.collapseDirection);

        if (actualDirection === expectedDirection) {
          matchScore++;
        }
      }

      // Calculate confidence (0-1)
      const confidence = totalChecks > 0 ? matchScore / totalChecks : 0;

      // Include pattern if confidence is >= 60%
      if (confidence >= 0.6) {
        detectedPatterns.push({
          id: pattern.id,
          name: pattern.name,
          coreCollapse: pattern.coreCollapse,
          description: pattern.description,
          experience: pattern.experience,
          behavioralSigns: pattern.behavioralSigns,
          theTrap: pattern.theTrap,
          breakingThePattern: pattern.breakingThePattern,
          holdFocus: pattern.holdFocus,
          deeperFears: pattern.deeperFears,
          deeperNeeds: pattern.deeperNeeds,
          customPractices: pattern.customPractices,
          detectionConfidence: confidence,
        });
      }
    }

    // Sort by confidence (highest first)
    return detectedPatterns.sort((a, b) => b.detectionConfidence - a.detectionConfidence);
  }

  private categorizeCollapseDirection(percentage: number, direction: string): string {
    // Low capacity = collapse toward pole A/low
    // High capacity but specific direction = balanced or high
    if (percentage < 50) {
      return 'low';
    } else if (percentage >= 75) {
      return 'high';
    } else {
      return 'balanced';
    }
  }

  analyzeCascades(threadScores: Record<string, ThreadScoreData>, detectedPatterns: CollapsePattern[]): PatternCascade[] {
    const cascades: PatternCascade[] = [];

    // For each detected pattern, describe the cascade
    for (const pattern of detectedPatterns) {
      if (pattern.id === 'righteous_reactor') {
        cascades.push({
          trigger: 'Triggering content or perceived injustice',
          sequence: [
            {
              thread: 'PAUSE',
              collapseType: 'Impulsive reaction',
              effect: 'No gap between trigger and response',
            },
            {
              thread: 'CONSENT',
              collapseType: 'Must change others',
              effect: 'Urgency to correct, convince, or fight',
            },
            {
              thread: 'BECOMING',
              collapseType: 'Position = identity',
              effect: 'Challenge to position feels like attack on self',
            },
          ],
          finalPattern: 'Heated argument that burns bridges without changing minds',
        });
      } else if (pattern.id === 'anxious_avoider') {
        cascades.push({
          trigger: 'Uncomfortable conversation or challenging topic',
          sequence: [
            {
              thread: 'EMBODIMENT',
              collapseType: 'Disconnect from body',
              effect: 'Retreat into head/abstraction',
            },
            {
              thread: 'UNCERTAINTY',
              collapseType: 'Grasp for certainty',
              effect: 'Take rigid position to end discomfort',
            },
            {
              thread: 'PAUSE',
              collapseType: 'Avoidance',
              effect: 'Change subject, leave conversation, or disengage',
            },
          ],
          finalPattern: 'Escape from difficult conversations that never get easier',
        });
      } else if (pattern.id === 'tribal_warrior') {
        cascades.push({
          trigger: 'Perceived attack on in-group',
          sequence: [
            {
              thread: 'MEMORY',
              collapseType: 'Inherited narrative',
              effect: '"My people have always known this"',
            },
            {
              thread: 'CONSENT',
              collapseType: 'Others as enemies',
              effect: 'They\'re not just wrong, they\'re dangerous',
            },
            {
              thread: 'PRESENCE',
              collapseType: 'Category not person',
              effect: 'Relating to "the enemy" not the human',
            },
          ],
          finalPattern: 'Aggressive tribal defense that alienates potential allies',
        });
      } else if (pattern.id === 'paralyzed_intellectual') {
        cascades.push({
          trigger: 'Need to take a position or make a decision',
          sequence: [
            {
              thread: 'UNCERTAINTY',
              collapseType: 'Excessive doubt',
              effect: 'See all sides, can\'t commit',
            },
            {
              thread: 'PAUSE',
              collapseType: 'Paralysis',
              effect: 'Research more, think more, delay more',
            },
            {
              thread: 'BECOMING',
              collapseType: 'No stable ground',
              effect: 'No identity from which to act',
            },
          ],
          finalPattern: 'Analysis paralysis while others shape the world',
        });
      } else if (pattern.id === 'constant_converter') {
        cascades.push({
          trigger: 'Encounter with someone holding "wrong" views',
          sequence: [
            {
              thread: 'UNCERTAINTY',
              collapseType: 'Excessive certainty',
              effect: 'I KNOW I\'m right',
            },
            {
              thread: 'CONSENT',
              collapseType: 'Must convert',
              effect: 'Relentless pursuit of conversion',
            },
            {
              thread: 'PRESENCE',
              collapseType: 'Conversion project',
              effect: 'Can\'t see the actual person',
            },
          ],
          finalPattern: 'Damaged relationships from evangelical certainty',
        });
      } else if (pattern.id === 'frozen_deer') {
        cascades.push({
          trigger: 'Conflict or confrontation',
          sequence: [
            {
              thread: 'EMBODIMENT',
              collapseType: 'Body overwhelm',
              effect: 'Heart racing, mind blank, can\'t speak',
            },
            {
              thread: 'PAUSE',
              collapseType: 'Freeze',
              effect: 'Complete shutdown, waiting for it to end',
            },
            {
              thread: 'CONSENT',
              collapseType: 'Boundary collapse',
              effect: 'Agree to anything to end the discomfort',
            },
          ],
          finalPattern: 'Freeze response that reinforces fear of conflict',
        });
      } else if (pattern.id === 'shapeshifter') {
        cascades.push({
          trigger: 'Asked to take a position or express a view',
          sequence: [
            {
              thread: 'BECOMING',
              collapseType: 'No stable identity',
              effect: 'Not sure what I actually believe',
            },
            {
              thread: 'CONSENT',
              collapseType: 'Merge with others',
              effect: 'Adopt whoever\'s views I\'m with',
            },
            {
              thread: 'MEMORY',
              collapseType: 'No anchor',
              effect: 'Nothing from inheritance to ground in',
            },
          ],
          finalPattern: 'Feels unreal to self, unreliable to others',
        });
      } else if (pattern.id === 'identity_fortress') {
        cascades.push({
          trigger: 'Challenge to core beliefs or invitation to reconsider',
          sequence: [
            {
              thread: 'BECOMING',
              collapseType: 'Fixed identity',
              effect: '"I am what I am" - no evolution',
            },
            {
              thread: 'MEMORY',
              collapseType: 'Inherited as absolute',
              effect: 'My tradition is THE truth',
            },
            {
              thread: 'UNCERTAINTY',
              collapseType: 'No doubt allowed',
              effect: 'Self-examination feels like betrayal',
            },
          ],
          finalPattern: 'Rigid defensiveness that prevents growth',
        });
      }
    }

    return cascades;
  }

  createDevelopmentPath(threadScores: Record<string, ThreadScoreData>, detectedPatterns: CollapsePattern[]): DevelopmentPath[] {
    const paths: DevelopmentPath[] = [];
    const threadArray = Object.entries(threadScores).map(([thread, data]) => ({
      thread,
      ...data,
    }));

    // Sort threads by percentage (lowest first - these need immediate attention)
    const sortedThreads = threadArray.sort((a, b) => a.percentage - b.percentage);

    // Immediate priority: Lowest scoring thread(s)
    const lowestThreads = sortedThreads.filter(t => t.percentage < 50);
    for (const thread of lowestThreads.slice(0, 2)) {
      paths.push({
        priority: 'immediate',
        thread: thread.thread.toUpperCase(),
        currentState: this.getThreadStateDescription(thread.thread, thread.percentage, 'current'),
        targetState: this.getThreadStateDescription(thread.thread, 75, 'target'),
        rationale: `This thread shows significant collapse (${thread.percentage.toFixed(0)}%). Building capacity here will reduce automatic reactions and create more choice.`,
        practices: this.getThreadSpecificPractices(thread.thread, thread.collapseDirection),
        estimatedWeeks: 6,
      });
    }

    // Near-term priority: Pattern-specific focus based on detected patterns
    if (detectedPatterns.length > 0) {
      const primaryPattern = detectedPatterns[0];
      for (const threadName of primaryPattern.coreCollapse) {
        const thread = threadScores[threadName.toLowerCase()];
        if (thread && thread.percentage < 70 && !paths.find(p => p.thread === threadName)) {
          paths.push({
            priority: 'near-term',
            thread: threadName,
            currentState: this.getThreadStateDescription(threadName.toLowerCase(), thread.percentage, 'current'),
            targetState: this.getThreadStateDescription(threadName.toLowerCase(), 75, 'target'),
            rationale: `This thread is part of your "${primaryPattern.name}" pattern. Working here will interrupt the cascade.`,
            practices: primaryPattern.customPractices.filter(p => p.toLowerCase().includes(threadName.toLowerCase())),
            estimatedWeeks: 8,
          });
        }
      }
    }

    // Long-term: Higher scoring threads that could still improve
    const developmentThreads = sortedThreads.filter(t => t.percentage >= 50 && t.percentage < 75);
    for (const thread of developmentThreads.slice(0, 2)) {
      if (!paths.find(p => p.thread === thread.thread.toUpperCase())) {
        paths.push({
          priority: 'long-term',
          thread: thread.thread.toUpperCase(),
          currentState: this.getThreadStateDescription(thread.thread, thread.percentage, 'current'),
          targetState: this.getThreadStateDescription(thread.thread, 85, 'target'),
          rationale: `You have moderate capacity here (${thread.percentage.toFixed(0)}%). Deepening this thread will support stability in other areas.`,
          practices: this.getThreadSpecificPractices(thread.thread, thread.collapseDirection),
          estimatedWeeks: 12,
        });
      }
    }

    return paths;
  }

  private getThreadStateDescription(thread: string, percentage: number, type: 'current' | 'target'): string {
    const descriptions: Record<string, Record<string, string>> = {
      presence: {
        low: 'Often relating to categories/abstractions rather than actual people',
        medium: 'Sometimes present to the person, sometimes caught in categories',
        high: 'Consistently able to meet the actual person beyond labels',
      },
      consent: {
        low: 'Tendency to control others or merge boundaries',
        medium: 'Growing awareness of mutual agency',
        high: 'Honors both your agency and others\' without force or merging',
      },
      memory: {
        low: 'Trapped in inherited stories or unable to access past as resource',
        medium: 'Beginning to question which stories serve and which don\'t',
        high: 'Story as resource - can access past without being trapped by it',
      },
      pause: {
        low: 'Reactive/impulsive or stuck in procrastination',
        medium: 'Sometimes create space before responding',
        high: 'Consistent gap between stimulus and response',
      },
      embodiment: {
        low: 'Disconnected from body wisdom, living in head',
        medium: 'Beginning to notice body signals',
        high: 'Body as trusted source of information and guidance',
      },
      uncertainty: {
        low: 'Grasping for certainty or drowning in doubt',
        medium: 'Can hold some uncertainty without collapse',
        high: 'Comfortable with not-knowing; uncertainty as generative',
      },
      becoming: {
        low: 'Identity too rigid or too fluid',
        medium: 'Exploring who you\'re becoming',
        high: 'Stable core with room for evolution; grounded flexibility',
      },
    };

    const level = percentage < 50 ? 'low' : percentage < 75 ? 'medium' : 'high';
    const targetLevel = type === 'target' ? (percentage < 75 ? 'medium' : 'high') : level;

    return descriptions[thread]?.[targetLevel] || `${percentage.toFixed(0)}% capacity`;
  }

  private getThreadSpecificPractices(thread: string, collapseDirection: string): string[] {
    const practices: Record<string, string[]> = {
      presence: [
        'Practice: Before difficult conversations, ask "Who is the actual person, not the category?"',
        'Notice when you\'re relating to an abstraction vs. the human in front of you',
        'Spend 2 minutes at the start of conversations just being curious about the person',
      ],
      consent: [
        'Practice: Notice the urge to change someone - let it pass without acting',
        'Experiment with "They can be wrong and I can stay connected"',
        'Where are you merging (losing your boundary) vs. forcing (violating theirs)?',
      ],
      memory: [
        'Journal: "Which story am I telling myself? Is it serving me?"',
        'Practice distinguishing: "This is what happened" vs. "This is the story I made from it"',
        'Ask: "What from my past could be a resource here rather than a prison?"',
      ],
      pause: [
        'Practice the 3-breath pause before responding to triggers',
        'Notice the gap between stimulus and response - can you widen it by 10 seconds?',
        'What would it cost you to wait? What might it gain?',
      ],
      embodiment: [
        'Daily body scan: 5 minutes noticing sensations without fixing',
        'Before decisions, ask "What is my body telling me?"',
        'Practice staying with mild discomfort instead of immediately leaving',
      ],
      uncertainty: [
        'Practice: "I could be 80% right about this AND it\'s more complex than I see"',
        'Experiment with not-knowing for 24 hours on something that matters',
        'Notice when uncertainty triggers grasping vs. when it opens curiosity',
      ],
      becoming: [
        'Journal: "Who am I becoming? What\'s actually changing vs. just rearranging?"',
        'Practice provisional identity: "What if I\'m the kind of person who..."',
        'Where do you need more stability? Where more flexibility?',
      ],
    };

    return practices[thread] || ['Practice HOLD: Halt, Observe, Look, Decide'];
  }
}
