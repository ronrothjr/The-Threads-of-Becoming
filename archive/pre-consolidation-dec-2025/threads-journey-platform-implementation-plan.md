# Threads Journey Platform - Implementation Plan

## Overview

This document outlines the technical implementation plan for the Threads Journey Platform, a comprehensive assessment and self-learning system built on the 7 original Threads of Becoming framework.

**Timeline:** 9 weeks
**Stack:** NestJS (backend), React/TypeScript (frontend), MongoDB, Stripe, AWS SES
**Infrastructure:** AWS Amplify (frontend) + App Runner (backend)

---

## Phase 1: Database Schema Design (Week 1)

### MongoDB Collections

#### 1. Users Collection
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  profile: {
    name: String,
    createdAt: Date,
    timezone: String,
    preferences: {
      emailNotifications: Boolean,
      practiceReminders: Boolean
    }
  },
  subscription: {
    tier: String, // 'free', 'extended', 'premium', 'professional'
    status: String, // 'active', 'cancelled', 'expired'
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    currentPeriodEnd: Date,
    cancelAtPeriodEnd: Boolean
  },
  assessments: {
    quickProfileCompleted: Boolean,
    quickProfileDate: Date,
    extendedCompleted: Boolean,
    extendedDate: Date,
    extendedPurchased: Boolean
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### 2. Assessments Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  type: String, // 'quick_profile' or 'extended'
  responses: [
    {
      questionId: String, // e.g., 'PR1', 'C5', 'M10'
      answer: String, // 'A', 'B', 'C', 'D'
      answeredAt: Date
    }
  ],
  results: {
    threadScores: {
      presence: Number,
      consent: Number,
      memory: Number,
      pause: Number,
      embodiment: Number,
      uncertainty: Number,
      becoming: Number
    },
    movementAverages: {
      see: Number, // Average of PRESENCE, CONSENT, MEMORY, PAUSE
      hold: Number, // Average of EMBODIMENT, UNCERTAINTY
      emerge: Number // BECOMING score
    },
    collapseDirections: {
      presence: String, // 'isolation', 'enmeshment', or 'balanced'
      consent: String,
      memory: String,
      pause: String,
      embodiment: String,
      uncertainty: String,
      becoming: String
    },
    detectedPatterns: [String], // Array of pattern IDs
    holdPracticeMapping: {
      halt: [String], // Thread IDs that need Halt
      observe: [String],
      look: [String],
      decide: [String]
    }
  },
  completedAt: Date,
  createdAt: Date
}
```

#### 3. Collapse Patterns Collection
```javascript
{
  _id: ObjectId,
  patternId: String, // 'reactive', 'frozen', 'bypassing', etc.
  name: String,
  description: String,
  threadsInvolved: [String], // Array of thread names
  collapseSignature: {
    presence: String,
    consent: String,
    memory: String,
    pause: String,
    embodiment: String,
    uncertainty: String,
    becoming: String
  },
  symptoms: [String],
  whenItEmerges: String,
  pathForward: String,
  practices: [String],
  resources: [String]
}
```

#### 4. Practice Journal Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  date: Date,
  threadFocus: String, // Which thread they practiced
  practiceType: String, // 'HOLD', 'navigation', 'daily_reflection'
  entry: {
    situation: String,
    tensionsNoticed: [String],
    whatHappened: String,
    insights: String,
    nextSteps: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### 5. Progress Tracking Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  weekNumber: Number,
  weekStartDate: Date,
  completedActivities: [
    {
      activityType: String, // 'assessment', 'practice', 'video', 'reading'
      activityId: String,
      completedAt: Date
    }
  ],
  reflections: String,
  milestones: [
    {
      type: String, // 'first_assessment', 'pattern_identified', '30_days', etc.
      achievedAt: Date
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### Mongoose Schema Implementation

```typescript
// server/src/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Object })
  profile: {
    name: string;
    timezone: string;
    preferences: {
      emailNotifications: boolean;
      practiceReminders: boolean;
    };
  };

  @Prop({ type: Object })
  subscription: {
    tier: string;
    status: string;
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
    currentPeriodEnd?: Date;
    cancelAtPeriodEnd: boolean;
  };

  @Prop({ type: Object })
  assessments: {
    quickProfileCompleted: boolean;
    quickProfileDate?: Date;
    extendedCompleted: boolean;
    extendedDate?: Date;
    extendedPurchased: boolean;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
```

---

## Phase 2: Backend API Development (Weeks 2-3)

### NestJS Module Structure

```
server/src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   └── jwt.strategy.ts
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── assessments/
│   ├── assessments.controller.ts
│   ├── assessments.service.ts
│   ├── scoring.service.ts
│   ├── patterns.service.ts
│   └── assessments.module.ts
├── practice/
│   ├── journal.controller.ts
│   ├── journal.service.ts
│   └── practice.module.ts
├── progress/
│   ├── progress.controller.ts
│   ├── progress.service.ts
│   └── progress.module.ts
├── payments/
│   ├── payments.controller.ts
│   ├── payments.service.ts
│   └── payments.module.ts
└── email/
    ├── email.service.ts
    └── templates/
```

### Assessment Scoring Service

```typescript
// server/src/assessments/scoring.service.ts
import { Injectable } from '@nestjs/common';

interface QuickProfileResponse {
  questionId: string;
  answer: 'A' | 'B' | 'C' | 'D';
}

interface ThreadScore {
  threadName: string;
  score: number;
  percentage: number;
  collapseDirection: 'a' | 'b' | 'balanced';
}

@Injectable()
export class AssessmentScoringService {
  // Question mappings
  private quickProfileMapping = {
    presence: [1, 2, 3],
    consent: [4, 5, 6],
    memory: [7, 8, 9],
    pause: [10, 11, 12],
    embodiment: [13, 14, 15],
    uncertainty: [16, 17, 18],
    becoming: [19, 20, 21]
  };

  // Reverse-scored questions (where A=4, B=3, C=2, D=1)
  private reverseScored = [8, 14, 18, 20, 21];

  scoreQuickProfile(responses: QuickProfileResponse[]) {
    const threadScores = {
      presence: this.scoreThread(responses, this.quickProfileMapping.presence, 'PRESENCE'),
      consent: this.scoreThread(responses, this.quickProfileMapping.consent, 'CONSENT'),
      memory: this.scoreThread(responses, this.quickProfileMapping.memory, 'MEMORY'),
      pause: this.scoreThread(responses, this.quickProfileMapping.pause, 'PAUSE'),
      embodiment: this.scoreThread(responses, this.quickProfileMapping.embodiment, 'EMBODIMENT'),
      uncertainty: this.scoreThread(responses, this.quickProfileMapping.uncertainty, 'UNCERTAINTY'),
      becoming: this.scoreThread(responses, this.quickProfileMapping.becoming, 'BECOMING')
    };

    // Calculate See, Hold, Emerge averages
    const seeAverage = this.average([
      threadScores.presence.score,
      threadScores.consent.score,
      threadScores.memory.score,
      threadScores.pause.score
    ]);

    const holdAverage = this.average([
      threadScores.embodiment.score,
      threadScores.uncertainty.score
    ]);

    const emergeScore = threadScores.becoming.score;

    return {
      threadScores,
      movementAverages: {
        see: seeAverage,
        hold: holdAverage,
        emerge: emergeScore
      },
      holdPracticeMapping: this.mapToHoldPractice(threadScores)
    };
  }

  private scoreThread(
    responses: QuickProfileResponse[],
    questionNumbers: number[],
    threadName: string
  ): ThreadScore {
    let totalScore = 0;
    let collapseACount = 0;
    let collapseBCount = 0;

    questionNumbers.forEach(qNum => {
      const response = responses.find(r =>
        parseInt(r.questionId.replace(/\D/g, '')) === qNum
      );

      if (response) {
        const isReverse = this.reverseScored.includes(qNum);
        const score = this.getQuestionScore(response.answer, isReverse);
        totalScore += score;

        // Track collapse direction
        if (['A', 'B'].includes(response.answer)) {
          collapseACount++;
        } else {
          collapseBCount++;
        }
      }
    });

    const maxScore = questionNumbers.length * 4;
    const percentage = (totalScore / maxScore) * 100;

    let collapseDirection: 'a' | 'b' | 'balanced';
    if (collapseACount >= 2) {
      collapseDirection = 'a';
    } else if (collapseBCount >= 2) {
      collapseDirection = 'b';
    } else {
      collapseDirection = 'balanced';
    }

    return {
      threadName,
      score: totalScore,
      percentage,
      collapseDirection
    };
  }

  private getQuestionScore(answer: 'A' | 'B' | 'C' | 'D', isReverse: boolean): number {
    const scores = { A: 1, B: 2, C: 3, D: 4 };
    const reverseScores = { A: 4, B: 3, C: 2, D: 1 };
    return isReverse ? reverseScores[answer] : scores[answer];
  }

  private average(scores: number[]): number {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

  private mapToHoldPractice(threadScores: Record<string, ThreadScore>) {
    const mapping = {
      halt: [],
      observe: [],
      look: [],
      decide: []
    };

    // Map based on See/Hold/Emerge structure
    // SEE threads (low scores) → need Halt/Observe
    ['presence', 'consent', 'memory', 'pause'].forEach(thread => {
      if (threadScores[thread].percentage < 60) {
        mapping.halt.push(thread);
      } else if (threadScores[thread].percentage < 75) {
        mapping.observe.push(thread);
      }
    });

    // HOLD threads → need Look
    ['embodiment', 'uncertainty'].forEach(thread => {
      if (threadScores[thread].percentage < 70) {
        mapping.look.push(thread);
      }
    });

    // EMERGE thread → need Decide
    if (threadScores.becoming.percentage < 70) {
      mapping.decide.push('becoming');
    }

    return mapping;
  }

  // Extended Assessment scoring (similar structure but 70 questions)
  scoreExtendedAssessment(responses: any[]) {
    // Similar logic but with 10 questions per thread
    // Includes collapse pattern detection
    // Returns detailed profile
  }
}
```

### Assessment Controller

```typescript
// server/src/assessments/assessments.controller.ts
import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssessmentsService } from './assessments.service';

@Controller('api/assessments')
export class AssessmentsController {
  constructor(private assessmentsService: AssessmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('quick-profile')
  async submitQuickProfile(@Request() req, @Body() body: any) {
    return this.assessmentsService.submitQuickProfile(req.user.userId, body.responses);
  }

  @UseGuards(JwtAuthGuard)
  @Get('quick-profile/results')
  async getQuickProfileResults(@Request() req) {
    return this.assessmentsService.getQuickProfileResults(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('extended')
  async submitExtended(@Request() req, @Body() body: any) {
    // Verify user has purchased Extended Assessment
    const user = await this.assessmentsService.getUserSubscription(req.user.userId);
    if (!user.assessments.extendedPurchased && user.subscription.tier === 'free') {
      throw new Error('Extended Assessment requires purchase or Premium subscription');
    }
    return this.assessmentsService.submitExtended(req.user.userId, body.responses);
  }

  @UseGuards(JwtAuthGuard)
  @Get('extended/results')
  async getExtendedResults(@Request() req) {
    return this.assessmentsService.getExtendedResults(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getAssessmentHistory(@Request() req) {
    return this.assessmentsService.getAssessmentHistory(req.user.userId);
  }
}
```

### Pattern Detection Service

```typescript
// server/src/assessments/patterns.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PatternsService {
  // Pattern signatures based on collapse directions
  private patterns = [
    {
      id: 'reactive',
      name: 'The Reactive Pattern',
      signature: {
        pause: 'a', // Impulsive
        embodiment: 'a', // Disembodied
        consent: 'a' // Controlling
      },
      description: 'Quick to react, disconnected from body wisdom, seeking control'
    },
    {
      id: 'frozen',
      name: 'The Frozen Pattern',
      signature: {
        pause: 'b', // Procrastination
        uncertainty: 'b', // Certainty
        becoming: 'a' // Regression
      },
      description: 'Paralyzed by need for certainty, avoiding forward movement'
    },
    {
      id: 'bypassing',
      name: 'The Bypassing Pattern',
      signature: {
        becoming: 'b', // Bypass
        embodiment: 'a', // Disembodied
        memory: 'b' // Future
      },
      description: 'Moving forward without integration, spiritual/intellectual bypass'
    },
    // ... other patterns from Collapse Patterns document
  ];

  detectPatterns(collapseDirections: Record<string, string>): string[] {
    const detectedPatterns = [];

    for (const pattern of this.patterns) {
      let matchCount = 0;
      const signatureKeys = Object.keys(pattern.signature);

      signatureKeys.forEach(thread => {
        if (collapseDirections[thread] === pattern.signature[thread]) {
          matchCount++;
        }
      });

      // If 2+ threads match the pattern signature, consider it detected
      if (matchCount >= 2) {
        detectedPatterns.push(pattern.id);
      }
    }

    return detectedPatterns;
  }

  getPatternDetails(patternId: string) {
    return this.patterns.find(p => p.id === patternId);
  }
}
```

### Payment Integration

```typescript
// server/src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { UsersService } from '../users/users.service';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(private usersService: UsersService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  // Extended Assessment one-time purchase
  async createExtendedAssessmentCheckout(userId: string) {
    const user = await this.usersService.findById(userId);

    const session = await this.stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Extended Journey Assessment',
              description: '70-question assessment with Collapse Pattern analysis'
            },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/assessment/extended?success=true`,
      cancel_url: `${process.env.FRONTEND_URL}/assessment/extended?cancelled=true`,
      metadata: {
        userId: userId,
        purchaseType: 'extended_assessment'
      }
    });

    return { sessionId: session.id, url: session.url };
  }

  // Premium subscription ($5/mo)
  async createPremiumSubscription(userId: string) {
    const user = await this.usersService.findById(userId);

    const session = await this.stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PREMIUM_PRICE_ID, // Set in Stripe dashboard
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/dashboard?subscribed=premium`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      metadata: {
        userId: userId,
        tier: 'premium'
      }
    });

    return { sessionId: session.id, url: session.url };
  }

  // Professional subscription ($15/mo)
  async createProfessionalSubscription(userId: string) {
    const user = await this.usersService.findById(userId);

    const session = await this.stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PROFESSIONAL_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/dashboard?subscribed=professional`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      metadata: {
        userId: userId,
        tier: 'professional'
      }
    });

    return { sessionId: session.id, url: session.url };
  }

  // Webhook handler
  async handleWebhook(signature: string, body: any) {
    const event = this.stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.mode === 'payment' && session.metadata.purchaseType === 'extended_assessment') {
          // Grant Extended Assessment access
          await this.usersService.updateAssessmentAccess(
            session.metadata.userId,
            { extendedPurchased: true }
          );
        } else if (session.mode === 'subscription') {
          // Update subscription status
          await this.usersService.updateSubscription(session.metadata.userId, {
            tier: session.metadata.tier,
            status: 'active',
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string
          });
        }
        break;

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        const subscription = event.data.object as Stripe.Subscription;
        await this.usersService.syncSubscriptionStatus(subscription);
        break;
    }

    return { received: true };
  }
}
```

---

## Phase 3: Frontend Components (Weeks 4-5)

### Assessment Flow Components

```
client/src/
├── pages/
│   ├── Dashboard.tsx
│   ├── QuickProfile.tsx
│   ├── ExtendedAssessment.tsx
│   ├── Results.tsx
│   └── PracticeJournal.tsx
├── components/
│   ├── assessment/
│   │   ├── QuestionCard.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ThreadScore.tsx
│   │   └── PatternCard.tsx
│   ├── dashboard/
│   │   ├── SeeHoldEmergeChart.tsx
│   │   ├── ThreadRadar.tsx
│   │   ├── ProgressTimeline.tsx
│   │   └── HoldPracticeGuide.tsx
│   └── practice/
│       ├── JournalEntry.tsx
│       └── WeeklyReflection.tsx
└── services/
    ├── assessmentService.ts
    ├── practiceService.ts
    └── progressService.ts
```

### Quick Profile Component

```typescript
// client/src/pages/QuickProfile.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/assessment/QuestionCard';
import ProgressBar from '../components/assessment/ProgressBar';
import { submitQuickProfile } from '../services/assessmentService';

const questions = [
  {
    id: 'PR1',
    thread: 'PRESENCE',
    text: 'In difficult conversations, I often find I\'m relating to a category in my mind ("liberals," "boomers," "my narcissistic mother") rather than the actual person in front of me.',
    options: [
      { value: 'A', label: 'Very much like me — I\'m usually relating to abstractions, not the person' },
      { value: 'B', label: 'Somewhat like me — I sometimes catch myself doing this' },
      { value: 'C', label: 'Not much like me — I can usually meet the actual person' },
      { value: 'D', label: 'Not at all like me — I consistently stay present to the person, not the category' }
    ]
  },
  // ... all 21 questions
];

export default function QuickProfile() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId: string, answer: string) => {
    setResponses({ ...responses, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
        questionId,
        answer
      }));

      await submitQuickProfile(formattedResponses);
      navigate('/assessment/results');
    } catch (error) {
      console.error('Failed to submit assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quick-profile-container">
      <ProgressBar progress={progress} />

      <div className="question-section">
        <div className="thread-badge">{question.thread}</div>
        <QuestionCard
          question={question}
          selectedAnswer={responses[question.id]}
          onAnswer={(answer) => handleAnswer(question.id, answer)}
        />

        <div className="navigation-buttons">
          {currentQuestion > 0 && (
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!responses[question.id]}
          >
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>

      <div className="question-counter">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
}
```

### Dashboard with See/Hold/Emerge Visualization

```typescript
// client/src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import SeeHoldEmergeChart from '../components/dashboard/SeeHoldEmergeChart';
import ThreadRadar from '../components/dashboard/ThreadRadar';
import HoldPracticeGuide from '../components/dashboard/HoldPracticeGuide';
import { getAssessmentResults } from '../services/assessmentService';

export default function Dashboard() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const data = await getAssessmentResults();
      setResults(data);
    } catch (error) {
      console.error('Failed to load results:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!results) return <div>No assessment results found</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Your Threads Journey</h1>
        <p>Last assessment: {new Date(results.completedAt).toLocaleDateString()}</p>
      </header>

      <section className="movement-overview">
        <h2>See. Hold. Emerge.</h2>
        <SeeHoldEmergeChart movementAverages={results.movementAverages} />
        <div className="movement-descriptions">
          <div className="movement-card">
            <h3>SEE (Orienting)</h3>
            <p>Score: {results.movementAverages.see.toFixed(1)}%</p>
            <p className="movement-desc">
              You locate where you are in the tension
            </p>
            <div className="threads-in-movement">
              PRESENCE • CONSENT • MEMORY • PAUSE
            </div>
          </div>
          <div className="movement-card">
            <h3>HOLD (Sourcing)</h3>
            <p>Score: {results.movementAverages.hold.toFixed(1)}%</p>
            <p className="movement-desc">
              You receive what body and mystery know
            </p>
            <div className="threads-in-movement">
              EMBODIMENT • UNCERTAINTY
            </div>
          </div>
          <div className="movement-card">
            <h3>EMERGE (Integrating)</h3>
            <p>Score: {results.movementAverages.emerge.toFixed(1)}%</p>
            <p className="movement-desc">
              You become what's next
            </p>
            <div className="threads-in-movement">
              BECOMING
            </div>
          </div>
        </div>
      </section>

      <section className="thread-details">
        <h2>Your Thread Profile</h2>
        <ThreadRadar threadScores={results.threadScores} />

        <div className="thread-cards">
          {Object.entries(results.threadScores).map(([thread, data]: [string, any]) => (
            <div key={thread} className="thread-card">
              <h3>{thread.toUpperCase()}</h3>
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{ width: `${data.percentage}%` }}
                />
              </div>
              <p>{data.percentage.toFixed(0)}%</p>
              <p className="collapse-indicator">
                {data.collapseDirection === 'balanced'
                  ? '✓ Balanced'
                  : `⚠️ Collapsing toward ${data.collapseDirection === 'a' ? 'Pole A' : 'Pole B'}`
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {results.detectedPatterns && results.detectedPatterns.length > 0 && (
        <section className="patterns-section">
          <h2>Detected Collapse Patterns</h2>
          <p>These patterns emerge when multiple threads collapse together</p>
          {results.detectedPatterns.map(pattern => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </section>
      )}

      <section className="hold-practice-section">
        <h2>Your HOLD Practice Focus</h2>
        <HoldPracticeGuide mapping={results.holdPracticeMapping} />
      </section>

      <section className="next-steps">
        <h2>Recommended Next Steps</h2>
        <ul>
          <li>Start a practice journal to track your navigation</li>
          <li>Focus on your lowest-scoring movement (See/Hold/Emerge)</li>
          <li>Explore resources for your detected patterns</li>
          {!results.extendedCompleted && (
            <li>
              <a href="/assessment/extended">
                Take the Extended Assessment for deeper pattern analysis
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
```

### See/Hold/Emerge Chart Component

```typescript
// client/src/components/dashboard/SeeHoldEmergeChart.tsx
import React from 'react';
import styles from './SeeHoldEmergeChart.module.css';

interface Props {
  movementAverages: {
    see: number;
    hold: number;
    emerge: number;
  };
}

export default function SeeHoldEmergeChart({ movementAverages }: Props) {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.movement}>
        <div className={styles.movementLabel}>SEE</div>
        <div className={styles.barContainer}>
          <div
            className={styles.barFill}
            style={{
              width: `${movementAverages.see}%`,
              backgroundColor: '#3B82F6' // Blue for Orienting
            }}
          />
        </div>
        <div className={styles.score}>{movementAverages.see.toFixed(1)}%</div>
      </div>

      <div className={styles.movement}>
        <div className={styles.movementLabel}>HOLD</div>
        <div className={styles.barContainer}>
          <div
            className={styles.barFill}
            style={{
              width: `${movementAverages.hold}%`,
              backgroundColor: '#10B981' // Green for Sourcing
            }}
          />
        </div>
        <div className={styles.score}>{movementAverages.hold.toFixed(1)}%</div>
      </div>

      <div className={styles.movement}>
        <div className={styles.movementLabel}>EMERGE</div>
        <div className={styles.barContainer}>
          <div
            className={styles.barFill}
            style={{
              width: `${movementAverages.emerge}%`,
              backgroundColor: '#F59E0B' // Amber for Integrating
            }}
          />
        </div>
        <div className={styles.score}>{movementAverages.emerge.toFixed(1)}%</div>
      </div>
    </div>
  );
}
```

---

## Phase 4: Payment Integration (Week 6)

### Stripe Products Setup

**In Stripe Dashboard:**
1. Create Products:
   - Extended Journey Assessment ($10 one-time)
   - Premium Tier ($5/month or $50/year)
   - Professional Tier ($15/month or $150/year)

2. Get Price IDs and add to `.env`:
```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_EXTENDED_ASSESSMENT_PRICE_ID=price_...
STRIPE_PREMIUM_MONTHLY_PRICE_ID=price_...
STRIPE_PREMIUM_YEARLY_PRICE_ID=price_...
STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID=price_...
STRIPE_PROFESSIONAL_YEARLY_PRICE_ID=price_...
```

### Payment Flow Components

```typescript
// client/src/pages/Pricing.tsx
import React from 'react';
import { createCheckoutSession } from '../services/paymentService';

export default function Pricing() {
  const handlePurchaseExtended = async () => {
    try {
      const { url } = await createCheckoutSession('extended_assessment');
      window.location.href = url;
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  const handleSubscribe = async (tier: 'premium' | 'professional', period: 'monthly' | 'yearly') => {
    try {
      const { url } = await createCheckoutSession(tier, period);
      window.location.href = url;
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <div className="pricing-container">
      <h1>Choose Your Journey</h1>

      <div className="pricing-tiers">
        <div className="tier-card">
          <h2>Free</h2>
          <p className="price">$0</p>
          <ul>
            <li>Quick Profile (21 questions)</li>
            <li>Basic Thread scores</li>
            <li>See/Hold/Emerge averages</li>
            <li>HOLD practice introduction</li>
          </ul>
          <button disabled>Current Plan</button>
        </div>

        <div className="tier-card featured">
          <h2>Extended Assessment</h2>
          <p className="price">$10 <span>one-time</span></p>
          <ul>
            <li>70-question Extended Assessment</li>
            <li>Collapse Pattern identification</li>
            <li>Detailed Thread profile</li>
            <li>Context sensitivity analysis</li>
            <li>Development recommendations</li>
            <li>Can retake quarterly</li>
          </ul>
          <button onClick={handlePurchaseExtended}>
            Purchase Extended Assessment
          </button>
          <p className="recommendation">
            ✨ Recommended after 3-4 weeks of practice
          </p>
        </div>

        <div className="tier-card">
          <h2>Premium</h2>
          <p className="price">$5<span>/month</span></p>
          <p className="annual-price">or $50/year (save $10)</p>
          <ul>
            <li>All Extended Assessment features</li>
            <li>Unlimited assessment retakes</li>
            <li>Personalized dashboard</li>
            <li>Progress tracking over time</li>
            <li>Practice journal</li>
            <li>Email support</li>
          </ul>
          <div className="button-group">
            <button onClick={() => handleSubscribe('premium', 'monthly')}>
              Subscribe Monthly
            </button>
            <button onClick={() => handleSubscribe('premium', 'yearly')} className="secondary">
              Subscribe Yearly
            </button>
          </div>
        </div>

        <div className="tier-card">
          <h2>Professional</h2>
          <p className="price">$15<span>/month</span></p>
          <p className="annual-price">or $150/year (save $30)</p>
          <ul>
            <li>All Premium features</li>
            <li>Facilitated Assessment (1/year)</li>
            <li>Priority email support</li>
            <li>Advanced pattern analysis</li>
            <li>Access to practitioner resources</li>
            <li>Community forum access</li>
          </ul>
          <div className="button-group">
            <button onClick={() => handleSubscribe('professional', 'monthly')}>
              Subscribe Monthly
            </button>
            <button onClick={() => handleSubscribe('professional', 'yearly')} className="secondary">
              Subscribe Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="training-gateway">
        <h2>Ready to Go Deeper?</h2>
        <p>All tiers provide foundation for our comprehensive training programs</p>
        <a href="/training">Explore Training Pathways →</a>
      </div>
    </div>
  );
}
```

---

## Phase 5: Email Automation (Week 7)

### SES Email Templates

```typescript
// server/src/email/templates/welcome.template.ts
export const welcomeEmail = (name: string) => ({
  subject: 'Welcome to Your Threads Journey',
  html: `
    <h2>Welcome, ${name}!</h2>
    <p>You've taken the first step in exploring the Threads of Becoming framework.</p>

    <h3>What's Next?</h3>
    <ol>
      <li><strong>Take the Quick Profile</strong> - 5 minutes to get your Thread snapshot</li>
      <li><strong>Explore Your Results</strong> - Understand your See/Hold/Emerge patterns</li>
      <li><strong>Start Practicing</strong> - Use the HOLD practice in your daily life</li>
    </ol>

    <p><a href="${process.env.FRONTEND_URL}/assessment/quick-profile">Take Quick Profile →</a></p>

    <p>We'll check in with you in 3 days with practice tips.</p>

    <p>Best,<br>The Threads of Becoming Team</p>
  `,
  text: `Welcome, ${name}! You've taken the first step in exploring the Threads of Becoming framework...`
});
```

### Email Automation Service

```typescript
// server/src/email/automation.service.ts
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService } from './email.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class EmailAutomationService {
  constructor(
    private emailService: EmailService,
    private usersService: UsersService
  ) {}

  // Run daily at 9am
  @Cron('0 9 * * *')
  async sendScheduledEmails() {
    const now = new Date();

    // Day 3: Practice tips
    const threeDayUsers = await this.usersService.findUsersCreatedDaysAgo(3);
    for (const user of threeDayUsers) {
      if (!user.assessments.quickProfileCompleted) {
        await this.emailService.sendPracticeTips(user.email, user.profile.name);
      }
    }

    // Day 7: Weekly reflection prompt
    const sevenDayUsers = await this.usersService.findUsersCreatedDaysAgo(7);
    for (const user of sevenDayUsers) {
      await this.emailService.sendWeeklyReflection(user.email, user.profile.name);
    }

    // Day 14: Collapse pattern education
    const fourteenDayUsers = await this.usersService.findUsersCreatedDaysAgo(14);
    for (const user of fourteenDayUsers) {
      await this.emailService.sendCollapsePatternEmail(user.email, user.profile.name);
    }

    // Day 21: Extended Assessment reminder
    const twentyOneDayUsers = await this.usersService.findUsersCreatedDaysAgo(21);
    for (const user of twentyOneDayUsers) {
      if (user.assessments.quickProfileCompleted && !user.assessments.extendedPurchased) {
        await this.emailService.sendExtendedAssessmentReminder(user.email, user.profile.name);
      }
    }

    // Day 30: Training pathway introduction
    const thirtyDayUsers = await this.usersService.findUsersCreatedDaysAgo(30);
    for (const user of thirtyDayUsers) {
      await this.emailService.sendTrainingPathwayIntro(user.email, user.profile.name);
    }
  }
}
```

### Email Sequences

**Day 1: Welcome Email**
- Thank you for joining
- Take Quick Profile (5 min)
- What to expect

**Day 3: Practice Tips**
- How to use HOLD practice
- Example scenario
- Track your first navigation

**Day 7: Weekly Reflection**
- What tensions did you notice?
- Quick reflection prompt
- Progress check-in

**Day 14: Understanding Collapse**
- What collapse patterns mean
- Your Quick Profile insights
- Community forum invitation

**Day 21: Extended Assessment Invitation**
- You've been practicing for 3 weeks
- Ready for deeper insight?
- Extended Assessment overview
- $10 one-time purchase

**Day 30: Training Pathways**
- Explore comprehensive training
- Tier 1, 2, 3 overview
- Limited spots available
- Special offer for Journey Platform users

---

## Phase 6: Training Integration (Week 8)

### Connecting Journey Platform to Training Tiers

```typescript
// server/src/training/training.service.ts
import { Injectable } from '@nestjs/common';
import { AssessmentsService } from '../assessments/assessments.service';

