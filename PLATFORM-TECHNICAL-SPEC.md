# Threads Journey Platform - Technical Specification

**Last Updated:** December 27, 2025
**Audience:** Developers, technical architects, DevOps engineers
**Purpose:** Complete technical implementation details and architecture

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Technology Stack](#technology-stack)
3. [Database Schema](#database-schema)
4. [API Endpoints](#api-endpoints)
5. [Assessment Engine](#assessment-engine)
6. [Training System](#training-system)
7. [Authentication & Authorization](#authentication--authorization)
8. [Payment Integration](#payment-integration)
9. [Email & Notifications](#email--notifications)
10. [Deployment & Infrastructure](#deployment--infrastructure)
11. [Development Workflow](#development-workflow)

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React/TypeScript SPA (AWS Amplify)                  │   │
│  │  - Assessment UI                                     │   │
│  │  - Dashboard & Analytics                             │   │
│  │  - Training Sessions                                 │   │
│  │  - Practice Tools                                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  NestJS REST API (AWS App Runner)                    │   │
│  │  - Authentication (JWT)                              │   │
│  │  - Assessment Scoring                                │   │
│  │  - Pattern Detection                                 │   │
│  │  - Training Generation                               │   │
│  │  - Payment Processing                                │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                     DATA & SERVICES LAYER                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   MongoDB    │  │    Stripe    │  │   AWS SES    │      │
│  │  (Database)  │  │  (Payments)  │  │   (Email)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   AWS S3     │  │  Speechify   │  │ CloudWatch   │      │
│  │   (Media)    │  │   (Audio)    │  │  (Logging)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Assessment Flow:
User → React UI → API (POST /api/assessments/quick-profile)
  → Scoring Service → Pattern Detection Service
  → MongoDB (save results) → API Response
  → React UI (display results + recommendations)

Training Generation Flow:
User Setup → API (POST /api/training/generate)
  → Training Service (analyze assessment + preferences)
  → Content Service (fetch tier-appropriate modules)
  → Session Generator (create custom units)
  → MongoDB (save sessions) → API Response
  → React UI (display sessions)

Payment Flow:
User Checkout → Stripe Checkout Session
  → Payment Success → Webhook to API
  → Update User Subscription → Send Confirmation Email
```

---

## Technology Stack

### Frontend

**Core:**
- **React** 18.2.0
- **TypeScript** 5.0+
- **Vite** (build tool)

**State Management:**
- React Context API
- Custom hooks (useAsync, useForm)

**Routing:**
- React Router DOM v6

**Styling:**
- CSS Modules
- CSS Custom Properties (design tokens)

**Data Visualization:**
- Custom chart components
- CSS-based visualizations (no external chart library yet)

**HTTP Client:**
- Axios with custom API service layer

### Backend

**Core:**
- **NestJS** 10.x (Node.js framework)
- **TypeScript** 5.0+
- **Node.js** 18.x LTS

**Database:**
- **MongoDB** via Mongoose
- **Mongoose** 8.x ODM

**Authentication:**
- **JWT** (jsonwebtoken + @nestjs/jwt)
- **bcrypt** for password hashing

**Validation:**
- **class-validator**
- **class-transformer**

**Scheduled Tasks:**
- **@nestjs/schedule** (cron jobs)

### Infrastructure

**Hosting:**
- **Frontend:** AWS Amplify (auto-deploy from Git)
- **Backend:** AWS App Runner (containerized API)
- **Database:** MongoDB Atlas M10 cluster

**Storage:**
- **Media Files:** AWS S3
- **CDN:** CloudFront (planned)

**Email:**
- **AWS SES** (Simple Email Service)

**Payment:**
- **Stripe** (Checkout Sessions + Webhooks)

**Monitoring:**
- **AWS CloudWatch** (logs + metrics)
- **Sentry** (error tracking, planned)

**CI/CD:**
- Git-based auto-deploy (Amplify + App Runner)
- GitHub Actions (testing, planned)

---

## Database Schema

### MongoDB Collections

#### 1. Users Collection

```typescript
{
  _id: ObjectId,
  email: string (unique, required),
  password: string (hashed, required),
  emailVerified: boolean,
  emailVerificationToken?: string,
  emailVerificationExpires?: Date,

  profile: {
    name: string,
    createdAt: Date,
    timezone?: string,
    preferences: {
      emailNotifications: boolean,
      practiceReminders: boolean
    }
  },

  subscription: {
    tier: 'free' | 'extended' | 'premium' | 'professional',
    status: 'active' | 'cancelled' | 'expired',
    stripeCustomerId?: string,
    stripeSubscriptionId?: string,
    currentPeriodEnd?: Date,
    cancelAtPeriodEnd: boolean
  },

  assessments: {
    quickProfileCompleted: boolean,
    quickProfileDate?: Date,
    extendedCompleted: boolean,
    extendedDate?: Date,
    extendedPurchased: boolean
  },

  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `email` (unique)
- `subscription.stripeCustomerId`
- `emailVerificationToken`

#### 2. Assessments Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  type: 'quick_profile' | 'extended',

  responses: [
    {
      questionId: string, // e.g., 'PR1', 'C5', 'M10'
      answer: 'A' | 'B' | 'C' | 'D',
      answeredAt: Date
    }
  ],

  results: {
    threadScores: {
      presence: { score: number, percentage: number },
      consent: { score: number, percentage: number },
      memory: { score: number, percentage: number },
      pause: { score: number, percentage: number },
      embodiment: { score: number, percentage: number },
      uncertainty: { score: number, percentage: number },
      becoming: { score: number, percentage: number }
    },

    movementAverages: {
      see: number,    // Avg of PRESENCE, CONSENT, MEMORY, PAUSE
      hold: number,   // Avg of EMBODIMENT, UNCERTAINTY
      emerge: number  // BECOMING score
    },

    collapseDirections?: {
      presence: 'isolation' | 'enmeshment' | 'balanced',
      consent: 'controlling' | 'appeasing' | 'balanced',
      memory: 'past' | 'future' | 'balanced',
      pause: 'impulsive' | 'procrastination' | 'balanced',
      embodiment: 'disembodied' | 'overwhelmed' | 'balanced',
      uncertainty: 'certainty' | 'chaos' | 'balanced',
      becoming: 'regression' | 'bypass' | 'balanced'
    },

    detectedPatterns?: [
      {
        patternId: string,
        name: string,
        confidence: number,
        coreCollapse: string[],
        description: string
      }
    ],

    holdPracticeMapping: {
      halt: string[],    // Threads needing Halt
      observe: string[], // Threads needing Observe
      look: string[],    // Threads needing Look
      decide: string[]   // Threads needing Decide
    }
  },

  completedAt: Date,
  createdAt: Date
}
```

**Indexes:**
- `userId` (for user history)
- `type` (for filtering)
- `completedAt` (for sorting)

#### 3. Training Sessions Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  moduleId: string, // e.g., 'pause-foundation-module'

  structure: {
    title: string,
    description: string,
    thread: string,
    tier: 'foundation' | 'building' | 'deepening' | 'mastery',
    estimatedDuration: number, // minutes
    slides: [...], // See detailed structure below
    practices: [...],
    knowledgeCheck: {...}
  },

  progress: {
    currentSlide: number,
    slidesViewed: number[],
    practicesCompleted: string[],
    knowledgeCheckScore?: number,
    knowledgeCheckPassed?: boolean,
    completed: boolean,
    completedAt?: Date
  },

  createdAt: Date,
  updatedAt: Date
}
```

#### 4. Training Progress Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),

  setup: {
    growthEdges: string[], // Thread IDs to focus on
    intensity: 'gentle' | 'moderate' | 'challenging',
    sessionDuration: 5 | 15 | 30 | 60, // minutes
    learningStyle: 'reflective' | 'experiential' | 'structured'
  },

  milestones: [
    {
      type: 'first_session' | 'week_streak' | 'pattern_broken' | 'capacity_increase',
      achievedAt: Date,
      details: object
    }
  ],

  stats: {
    totalSessions: number,
    totalMinutes: number,
    currentStreak: number,
    longestStreak: number,
    lastSessionDate?: Date
  },

  capacityGrowth: {
    baseline: {
      threadScores: {...},
      assessmentDate: Date
    },
    current?: {
      threadScores: {...},
      assessmentDate: Date
    },
    growth?: {
      presence: number, // percentage change
      consent: number,
      memory: number,
      pause: number,
      embodiment: number,
      uncertainty: number,
      becoming: number
    }
  },

  createdAt: Date,
  updatedAt: Date
}
```

#### 5. Practice Journal Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  date: Date,

  threadFocus: string, // Which thread(s)
  practiceType: 'HOLD' | 'navigation' | 'daily_reflection',

  entry: {
    situation: string,
    tensionsNoticed: string[],
    whatHappened: string,
    insights: string,
    nextSteps?: string
  },

  threadData?: {
    poles: string,
    practice: string
  },

  createdAt: Date,
  updatedAt: Date
}
```

#### 6. Module Progress Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  moduleId: string,

  progress: {
    slidesViewed: number[],
    currentSlide: number,
    totalSlides: number,
    completed: boolean,
    completedAt?: Date
  },

  knowledgeCheck?: {
    score: number,
    passed: boolean,
    attempts: number,
    lastAttempt: Date
  },

  createdAt: Date,
  updatedAt: Date
}
```

#### 7. Practice Assignments Collection

```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  moduleId: string,

  assignment: {
    title: string,
    description: string,
    thread: string,
    duration: string, // e.g., "3-5 minutes daily"
    instructions: string[]
  },

  status: 'pending' | 'in_progress' | 'completed',
  scheduledDate?: Date,
  dueDate?: Date,
  completedAt?: Date,

  createdAt: Date,
  updatedAt: Date
}
```

---

## API Endpoints

### Authentication

```typescript
POST   /api/auth/register
Body:  { email, password, name }
Response: { user, token }

POST   /api/auth/login
Body:  { email, password }
Response: { user, token }

POST   /api/auth/verify-email
Body:  { token }
Response: { message, user }

GET    /api/auth/me
Headers: { Authorization: Bearer <token> }
Response: { user }
```

### Assessments

```typescript
POST   /api/assessments/quick-profile
Headers: { Authorization: Bearer <token> }
Body:  { responses: [{ questionId, answer }] }
Response: { assessment, results }

POST   /api/assessments/extended
Headers: { Authorization: Bearer <token> }
Body:  { responses: [{ questionId, answer }] }
Response: { assessment, results, patterns }

GET    /api/assessments/results/:type
Headers: { Authorization: Bearer <token> }
Params: { type: 'quick_profile' | 'extended' }
Response: { assessment, results }

GET    /api/assessments/history
Headers: { Authorization: Bearer <token> }
Response: { assessments: [...] }
```

### Training

```typescript
POST   /api/training/setup
Headers: { Authorization: Bearer <token> }
Body:  { growthEdges, intensity, sessionDuration, learningStyle }
Response: { progress, firstSession }

GET    /api/training/progress
Headers: { Authorization: Bearer <token> }
Response: { progress, stats, milestones }

POST   /api/training/generate-session
Headers: { Authorization: Bearer <token> }
Body:  { threadFocus?, difficulty? }
Response: { session }

GET    /api/training/modules
Headers: { Authorization: Bearer <token> }
Response: { modules: [...] }

GET    /api/training/module/:moduleId
Headers: { Authorization: Bearer <token> }
Params: { moduleId }
Response: { module, progress }

POST   /api/training/module/:moduleId/progress
Headers: { Authorization: Bearer <token> }
Body:  { currentSlide, slidesViewed, completed }
Response: { progress }

POST   /api/training/module/:moduleId/knowledge-check
Headers: { Authorization: Bearer <token> }
Body:  { answers }
Response: { score, passed, feedback }
```

### Practice

```typescript
POST   /api/practice/journal
Headers: { Authorization: Bearer <token> }
Body:  { threadFocus, practiceType, entry }
Response: { journalEntry }

GET    /api/practice/journal
Headers: { Authorization: Bearer <token> }
Query:  { limit?, offset? }
Response: { entries: [...], total }

GET    /api/practice/assignments
Headers: { Authorization: Bearer <token> }
Response: { assignments: [...] }

POST   /api/practice/assignments/:id/complete
Headers: { Authorization: Bearer <token> }
Response: { assignment }
```

### Payments (Planned)

```typescript
POST   /api/payments/create-checkout-session
Headers: { Authorization: Bearer <token> }
Body:  { type: 'extended' | 'premium' | 'professional', period?: 'monthly' | 'yearly' }
Response: { sessionId, url }

POST   /api/payments/webhook
Headers: { stripe-signature }
Body:  Stripe webhook event
Response: { received: true }

GET    /api/payments/subscription
Headers: { Authorization: Bearer <token> }
Response: { subscription }

POST   /api/payments/cancel-subscription
Headers: { Authorization: Bearer <token> }
Response: { subscription }
```

### Custom Content Generation (Professional Tier - Planned)

```typescript
POST   /api/training/generate-custom-module
Headers: { Authorization: Bearer <token> }
Body:  {
  moduleTemplate: 'pause-foundation' | 'embodiment-building' | ...,
  regenerate?: boolean  // Force regeneration even if cached
}
Response: {
  module: CustomModule,
  generatedAt: Date,
  assessmentUsed: string  // Assessment ID used for generation
}

GET    /api/training/custom-modules/:moduleId
Headers: { Authorization: Bearer <token> }
Response: { module: CustomModule }

POST   /api/training/invalidate-custom-modules
Headers: { Authorization: Bearer <token> }
Body:  { reason: 'reassessment' | 'user_request' }
Response: { invalidated: number }  // Count of modules marked for regeneration
```

### Automated Module Generation (Admin - Planned)

```typescript
POST   /api/admin/training/generate-module
Headers: { Authorization: Bearer <admin_token> }
Body:  {
  sourceId: 'core-threads' | 'safe' | 'educators' | 'tier1-foundation' | 'reckon' | 'hold' | 'custom',
  thread?: string,  // e.g., 'pause', 'embodiment'
  tier?: 'foundation' | 'building' | 'deepening' | 'mastery',
  customSourceMarkdown?: string  // If sourceId === 'custom'
}
Response: {
  module: TrainingModule,
  generatedAt: Date,
  costBreakdown: {
    llm: number,
    audio: number,
    total: number
  }
}

POST   /api/admin/training/batch-generate
Headers: { Authorization: Bearer <admin_token> }
Body:  {
  sourceId: string,
  modules: Array<{ thread: string, tier: string }>
}
Response: {
  modules: TrainingModule[],
  totalCost: number,
  estimatedTime: number  // seconds
}

GET    /api/admin/training/source-materials
Headers: { Authorization: Bearer <admin_token> }
Response: {
  sources: Array<{ id: string, name: string, description: string }>
}

POST   /api/admin/training/upload-source
Headers: { Authorization: Bearer <admin_token> }
Body:  {
  name: string,
  markdown: string,
  description?: string
}
Response: { sourceId: string }
```

---

## Assessment Engine

### Scoring Algorithm

#### Quick Profile Scoring

```typescript
// server/src/assessments/scoring.service.ts

interface QuickProfileResponse {
  questionId: string; // 'PR1', 'C4', 'M7', etc.
  answer: 'A' | 'B' | 'C' | 'D';
}

class AssessmentScoringService {
  // Question mapping: 3 questions per thread
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
    const threadScores = {};

    for (const [thread, questionNums] of Object.entries(this.quickProfileMapping)) {
      let totalScore = 0;

      for (const qNum of questionNums) {
        const response = responses.find(r =>
          parseInt(r.questionId.replace(/\D/g, '')) === qNum
        );

        if (response) {
          const isReverse = this.reverseScored.includes(qNum);
          totalScore += this.getQuestionScore(response.answer, isReverse);
        }
      }

      const maxScore = questionNums.length * 4; // 3 questions × 4 points = 12 max
      const percentage = (totalScore / maxScore) * 100;

      threadScores[thread] = {
        score: totalScore,
        percentage: Math.round(percentage * 10) / 10
      };
    }

    // Calculate See/Hold/Emerge averages
    const see = this.average([
      threadScores.presence.percentage,
      threadScores.consent.percentage,
      threadScores.memory.percentage,
      threadScores.pause.percentage
    ]);

    const hold = this.average([
      threadScores.embodiment.percentage,
      threadScores.uncertainty.percentage
    ]);

    const emerge = threadScores.becoming.percentage;

    return {
      threadScores,
      movementAverages: { see, hold, emerge },
      holdPracticeMapping: this.mapToHoldPractice(threadScores)
    };
  }

  private getQuestionScore(answer: string, isReverse: boolean): number {
    const scores = { A: 1, B: 2, C: 3, D: 4 };
    const reverseScores = { A: 4, B: 3, C: 2, D: 1 };
    return isReverse ? reverseScores[answer] : scores[answer];
  }
}
```

#### Extended Assessment Scoring

```typescript
// 10 questions per thread, same scoring logic
// Additional analysis:

interface ExtendedResults {
  threadScores: {...};
  movementAverages: {...};
  collapseDirections: {
    [thread: string]: 'a' | 'b' | 'balanced'
  };
  detectedPatterns: Pattern[];
}

class ExtendedScoringService {
  scoreExtendedAssessment(responses: Response[]) {
    // Same thread scoring as Quick Profile, but 10 questions per thread
    const threadScores = this.calculateThreadScores(responses);

    // Analyze collapse direction (questions 4-6 for each thread)
    const collapseDirections = this.analyzeCollapseDirections(responses);

    // Detect patterns based on thread scores + collapse directions
    const detectedPatterns = this.detectPatterns(threadScores, collapseDirections);

    return {
      threadScores,
      movementAverages: this.calculateMovements(threadScores),
      collapseDirections,
      detectedPatterns,
      holdPracticeMapping: this.mapToHoldPractice(threadScores)
    };
  }

  private analyzeCollapseDirections(responses) {
    // For each thread, analyze questions 4-6 to determine collapse pole
    // Majority 'a' answers → Pole A collapse
    // Majority 'b' answers → Pole B collapse
    // Mixed → Balanced
  }
}
```

### Pattern Detection

```typescript
// server/src/assessments/collapse-pattern.service.ts

interface CollapsePattern {
  id: string;
  name: string;
  coreCollapse: string[]; // Thread names
  signature: {
    [thread: string]: 'low' | 'high' | 'any'
  };
  description: string;
  behavioralSigns: string[];
  breakingPattern: string[];
  practices: string[];
}

class CollapsePatternService {
  private patterns: CollapsePattern[] = [
    {
      id: 'righteous-reactor',
      name: 'The Righteous Reactor',
      coreCollapse: ['pause', 'consent', 'becoming'],
      signature: {
        pause: 'low',
        consent: 'low',
        becoming: 'low'
      },
      description: '...',
      behavioralSigns: [...],
      breakingPattern: [...],
      practices: [...]
    },
    // ... 7 more patterns
  ];

  detectPatterns(threadScores, collapseDirections) {
    const detected = [];

    for (const pattern of this.patterns) {
      let matchScore = 0;
      let totalChecks = 0;

      // Check thread score signature
      for (const [thread, expected] of Object.entries(pattern.signature)) {
        totalChecks++;
        const score = threadScores[thread].percentage;

        if (expected === 'low' && score < 50) matchScore++;
        if (expected === 'high' && score >= 75) matchScore++;
        if (expected === 'any') matchScore++;
      }

      const confidence = (matchScore / totalChecks) * 100;

      // Include pattern if confidence >= 60%
      if (confidence >= 60) {
        detected.push({
          ...pattern,
          confidence: Math.round(confidence)
        });
      }
    }

    // Sort by confidence (highest first)
    return detected.sort((a, b) => b.confidence - a.confidence);
  }
}
```

---

## Training System

### Training Generation Algorithm

```typescript
// server/src/training/training.service.ts

interface TrainingSetup {
  growthEdges: string[]; // Thread IDs
  intensity: 'gentle' | 'moderate' | 'challenging';
  sessionDuration: 5 | 15 | 30 | 60;
  learningStyle: 'reflective' | 'experiential' | 'structured';
}

class TrainingService {
  async generateTrainingSession(userId: string, preferences?: any) {
    // Get user's assessment results
    const assessment = await this.getLatestAssessment(userId);
    const progress = await this.getTrainingProgress(userId);

    // Determine thread focus
    const threadFocus = this.selectThreadFocus(
      assessment,
      progress.setup.growthEdges,
      progress.stats
    );

    // Determine capacity tier
    const tier = this.determineCapacityTier(
      assessment.results.threadScores[threadFocus].percentage
    );

    // Load module content
    const module = await this.loadModule(threadFocus, tier);

    // Adapt to session duration
    const session = this.adaptSessionDuration(
      module,
      progress.setup.sessionDuration
    );

    return session;
  }

  private selectThreadFocus(assessment, growthEdges, stats) {
    // Priority 1: User-selected growth edges
    if (growthEdges && growthEdges.length > 0) {
      return this.selectFromGrowthEdges(growthEdges, stats);
    }

    // Priority 2: Lowest scoring threads
    const lowestThreads = Object.entries(assessment.results.threadScores)
      .sort((a, b) => a[1].percentage - b[1].percentage)
      .slice(0, 2)
      .map(([thread]) => thread);

    return lowestThreads[0];
  }

  private determineCapacityTier(percentage: number): string {
    if (percentage < 25) return 'foundation';
    if (percentage < 50) return 'building';
    if (percentage < 75) return 'deepening';
    return 'mastery';
  }
}
```

### Module Structure

#### Standard Module (Premium Tier)

```typescript
interface TrainingModule {
  id: string;
  title: string;
  description: string;
  thread: string;
  tier: 'foundation' | 'building' | 'deepening' | 'mastery';
  estimatedDuration: number; // minutes

  slides: Slide[];
  practices: Practice[];
  knowledgeCheck: KnowledgeCheck;
  practiceAssignment: PracticeAssignment;
}

// 36 standard modules total:
// - 28 Thread modules (7 threads × 4 tiers)
// - 8 Collapse Pattern modules
```

#### Custom Module (Professional Tier)

```typescript
interface CustomModule extends TrainingModule {
  customContent: {
    meditation: CustomMeditation;
    exercises: CustomExercise[];
    writingPrompts: CustomWritingPrompt[];
    knowledgeCheck: CustomKnowledgeCheck;
  };

  generationMetadata: {
    assessmentId: string;
    generatedAt: Date;
    llmModel: string; // 'gpt-4' | 'claude-3-opus' etc.
    assessmentDataUsed: {
      threadScores: object;
      collapseDirections: object;
      detectedPatterns: string[];
      specificResponses: string[]; // Question IDs referenced
    };
  };

  // Hybrid model: Custom content + Standard slides
  slides: Slide[]; // Same as standard module
}

interface Slide {
  slideNumber: number;
  title: string;
  content: string;
  imageUrl?: string;
  audioUrl?: string;
  duration: number; // seconds
}

interface Practice {
  id: string;
  type: 'meditation' | 'exercise' | 'reflection';
  title: string;
  instructions: string[];
  duration: number; // minutes
  audioUrl?: string;
}

interface KnowledgeCheck {
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  passingScore: number; // percentage
}

interface PracticeAssignment {
  title: string;
  description: string;
  instructions: string[];
  duration: string; // e.g., "3-5 minutes daily"
  dueDate?: Date;
}
```

### Custom Content Generation Service (Professional Tier)

```typescript
// server/src/training/custom-content.service.ts

import { Injectable } from '@nestjs/common';
import OpenAI from 'openai'; // or Anthropic SDK
import { SpeechifyService } from '../services/speechify.service';

@Injectable()
export class CustomContentService {
  private openai: OpenAI;

  constructor(
    private speechifyService: SpeechifyService,
    private assessmentsService: AssessmentsService,
    private modulesService: ModulesService
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateCustomModule(
    userId: string,
    moduleTemplateId: string,
    regenerate: boolean = false
  ): Promise<CustomModule> {
    // 1. Check if custom module already exists and is current
    if (!regenerate) {
      const existing = await this.findExistingCustomModule(userId, moduleTemplateId);
      if (existing && this.isModuleCurrent(existing)) {
        return existing;
      }
    }

    // 2. Load standard module template
    const template = await this.modulesService.findById(moduleTemplateId);

    // 3. Get user's latest assessment data
    const assessment = await this.assessmentsService.getLatestExtended(userId);

    // 4. Generate custom content
    const customMeditation = await this.generateCustomMeditation(template, assessment);
    const customExercises = await this.generateCustomExercises(template, assessment);
    const customWritingPrompts = await this.generateCustomWritingPrompts(template, assessment);
    const customKnowledgeCheck = await this.generateCustomKnowledgeCheck(template, assessment);

    // 5. Generate audio for meditation
    const meditationAudio = await this.speechifyService.generateAudio(
      customMeditation.script,
      { voice: 'calm', speed: 0.9 }
    );

    // 6. Assemble custom module
    const customModule: CustomModule = {
      ...template,
      id: `${moduleTemplateId}-custom-${userId}`,
      customContent: {
        meditation: { ...customMeditation, audioUrl: meditationAudio.url },
        exercises: customExercises,
        writingPrompts: customWritingPrompts,
        knowledgeCheck: customKnowledgeCheck
      },
      generationMetadata: {
        assessmentId: assessment._id,
        generatedAt: new Date(),
        llmModel: 'gpt-4-turbo',
        assessmentDataUsed: {
          threadScores: assessment.results.threadScores,
          collapseDirections: assessment.results.collapseDirections,
          detectedPatterns: assessment.results.detectedPatterns.map(p => p.patternId),
          specificResponses: this.extractRelevantResponses(template, assessment)
        }
      }
    };

    // 7. Save to database
    await this.saveCustomModule(userId, customModule);

    return customModule;
  }

  private async generateCustomMeditation(
    template: TrainingModule,
    assessment: Assessment
  ): Promise<CustomMeditation> {
    const standardMeditation = template.practices.find(p => p.type === 'meditation');

    const prompt = `
You are creating a personalized meditation for thread capacity training.

STANDARD MEDITATION TEMPLATE:
${standardMeditation.instructions.join('\n')}

USER'S ASSESSMENT DATA:
Thread: ${template.thread}
Capacity: ${assessment.results.threadScores[template.thread].percentage}%
Collapse Direction: ${assessment.results.collapseDirections[template.thread]}
Primary Pattern: ${assessment.results.detectedPatterns[0]?.name}

SPECIFIC USER EXAMPLES:
${this.extractUserExamples(template.thread, assessment)}

TASK:
Generate a personalized meditation script that:
1. References their specific collapse pattern
2. Uses their actual examples from the assessment
3. Addresses their identified triggers
4. Maintains the timing and structure of the template
5. Uses second-person language ("You mentioned...")

Format with timing notation: [~] = breath pause, [~~] = full breath, [~~~] = long pause
    `;

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    return {
      script: completion.choices[0].message.content,
      duration: standardMeditation.duration,
      type: 'meditation'
    };
  }

  private async generateCustomExercises(
    template: TrainingModule,
    assessment: Assessment
  ): Promise<CustomExercise[]> {
    const exercises = template.practices.filter(p => p.type === 'exercise');

    const customExercises = await Promise.all(
      exercises.map(async (exercise) => {
        const prompt = `
Generate a personalized exercise based on this template and user's assessment data.

TEMPLATE EXERCISE:
${exercise.instructions.join('\n')}

USER DATA:
- Lowest scoring context: ${this.getLowestContext(template.thread, assessment)}
- Specific collapse example: ${this.getCollapseExample(template.thread, assessment)}
- Pattern: ${assessment.results.detectedPatterns[0]?.name}

Make it specific to THEIR situation while maintaining the learning objective.
        `;

        const completion = await this.openai.chat.completions.create({
          model: 'gpt-4-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7
        });

        return {
          ...exercise,
          instructions: completion.choices[0].message.content.split('\n')
        };
      })
    );

    return customExercises;
  }

  private async generateCustomWritingPrompts(
    template: TrainingModule,
    assessment: Assessment
  ): Promise<CustomWritingPrompt[]> {
    // Similar structure to exercises
    // Generates prompts that reference user's specific patterns
  }

  private async generateCustomKnowledgeCheck(
    template: TrainingModule,
    assessment: Assessment
  ): Promise<CustomKnowledgeCheck> {
    // Generates questions targeting user's specific blind spots
    // Uses their assessment responses to create relevant scenarios
  }

  private extractUserExamples(thread: string, assessment: Assessment): string {
    // Extract relevant question responses for this thread
    const threadQuestions = assessment.responses.filter(r =>
      r.questionId.startsWith(this.getThreadPrefix(thread))
    );

    // Focus on questions where they showed collapse (low scores)
    const collapseExamples = threadQuestions
      .filter(r => this.scoreResponse(r.answer) <= 2)
      .map(r => `Q${r.questionId}: ${this.getQuestionText(r.questionId)} - Answer: ${r.answer}`)
      .join('\n');

    return collapseExamples;
  }

  private isModuleCurrent(customModule: CustomModule): boolean {
    // Check if module was generated from user's latest assessment
    const latestAssessment = await this.assessmentsService.getLatestExtended(customModule.userId);
    return customModule.generationMetadata.assessmentId === latestAssessment._id.toString();
  }

  async invalidateCustomModules(userId: string, reason: string): Promise<number> {
    // Mark all custom modules for regeneration
    // Called after reassessment or user request
    return this.customModulesRepo.updateMany(
      { userId },
      { $set: { needsRegeneration: true, invalidatedAt: new Date(), invalidationReason: reason } }
    );
  }
}
```

### Cost Calculation

```typescript
interface GenerationCost {
  llm: number;        // OpenAI API costs
  audio: number;      // Speechify API costs
  total: number;
}

function calculateCustomModuleCost(module: CustomModule): GenerationCost {
  // LLM costs (GPT-4 Turbo pricing as of Dec 2024)
  const INPUT_COST_PER_1K = 0.01;   // $0.01 per 1K input tokens
  const OUTPUT_COST_PER_1K = 0.03;  // $0.03 per 1K output tokens

  // Estimate: ~2K input tokens, ~1.5K output tokens per module
  const llmCost = (2 * INPUT_COST_PER_1K) + (1.5 * OUTPUT_COST_PER_1K);
  // = $0.02 + $0.045 = $0.065

  // Speechify costs: ~$0.15 per minute of audio
  // Average meditation: 10 minutes
  const audioCost = 10 * 0.15; // = $1.50

  return {
    llm: 0.07,        // ~$0.07 per module
    audio: 1.50,      // ~$1.50 per module
    total: 1.57       // ~$1.57 per module
  };
}

// User completes ~8 modules over 3 months of Professional subscription
// Generation cost: 8 × $1.57 = $12.56
// Revenue: 3 months × $15 = $45
// Margin: $32.44 (72% gross margin)
```

### Automated Module Generation System

**Purpose:** Generate complete training modules from source material using Claude API + Speechify

#### Architecture

```
Source Material (Markdown)
  ↓
Admin UI: Select source → thread/focus → tier
  ↓
ModuleGeneratorService
  ↓
1. Load source material
2. Load PAUSE Foundation template (proven example)
3. Generate with Claude API
  ↓
ClaudeService generates:
- Complete module structure
- Slides (content, narration scripts)
- Meditation script with timing
- Exercises
- Writing prompts
- Knowledge check questions
  ↓
4. Generate audio via Speechify
- Meditation narration
- Slide narration
  ↓
5. Upload media to S3
  ↓
6. Save module as draft
  ↓
Admin reviews → Edit if needed → Publish
```

#### ModuleGeneratorService Implementation

```typescript
// server/src/training/module-generator.service.ts

import { Injectable } from '@nestjs/common';
import Anthropic from '@anthropic-ai/sdk';
import { SpeechifyService } from '../services/speechify.service';
import { SourceMaterialService } from './source-material.service';
import { S3Service } from '../services/s3.service';

@Injectable()
export class ModuleGeneratorService {
  private anthropic: Anthropic;

  constructor(
    private speechifyService: SpeechifyService,
    private sourceMaterialService: SourceMaterialService,
    private s3Service: S3Service
  ) {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });
  }

  /**
   * Generate complete module from source material
   */
  async generateModuleFromSource(request: {
    sourceId: string;
    thread?: string;
    tier?: 'foundation' | 'building' | 'deepening' | 'mastery';
    customSourceMarkdown?: string;
  }): Promise<TrainingModule> {

    // 1. Load source material
    const sourceMaterial = request.customSourceMarkdown
      ? request.customSourceMarkdown
      : await this.sourceMaterialService.loadSourceMaterial(request.sourceId);

    // 2. Load PAUSE Foundation template (proven example)
    const exampleTemplate = await this.loadPauseFoundationTemplate();

    // 3. Generate module content with Claude
    const moduleContent = await this.generateWithClaude(
      sourceMaterial,
      exampleTemplate,
      request.thread,
      request.tier
    );

    // 4. Generate audio for meditation
    const meditationAudio = await this.speechifyService.generateAudio(
      moduleContent.meditation.script,
      { voice: 'calm', speed: 0.9 }
    );

    // 5. Generate audio for each slide
    const slideAudio = await Promise.all(
      moduleContent.slides.map(slide =>
        this.speechifyService.generateAudio(
          slide.narrationScript,
          { voice: 'professional', speed: 0.95 }
        )
      )
    );

    // 6. Upload to S3
    const meditationUrl = await this.s3Service.uploadAudio(
      meditationAudio.buffer,
      `modules/${moduleContent.id}/meditation.mp3`
    );

    const slideUrls = await Promise.all(
      slideAudio.map((audio, i) =>
        this.s3Service.uploadAudio(
          audio.buffer,
          `modules/${moduleContent.id}/slide-${i + 1}.mp3`
        )
      )
    );

    // 7. Assemble final module
    const module: TrainingModule = {
      id: moduleContent.id,
      ...moduleContent,
      media: {
        meditationAudio: meditationUrl,
        slideAudio: slideUrls,
        slideImages: [] // Generated separately or with existing process
      },
      status: 'draft', // Requires admin review before publishing
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // 8. Save to database
    await this.saveModule(module);

    return module;
  }

  /**
   * Generate module content using Claude API
   */
  private async generateWithClaude(
    sourceMaterial: string,
    exampleTemplate: string,
    thread?: string,
    tier?: string
  ): Promise<any> {

    const prompt = this.buildModuleGenerationPrompt(
      sourceMaterial,
      exampleTemplate,
      thread,
      tier
    );

    const message = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 8000,
      temperature: 0.7,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    // Parse Claude's response (expecting JSON)
    const moduleData = this.parseModuleResponse(message.content[0].text);

    return moduleData;
  }

  /**
   * Build comprehensive prompt for Claude
   */
  private buildModuleGenerationPrompt(
    sourceMaterial: string,
    exampleTemplate: string,
    thread?: string,
    tier?: string
  ): string {
    return `
You are an expert instructional designer creating thread capacity training modules.

TASK: Generate a complete training module based on the source material provided.

SOURCE MATERIAL TO USE AS CONTENT BASIS:
${sourceMaterial}

PROVEN MODULE STRUCTURE (follow this EXACT structure):
${exampleTemplate}

${thread ? `THREAD FOCUS: ${thread}` : 'THREAD: Determine from source material'}
${tier ? `CAPACITY TIER: ${tier}` : 'TIER: Foundation (introductory level)'}

REQUIREMENTS:
1. Follow the exact 6-part structure from the example:
   - Slide Sequence (5-7 slides with narration scripts)
   - Guided Practice (8-15 min meditation/exercise with timing notation)
   - Writing Prompts (2-3 reflective questions)
   - Knowledge Check (3-5 questions with explanations)
   - Practice Assignment (daily/weekly practice)
   - Learning Objectives (3-5 clear outcomes)

2. Use timing notation for practices:
   [~] = half breath pause (1-2 seconds)
   [~~] = full breath cycle (3-4 seconds)
   [~~~] = long pause (5-10 seconds)

3. Adapt content from source material to thread ${thread || 'identified'} at ${tier || 'foundation'} tier

4. Maintain trauma-informed, non-pathologizing language

5. Include diverse examples (work, family, community, online contexts)

6. Output as valid JSON with this structure:
{
  "id": "thread-tier-module",
  "title": "Module Title",
  "description": "Brief description",
  "thread": "thread_name",
  "tier": "foundation|building|deepening|mastery",
  "estimatedDuration": 25,
  "learningObjectives": [...],
  "slides": [
    {
      "slideNumber": 1,
      "title": "...",
      "visualType": "title|diagram|list|photos|process|text|milestone",
      "visualDescription": "Description for designer/image generation",
      "narrationScript": "Word-for-word narration",
      "narrationDuration": 30
    },
    ...
  ],
  "meditation": {
    "title": "...",
    "script": "Full meditation script with timing notation [~][~~][~~~]",
    "duration": 10
  },
  "exercises": [...],
  "writingPrompts": [...],
  "knowledgeCheck": {
    "questions": [
      {
        "question": "...",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "explanation": "..."
      }
    ],
    "passingScore": 60
  },
  "practiceAssignment": {
    "title": "...",
    "description": "...",
    "instructions": [...],
    "duration": "3-5 minutes daily",
    "deliverables": [...]
  }
}

IMPORTANT: Output ONLY the JSON, no additional text before or after.
    `;
  }

  /**
   * Parse Claude's JSON response
   */
  private parseModuleResponse(responseText: string): any {
    try {
      // Remove markdown code blocks if present
      const cleaned = responseText
        .replace(/```json\n/g, '')
        .replace(/```\n/g, '')
        .replace(/```/g, '')
        .trim();

      return JSON.parse(cleaned);
    } catch (error) {
      throw new Error(`Failed to parse module response: ${error.message}`);
    }
  }

  /**
   * Load PAUSE Foundation module as template
   */
  private async loadPauseFoundationTemplate(): Promise<string> {
    // Load from database or file system
    const pauseModule = await this.modulesRepo.findOne({
      id: 'pause-foundation-module'
    });

    return JSON.stringify(pauseModule, null, 2);
  }

  /**
   * Batch generate multiple modules
   */
  async batchGenerate(
    sourceId: string,
    modules: Array<{ thread: string; tier: string }>
  ): Promise<{ modules: TrainingModule[]; totalCost: number }> {
    const results = [];
    let totalCost = 0;

    for (const spec of modules) {
      const module = await this.generateModuleFromSource({
        sourceId,
        thread: spec.thread,
        tier: spec.tier as any
      });

      results.push(module);
      totalCost += this.calculateGenerationCost();
    }

    return { modules: results, totalCost };
  }

  /**
   * Calculate generation cost
   */
  private calculateGenerationCost(): number {
    // Claude API: ~$0.08 (estimated 2K input + 1.5K output tokens)
    // Speechify: ~$1.50 (10 min meditation + 7 slides × ~30 sec each)
    return 0.08 + 1.50; // ~$1.58 per module
  }
}
```

#### SourceMaterialService Implementation

```typescript
// server/src/training/source-material.service.ts

import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SourceMaterialService {
  private sourceMaterialPath = join(process.cwd(), 'training-source-materials');

  /**
   * Load source material by ID
   */
  async loadSourceMaterial(sourceId: string): Promise<string> {
    const sourceMap = {
      'core-threads': 'core-threads-framework.md',
      'safe': 'SAFE-framework.md',
      'educators': 'for-educators.md',
      'tier1-foundation': 'tier-1-foundation-training.md',
      'reckon': 'RECKON-framework.md',
      'hold': 'HOLD-practice.md'
    };

    const filename = sourceMap[sourceId];
    if (!filename) {
      throw new Error(`Unknown source material ID: ${sourceId}`);
    }

    const filePath = join(this.sourceMaterialPath, filename);
    return await readFile(filePath, 'utf-8');
  }

  /**
   * Get all available source materials
   */
  async listSourceMaterials() {
    return [
      {
        id: 'core-threads',
        name: 'Core 7 Threads Framework',
        description: 'Original framework: PRESENCE, CONSENT, MEMORY, PAUSE, EMBODIMENT, UNCERTAINTY, BECOMING'
      },
      {
        id: 'safe',
        name: 'S.A.F.E. Framework',
        description: 'Addressing bullying and harm through thread capacity'
      },
      {
        id: 'educators',
        name: 'For Educators',
        description: 'Thread capacity training adapted for teachers and educational settings'
      },
      {
        id: 'tier1-foundation',
        name: 'Tier 1 Foundation Training',
        description: 'Entry-level comprehensive capacity building'
      },
      {
        id: 'reckon',
        name: 'RECKON Framework',
        description: 'Advanced framework for reckoning with complexity'
      },
      {
        id: 'hold',
        name: 'HOLD Practice',
        description: 'Halt, Observe, Look, Decide - core practice framework'
      }
    ];
  }

  /**
   * Upload custom source material
   */
  async uploadCustomSource(name: string, markdown: string): Promise<string> {
    const sourceId = name.toLowerCase().replace(/\s+/g, '-');
    const filename = `${sourceId}.md`;
    const filePath = join(this.sourceMaterialPath, 'custom', filename);

    await writeFile(filePath, markdown, 'utf-8');

    return sourceId;
  }
}
```

#### Cost Analysis

```typescript
interface GenerationCostBreakdown {
  claudeApi: number;     // AI generation
  speechify: number;     // Audio generation
  s3Storage: number;     // Media storage
  total: number;
}

function calculateModuleGenerationCost(): GenerationCostBreakdown {
  // Claude API costs (Sonnet 3.5 pricing as of Dec 2024)
  const INPUT_COST_PER_1M = 3.00;   // $3 per 1M input tokens
  const OUTPUT_COST_PER_1M = 15.00; // $15 per 1M output tokens

  // Estimate: ~2,000 input tokens (source + template + prompt)
  // Estimate: ~1,500 output tokens (complete module JSON)
  const claudeCost =
    (2000 / 1_000_000 * INPUT_COST_PER_1M) +
    (1500 / 1_000_000 * OUTPUT_COST_PER_1M);
  // = $0.006 + $0.0225 = ~$0.08

  // Speechify costs: ~$0.15 per minute of audio
  // Meditation: 10 minutes
  // Slides: 7 slides × ~30 seconds each = ~3.5 minutes
  const speechifyCost = (10 + 3.5) * 0.15; // = ~$2.03

  // Note: Actual Speechify may be ~$1.50 total if using lower pricing tier

  // S3 storage: negligible (~$0.001 per module)
  const s3Cost = 0.001;

  return {
    claudeApi: 0.08,
    speechify: 1.50,  // Using lower estimate
    s3Storage: 0.001,
    total: 1.58       // ~$1.58 per module
  };
}

// Time savings calculation
function calculateTimeSavings() {
  const MANUAL_TIME_PER_MODULE = 50; // hours (2 weeks per module)
  const AUTOMATED_TIME_PER_MODULE = 1; // hours (30 sec generation + 1 hour review)
  const MODULES_NEEDED = 36;

  const manualTotal = MANUAL_TIME_PER_MODULE * MODULES_NEEDED; // 1,800 hours
  const automatedTotal = AUTOMATED_TIME_PER_MODULE * MODULES_NEEDED; // 36 hours

  return {
    manualHours: manualTotal,
    automatedHours: automatedTotal,
    timeSaved: manualTotal - automatedTotal, // 1,764 hours saved
    costSaved: (manualTotal - automatedTotal) * 50, // $88,200 saved at $50/hr
    generationCost: MODULES_NEEDED * 1.58 // $56.88 total generation cost
  };
}
```

---

## Authentication & Authorization

### JWT Strategy

```typescript
// server/src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
      tier: payload.tier
    };
  }
}
```

### Password Hashing

```typescript
// server/src/auth/auth.service.ts

import * as bcrypt from 'bcrypt';

class AuthService {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(plainText: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashed);
  }
}
```

### Guards & Decorators

```typescript
// Protect routes with JWT guard
@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}

// Subscription tier guard (planned)
@UseGuards(JwtAuthGuard, SubscriptionGuard)
@RequiresTier('premium')
@Get('premium-content')
getPremiumContent() {
  // Only accessible to premium+ users
}
```

---

## Payment Integration

### Stripe Configuration

```typescript
// server/src/payments/payments.service.ts

import Stripe from 'stripe';

class PaymentsService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16'
    });
  }

  async createCheckoutSession(userId: string, type: string) {
    const user = await this.usersService.findById(userId);

    const session = await this.stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ['card'],
      line_items: this.getLineItems(type),
      mode: type === 'extended' ? 'payment' : 'subscription',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      metadata: {
        userId,
        type
      }
    });

    return { sessionId: session.id, url: session.url };
  }

  async handleWebhook(signature: string, rawBody: any) {
    const event = this.stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'checkout.session.completed':
        await this.handleCheckoutComplete(event.data.object);
        break;
      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdate(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionCancel(event.data.object);
        break;
    }

    return { received: true };
  }
}
```

---

## Email & Notifications

### AWS SES Configuration

```typescript
// server/src/services/email.service.ts

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

class EmailService {
  private sesClient: SESClient;

  constructor() {
    this.sesClient = new SESClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }
    });
  }

  async sendEmail(to: string, subject: string, htmlBody: string) {
    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: { Html: { Data: htmlBody } }
      }
    });

    return this.sesClient.send(command);
  }
}
```

### Email Templates

Located in `server/src/email/templates/`:
- `welcome.template.ts` - Account creation
- `email-verification.template.ts` - Email verification
- `assessment-results.template.ts` - Assessment completion
- `training-reminder.template.ts` - Practice reminders
- `subscription-confirmation.template.ts` - Payment confirmations

---

## Deployment & Infrastructure

### Environment Variables

```bash
# Backend (.env)
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://creativeadvance.org

# Database
MONGODB_URI=mongodb+srv://...

# Authentication
JWT_SECRET=...
JWT_EXPIRES_IN=7d

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
SES_FROM_EMAIL=noreply@creativeadvance.org
S3_BUCKET_NAME=threads-journey-media

# Speechify (planned)
SPEECHIFY_API_KEY=...
```

### Deployment Commands

```bash
# Frontend (AWS Amplify)
npm run build
# Auto-deploys on git push to main

# Backend (AWS App Runner)
docker build -t threads-api .
# Auto-deploys on git push to main
```

### Docker Configuration

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

---

## Development Workflow

### Local Development

```bash
# Backend
cd server
npm install
npm run start:dev  # NestJS with hot-reload

# Frontend
cd client
npm install
npm run dev  # Vite dev server
```

### Testing

```bash
# Backend
npm run test           # Unit tests
npm run test:e2e       # Integration tests
npm run test:cov       # Coverage report

# Frontend
npm run test           # Vitest unit tests
```

### Code Quality

```bash
# Linting
npm run lint

# Formatting
npm run format
```

---

**Document Status:** Living document, updated as platform evolves
**Next Review:** Quarterly or upon major architectural changes
**Related Documents:**
- [PLATFORM-OVERVIEW.md](PLATFORM-OVERVIEW.md) - Business model and strategy
- [TRAINING-SYSTEM-DESIGN.md](TRAINING-SYSTEM-DESIGN.md) - Training content architecture
- [IMPLEMENTATION-STATUS.md](IMPLEMENTATION-STATUS.md) - Current development status