@Injectable()
export class TrainingService {
  constructor(private assessmentsService: AssessmentsService) {}

  async getRecommendedTrainingTier(userId: string) {
    const results = await this.assessmentsService.getExtendedResults(userId);

    if (!results) {
      return {
        tier: 1,
        reason: 'Start with foundational understanding of Threads'
      };
    }

    // Analyze results to recommend tier
    const { movementAverages, detectedPatterns } = results;
    const avgScore = (movementAverages.see + movementAverages.hold + movementAverages.emerge) / 3;

    if (avgScore < 60 || detectedPatterns.length >= 3) {
      return {
        tier: 1,
        reason: 'Build foundational Thread awareness and navigation skills',
        focus: 'Understanding collapse patterns and basic HOLD practice'
      };
    } else if (avgScore < 75 || detectedPatterns.length >= 1) {
      return {
        tier: 2,
        reason: 'Deepen practice and develop facilitation skills',
        focus: 'Thread-specific deep dives and community facilitation'
      };
    } else {
      return {
        tier: 3,
        reason: 'Advanced facilitation and organizational application',
        focus: 'Training others and organizational implementation'
      };
    }
  }

  async createTrainingDiscount(userId: string) {
    // Journey Platform users get 10% off training
    const user = await this.usersService.findById(userId);

    if (user.subscription.tier === 'premium' || user.subscription.tier === 'professional') {
      return {
        code: `JOURNEY-${userId.slice(-8).toUpperCase()}`,
        discount: 0.10,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      };
    }

    return null;
  }
}
```

### Dashboard Training Recommendation

```typescript
// client/src/components/dashboard/TrainingRecommendation.tsx
import React, { useEffect, useState } from 'react';
import { getTrainingRecommendation } from '../services/trainingService';

export default function TrainingRecommendation() {
  const [recommendation, setRecommendation] = useState(null);
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    loadRecommendation();
  }, []);

  const loadRecommendation = async () => {
    const rec = await getTrainingRecommendation();
    setRecommendation(rec);

    const disc = await getTrainingDiscount();
    setDiscount(disc);
  };

  if (!recommendation) return null;

  return (
    <div className="training-recommendation">
      <h3>Ready to Go Deeper?</h3>
      <p>Based on your assessment results, we recommend:</p>

      <div className="recommendation-card">
        <h4>Tier {recommendation.tier} Training</h4>
        <p>{recommendation.reason}</p>
        <p className="focus"><strong>Focus:</strong> {recommendation.focus}</p>

        {discount && (
          <div className="discount-badge">
            <p>Special Offer: 10% Off</p>
            <p className="code">Code: {discount.code}</p>
            <p className="valid">Valid until {new Date(discount.validUntil).toLocaleDateString()}</p>
          </div>
        )}

        <a href={`/training/tier${recommendation.tier}`} className="cta-button">
          Explore Tier {recommendation.tier} Training →
        </a>
      </div>
    </div>
  );
}
```

---

## Phase 7: Testing & Quality Assurance (Week 9)

### Test Coverage

**Backend Tests:**
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:cov
```

**Frontend Tests:**
```bash
# Component tests
npm run test

# E2E with Cypress
npm run cypress:open
```

### Key Test Scenarios

1. **Assessment Flow:**
   - Complete Quick Profile (21 questions)
   - Scoring accuracy
   - Result display
   - See/Hold/Emerge calculations

2. **Payment Flow:**
   - Extended Assessment purchase
   - Premium subscription
   - Professional subscription
   - Webhook processing

3. **Email Automation:**
   - Welcome email triggered
   - Day 3, 7, 14, 21, 30 sequences
   - Unsubscribe handling

4. **Dashboard:**
   - Results visualization
   - Pattern detection
   - HOLD practice mapping
   - Progress tracking

---

## Phase 8: Deployment (Week 9)

### Infrastructure Setup

**Frontend (AWS Amplify):**
```bash
# Already configured from previous work
amplify status
amplify publish
```

**Backend (AWS App Runner):**

1. **Dockerize NestJS Application:**
```dockerfile
# server/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
```

2. **Create apprunner.yaml:**
```yaml
version: 1.0
runtime: nodejs18
build:
  commands:
    pre-build:
      - npm ci
    build:
      - npm run build
run:
  runtime-version: 18
  command: npm run start:prod
  network:
    port: 3000
  env:
    - name: NODE_ENV
      value: production
```

3. **Deploy to App Runner:**
```bash
# Via AWS Console or CLI
aws apprunner create-service \
  --service-name threads-journey-api \
  --source-configuration '{
    "CodeRepository": {
      "RepositoryUrl": "https://github.com/your-org/threads-backend",
      "SourceCodeVersion": {"Type": "BRANCH", "Value": "main"},
      "CodeConfiguration": {
        "ConfigurationSource": "REPOSITORY"
      }
    }
  }' \
  --instance-configuration '{
    "Cpu": "1 vCPU",
    "Memory": "2 GB"
  }'
```

**Database (MongoDB Atlas or RDS):**
```bash
# Option 1: MongoDB Atlas (easier, familiar)
# - Create cluster in Atlas
# - Configure network access
# - Get connection string
# - Add to App Runner environment variables

# Option 2: AWS DocumentDB (MongoDB-compatible)
# - Create DocumentDB cluster
# - Configure VPC access
# - Add connection string to environment
```

**Environment Variables (App Runner):**
```bash
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
SES_FROM_EMAIL=noreply@creativeadvance.org
FRONTEND_URL=https://creativeadvance.org
```

**Stripe Webhook Configuration:**
```bash
# Point Stripe webhook to:
https://your-app-runner-url.us-east-1.awsapprunner.com/api/payments/webhook

# Events to subscribe:
- checkout.session.completed
- customer.subscription.updated
- customer.subscription.deleted
- payment_intent.succeeded
```

---

## Phase 9: Launch & Monitoring (Week 9)

### Launch Checklist

**Pre-Launch:**
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL certificates active
- [ ] Email templates reviewed
- [ ] Stripe webhook tested
- [ ] Assessment scoring verified
- [ ] Pattern detection validated
- [ ] See/Hold/Emerge calculations confirmed

**Launch Day:**
- [ ] Deploy frontend to Amplify
- [ ] Deploy backend to App Runner
- [ ] Verify database connection
- [ ] Test payment flows
- [ ] Send test emails
- [ ] Monitor CloudWatch logs
- [ ] Set up error alerting
- [ ] Announce to existing community

**Post-Launch:**
- [ ] Monitor signup conversion
- [ ] Track assessment completion rates
- [ ] Review email open rates
- [ ] Collect user feedback
- [ ] Iterate on UX issues
- [ ] Document common support questions

### Monitoring & Analytics

**CloudWatch Dashboards:**
- API response times
- Error rates
- Database query performance
- Email delivery rates

**Business Metrics:**
- Daily signups
- Quick Profile completion rate
- Extended Assessment purchases
- Premium/Professional subscriptions
- Training tier applications

**User Analytics:**
- Google Analytics 4 for frontend
- Custom events for key actions:
  - Assessment started
  - Assessment completed
  - Pattern detected
  - HOLD practice logged
  - Training tier viewed

---

## Revenue Projections (Updated)

### Year 1 Estimates

**Month 1-3 (Launch Phase):**
- 150 signups/month
- 70% Quick Profile completion = 105 users
- 15% Extended purchases = 16 × $10 = $160/mo
- 5% Premium = 8 × $5 = $40/mo
- 2% Professional = 3 × $15 = $45/mo
- **Monthly Total: ~$245**

**Month 4-6 (Growth Phase):**
- 300 signups/month
- 75% Quick Profile completion = 225 users
- 20% Extended purchases = 60 × $10 = $600/mo
- 8% Premium = 24 × $5 = $120/mo
- 3% Professional = 9 × $15 = $135/mo
- **Monthly Total: ~$855**

**Month 7-12 (Scaling Phase):**
- 500 signups/month
- 80% Quick Profile completion = 400 users
- 25% Extended purchases = 125 × $10 = $1,250/mo
- 10% Premium = 50 × $5 = $250/mo
- 5% Professional = 25 × $15 = $375/mo
- **Monthly Total: ~$1,875**

**Year 1 Total Revenue: ~$145,000**

### Training Tier Conversion

**Gateway Effect:**
- 10% of Journey Platform users apply to training
- Average training revenue: $1,500 per student
- Additional revenue from Journey Platform users

**Example:**
- 4,000 total Journey users in Year 1
- 400 apply to training (10%)
- 200 accepted and complete (50% acceptance)
- 200 × $1,500 = **$300,000 training revenue**

**Combined Year 1: ~$445,000**

---

## Cost Structure

### Monthly Operating Costs

**Infrastructure:**
- Amplify (frontend): $5/mo
- App Runner (backend): $25/mo (with auto-scaling)
- MongoDB Atlas: $30/mo (M10 cluster)
- SES (email): $10/mo
- CloudWatch: $5/mo
- **Total Infrastructure: ~$75/mo**

**Services:**
- Stripe fees: 2.9% + $0.30 per transaction
- Domain/SSL: $2/mo
- **Total Services: ~$50/mo** (avg)

**Total Monthly Operating Cost: ~$125**

**Gross Margin: 93%+**

---

## Success Metrics

### Technical KPIs
- API response time: <200ms (p95)
- Error rate: <0.1%
- Email delivery rate: >98%
- Payment success rate: >95%

### User KPIs
- Quick Profile completion: >70%
- Extended Assessment purchase: >20%
- Premium conversion: >8%
- Professional conversion: >3%

### Business KPIs
- Monthly Recurring Revenue growth: 25%+
- Customer Acquisition Cost: <$20
- Lifetime Value: >$150
- Training conversion: >10%

---

## Next Steps

1. **Week 1:** Set up MongoDB schema and seed data
2. **Week 2-3:** Build backend API endpoints
3. **Week 4-5:** Develop frontend components
4. **Week 6:** Integrate Stripe payments
5. **Week 7:** Configure email automation
6. **Week 8:** Build training integration
7. **Week 9:** Deploy and launch

**Ready to begin implementation?**
