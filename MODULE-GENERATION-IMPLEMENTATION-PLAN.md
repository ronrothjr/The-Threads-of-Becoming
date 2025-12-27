# Automated Module Generation - Phased Implementation Plan

**Created:** December 27, 2025
**Purpose:** Step-by-step plan to build automated training module generation system
**Timeline:** 2-3 weeks
**Cost to Build:** ~10-15 development hours
**ROI:** 1,764 hours saved, $88,200 cost reduction

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Phase 1: Backend Foundation](#phase-1-backend-foundation)
4. [Phase 2: Source Material System](#phase-2-source-material-system)
5. [Phase 3: Claude Integration](#phase-3-claude-integration)
6. [Phase 4: Admin UI](#phase-4-admin-ui)
7. [Phase 5: Testing & Refinement](#phase-5-testing--refinement)
8. [Phase 6: Production Deployment](#phase-6-production-deployment)
9. [Post-Launch: Content Generation](#post-launch-content-generation)

---

## Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Admin UI Layer                          │
│  ┌────────────────────────────────────────────────┐    │
│  │  ModuleGenerationHub.tsx                       │    │
│  │  - Source selection                            │    │
│  │  - Thread/tier selection                       │    │
│  │  - Custom markdown upload                      │    │
│  │  - Batch generation                            │    │
│  │  - Progress tracking                           │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                         ↓ HTTP
┌─────────────────────────────────────────────────────────┐
│                  API Layer (NestJS)                      │
│  ┌────────────────────────────────────────────────┐    │
│  │  TrainingAdminController                       │    │
│  │  POST /api/admin/training/generate-module      │    │
│  │  POST /api/admin/training/batch-generate       │    │
│  │  GET  /api/admin/training/source-materials     │    │
│  │  POST /api/admin/training/upload-source        │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│                 Service Layer                            │
│  ┌──────────────────────┐  ┌──────────────────────┐    │
│  │ ModuleGeneratorService│  │ SourceMaterialService│    │
│  │ - Generate module     │  │ - Load materials     │    │
│  │ - Batch generate      │  │ - Upload custom      │    │
│  │ - Cost calculation    │  │ - List sources       │    │
│  └──────────────────────┘  └──────────────────────┘    │
│  ┌──────────────────────┐  ┌──────────────────────┐    │
│  │   SpeechifyService    │  │      S3Service       │    │
│  │ - Generate audio      │  │ - Upload media       │    │
│  └──────────────────────┘  └──────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│             External Services & Storage                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ Claude   │  │Speechify │  │   AWS    │  │MongoDB │ │
│  │   API    │  │   API    │  │   S3     │  │ Atlas  │ │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
└─────────────────────────────────────────────────────────┘
```

### What We're Building

**5 New Backend Files:**
1. `server/src/training/module-generator.service.ts` - Core generation logic
2. `server/src/training/source-material.service.ts` - Source management
3. `server/src/training/training-admin.controller.ts` - Admin API endpoints (enhance existing)
4. `server/src/services/s3.service.ts` - S3 upload utility (may exist)
5. `server/src/training/training.module.ts` - Module registration (enhance existing)

**1 New Frontend File:**
1. `client/src/pages/ModuleGenerationHub.tsx` - Admin UI for generation

**Directory Structure:**
```
server/
└── training-source-materials/
    ├── core-threads-framework.md
    ├── SAFE-framework.md
    ├── for-educators.md
    ├── tier-1-foundation-training.md
    ├── RECKON-framework.md
    ├── HOLD-practice.md
    ├── custom/
    │   └── (user uploads)
    └── examples/
        └── pause-foundation-complete.md
```

---

## Prerequisites

### Required Before Starting

✅ **Already Complete:**
- PAUSE Foundation module created (serves as template)
- TrainingModuleEditor UI built
- Speechify API integrated
- S3 bucket configured for media storage
- MongoDB schemas for training modules

⚠️ **Need to Obtain:**
- Claude API key (sign up at https://console.anthropic.com)
- Verify Speechify API key is working

### Environment Variables

Add to `server/.env`:
```bash
# Claude AI
ANTHROPIC_API_KEY=sk-ant-api03-...

# Speechify (verify existing)
SPEECHIFY_API_KEY=...

# AWS S3 (verify existing)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
S3_BUCKET_NAME=threads-training-media
AWS_REGION=us-east-1
```

### NPM Packages

Install Claude SDK:
```bash
cd server
npm install @anthropic-ai/sdk
```

---

## Phase 1: Backend Foundation
**Duration:** 2-3 hours
**Files:** Service layer setup

### Step 1.1: Create SourceMaterialService

**File:** `server/src/training/source-material.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { readFile, writeFile, readdir } from 'fs/promises';
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
  async uploadCustomSource(name: string, markdown: string, description?: string): Promise<string> {
    const sourceId = name.toLowerCase().replace(/\s+/g, '-');
    const filename = `${sourceId}.md`;
    const customPath = join(this.sourceMaterialPath, 'custom');
    const filePath = join(customPath, filename);

    await writeFile(filePath, markdown, 'utf-8');

    return sourceId;
  }

  /**
   * List custom source materials
   */
  async listCustomSources() {
    const customPath = join(this.sourceMaterialPath, 'custom');
    const files = await readdir(customPath);

    return files
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        id: `custom-${f.replace('.md', '')}`,
        name: f.replace('.md', '').replace(/-/g, ' '),
        description: 'Custom uploaded source material'
      }));
  }
}
```

**Test it:**
```bash
cd server
npm run start:dev
```

Create a test script `server/test-source-materials.ts`:
```typescript
import { SourceMaterialService } from './src/training/source-material.service';

const service = new SourceMaterialService();

async function test() {
  const sources = await service.listSourceMaterials();
  console.log('Available sources:', sources);
}

test();
```

---

### Step 1.2: Enhance S3Service

**File:** `server/src/services/s3.service.ts` (may already exist)

If it doesn't exist, create it:

```typescript
import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  private bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }
    });
    this.bucketName = process.env.S3_BUCKET_NAME;
  }

  /**
   * Upload audio file to S3
   */
  async uploadAudio(buffer: Buffer, key: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: buffer,
      ContentType: 'audio/mpeg',
      ACL: 'public-read' // Or use CloudFront
    });

    await this.s3Client.send(command);

    return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }

  /**
   * Upload image to S3
   */
  async uploadImage(buffer: Buffer, key: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: buffer,
      ContentType: 'image/png',
      ACL: 'public-read'
    });

    await this.s3Client.send(command);

    return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }
}
```

---

### Step 1.3: Register Services in Training Module

**File:** `server/src/training/training.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { TrainingAdminController } from './training-admin.controller';
import { ModuleGeneratorService } from './module-generator.service';
import { SourceMaterialService } from './source-material.service';
import { TrainingModule as TrainingModuleSchema, TrainingModuleSchema as Schema } from './schemas/training-module.schema';
import { SpeechifyService } from '../services/speechify.service';
import { S3Service } from '../services/s3.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrainingModuleSchema.name, schema: Schema }
    ])
  ],
  controllers: [TrainingController, TrainingAdminController],
  providers: [
    TrainingService,
    ModuleGeneratorService,
    SourceMaterialService,
    SpeechifyService,
    S3Service
  ],
  exports: [TrainingService, ModuleGeneratorService]
})
export class TrainingModule {}
```

---

## Phase 2: Source Material System
**Duration:** 2 hours
**Files:** Markdown source files

### Step 2.1: Create Directory Structure

```bash
cd server
mkdir -p training-source-materials/custom
mkdir -p training-source-materials/examples
```

### Step 2.2: Create Example Source Material

**File:** `server/training-source-materials/core-threads-framework.md`

```markdown
# Core 7 Threads Framework

## Overview
The 7 Threads framework provides a developmental approach to building capacity for holding complexity. Each thread represents a fundamental tension that, when held rather than collapsed, enables greater wisdom and responsiveness.

## The 7 Threads

### PRESENCE: Where Am I?
**Core Tension:** Isolation ←→ Enmeshment
**Capacity:** Staying present to self AND other without losing either
**Collapse Patterns:**
- Isolation: Disconnecting, walls up, self-protection
- Enmeshment: Losing self in other, over-empathy, boundary loss

### CONSENT: May I? Will You?
**Core Tension:** Controlling ←→ Appeasing
**Capacity:** Honoring both autonomy and connection
**Collapse Patterns:**
- Controlling: Forcing, manipulating, boundary violations
- Appeasing: Over-accommodating, saying yes when meaning no

### MEMORY: Who Have We Been?
**Core Tension:** Past ←→ Future
**Capacity:** Learning from history without being trapped by it
**Collapse Patterns:**
- Past: Stuck in what was, unable to move forward
- Future: Bypassing history, repeating patterns unknowingly

### PAUSE: When Can I...?
**Core Tension:** More vs. Enough, Not Yet vs. Now
**Capacity:** Creating gap between trigger and response
**Collapse Patterns:**
- Impulsive (Now + More): Reacting without thinking
- Procrastination (Not Yet + More): Endless delay

### EMBODIMENT: What Does My Body Know?
**Core Tension:** Disembodied ←→ Overwhelmed
**Capacity:** Accessing somatic wisdom without flooding
**Collapse Patterns:**
- Disembodied: Cut off from body, intellectualized
- Overwhelmed: Flooded by sensations, unable to function

### UNCERTAINTY: How Do I Not Know?
**Core Tension:** Certainty ←→ Chaos
**Capacity:** Sitting with unknowing as generative space
**Collapse Patterns:**
- Certainty: Rigid knowing, unable to learn, dogmatic
- Chaos: Paralyzed by options, analysis paralysis

### BECOMING: Who Am I Becoming?
**Core Tension:** Regression ←→ Bypass
**Capacity:** Honoring development while aspiring forward
**Collapse Patterns:**
- Regression: Collapsing to earlier development
- Bypass: Spiritual bypassing, premature transcendence

## Capacity Building Approach

### Foundation Tier (0-25%)
Focus: Basic awareness, recognition, definitions
Goal: Can identify thread and recognize collapse
Practice: Simple noticing exercises

### Building Tier (26-50%)
Focus: Skill development, pattern interruption
Goal: Can create pause, choose alternative responses
Practice: HOLD practice application

### Deepening Tier (51-75%)
Focus: Nuance, complexity, integration
Goal: Can hold both poles simultaneously
Practice: Advanced navigation, teaching others

### Mastery Tier (76-100%)
Focus: Systems thinking, facilitating for others
Goal: Can model capacity, support collective holding
Practice: Facilitation, community building

## Key Practices

### HOLD Framework
- **H**alt: Create the pause
- **O**bserve: Notice sensations, thoughts, urges
- **L**ook: See both poles of tension
- **D**ecide: Choose response from capacity

### Somatic Awareness
- Body scanning
- Breath work
- Sensation tracking
- Grounding techniques

### Reflective Practice
- Journaling collapse patterns
- Identifying triggers
- Tracking capacity growth
- Celebrating expansion

## Context Applications

### Work/Professional
- High-stakes decisions
- Difficult conversations
- Team dynamics
- Leadership challenges

### Family/Relationships
- Partner conflicts
- Parenting moments
- Extended family tensions
- Boundary negotiations

### Community/Social
- Political discussions
- Social justice work
- Community organizing
- Group facilitation

### Online/Digital
- Social media reactivity
- Email communication
- Online debates
- Digital boundary setting

## Learning Objectives

By engaging with thread capacity training, participants will be able to:

1. **Recognize** their unique collapse patterns across all 7 threads
2. **Identify** triggers that lead to collapse in different contexts
3. **Practice** creating pause between trigger and response
4. **Hold** both poles of thread tensions simultaneously
5. **Navigate** complexity without defaulting to collapse
6. **Integrate** thread awareness across life domains
7. **Support** others in building their own capacity
8. **Model** capacity holding in community contexts
```

Create similar files for other frameworks (SAFE, educators, etc.) or leave as placeholders for now.

### Step 2.3: Export PAUSE Foundation as Template

**File:** `server/training-source-materials/examples/pause-foundation-complete.md`

Export the existing PAUSE Foundation module to this file. You can do this manually or with a script:

```typescript
// server/scripts/export-pause-foundation.ts
import { MongoClient } from 'mongodb';
import { writeFile } from 'fs/promises';

async function exportPauseFoundation() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const module = await db.collection('trainingmodules').findOne({
    id: 'pause-foundation-module'
  });

  await writeFile(
    'training-source-materials/examples/pause-foundation-complete.md',
    JSON.stringify(module, null, 2),
    'utf-8'
  );

  console.log('PAUSE Foundation exported successfully');
  await client.close();
}

exportPauseFoundation();
```

---

## Phase 3: Claude Integration
**Duration:** 4-5 hours
**Files:** Module generator service

### Step 3.1: Create ModuleGeneratorService

**File:** `server/src/training/module-generator.service.ts`

(See full implementation in PLATFORM-TECHNICAL-SPEC.md, lines 1312-1603)

Key methods to implement:
1. `generateModuleFromSource()` - Main generation method
2. `generateWithClaude()` - Claude API call
3. `buildModuleGenerationPrompt()` - Prompt construction
4. `parseModuleResponse()` - JSON parsing
5. `loadPauseFoundationTemplate()` - Template loading
6. `batchGenerate()` - Batch generation
7. `calculateGenerationCost()` - Cost tracking

**Start with a minimal implementation:**

```typescript
import { Injectable } from '@nestjs/common';
import Anthropic from '@anthropic-ai/sdk';

@Injectable()
export class ModuleGeneratorService {
  private anthropic: Anthropic;

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });
  }

  async testClaudeConnection(): Promise<string> {
    const message = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: 'Say "Connection successful!" if you can read this.'
        }
      ]
    });

    return message.content[0].text;
  }
}
```

**Test it:**
```typescript
// In your controller or test script
const result = await moduleGeneratorService.testClaudeConnection();
console.log(result); // Should print "Connection successful!"
```

Once working, implement full methods.

### Step 3.2: Create Admin Controller Endpoints

**File:** `server/src/training/training-admin.controller.ts`

```typescript
import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ModuleGeneratorService } from './module-generator.service';
import { SourceMaterialService } from './source-material.service';

@Controller('api/admin/training')
@UseGuards(JwtAuthGuard) // Add admin role guard if you have one
export class TrainingAdminController {
  constructor(
    private moduleGeneratorService: ModuleGeneratorService,
    private sourceMaterialService: SourceMaterialService
  ) {}

  @Get('source-materials')
  async listSourceMaterials() {
    return this.sourceMaterialService.listSourceMaterials();
  }

  @Post('upload-source')
  async uploadSource(@Body() body: { name: string; markdown: string; description?: string }) {
    const sourceId = await this.sourceMaterialService.uploadCustomSource(
      body.name,
      body.markdown,
      body.description
    );
    return { sourceId };
  }

  @Post('generate-module')
  async generateModule(@Body() body: {
    sourceId: string;
    thread?: string;
    tier?: string;
    customSourceMarkdown?: string;
  }) {
    const module = await this.moduleGeneratorService.generateModuleFromSource(body);

    return {
      module,
      generatedAt: new Date(),
      costBreakdown: {
        llm: 0.08,
        audio: 1.50,
        total: 1.58
      }
    };
  }

  @Post('batch-generate')
  async batchGenerate(@Body() body: {
    sourceId: string;
    modules: Array<{ thread: string; tier: string }>;
  }) {
    const result = await this.moduleGeneratorService.batchGenerate(
      body.sourceId,
      body.modules
    );

    return result;
  }
}
```

---

## Phase 4: Admin UI
**Duration:** 3-4 hours
**Files:** React component

### Step 4.1: Create ModuleGenerationHub Component

**File:** `client/src/pages/ModuleGenerationHub.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import styles from './ModuleGenerationHub.module.css';

interface SourceMaterial {
  id: string;
  name: string;
  description: string;
}

export default function ModuleGenerationHub() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sources, setSources] = useState<SourceMaterial[]>([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedThread, setSelectedThread] = useState('');
  const [selectedTier, setSelectedTier] = useState('foundation');
  const [customMarkdown, setCustomMarkdown] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState('');
  const [generatedModuleId, setGeneratedModuleId] = useState('');

  const threads = [
    'presence', 'consent', 'memory', 'pause',
    'embodiment', 'uncertainty', 'becoming'
  ];

  const tiers = [
    { value: 'foundation', label: 'Foundation (0-25%)', description: 'Basic awareness and recognition' },
    { value: 'building', label: 'Building (26-50%)', description: 'Skill development and practice' },
    { value: 'deepening', label: 'Deepening (51-75%)', description: 'Nuance and integration' },
    { value: 'mastery', label: 'Mastery (76-100%)', description: 'Teaching and facilitation' }
  ];

  useEffect(() => {
    fetchSources();
  }, []);

  async function fetchSources() {
    const response = await api.get('/api/admin/training/source-materials');
    setSources(response.data);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    setGenerationProgress('Loading source material...');

    try {
      const response = await api.post('/api/admin/training/generate-module', {
        sourceId: selectedSource,
        thread: selectedThread,
        tier: selectedTier,
        customSourceMarkdown: selectedSource === 'custom' ? customMarkdown : null
      });

      setGeneratedModuleId(response.data.module.id);
      setGenerationProgress('Module generated successfully!');

      // Navigate to editor after short delay
      setTimeout(() => {
        navigate(`/admin/training/module/${response.data.module.id}/edit`);
      }, 2000);

    } catch (error) {
      console.error('Generation failed:', error);
      setGenerationProgress(`Error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleBatchGenerate() {
    setIsGenerating(true);
    setGenerationProgress('Generating all 7 thread modules...');

    try {
      const modules = threads.map(thread => ({
        thread,
        tier: selectedTier
      }));

      const response = await api.post('/api/admin/training/batch-generate', {
        sourceId: selectedSource,
        modules
      });

      setGenerationProgress(`Generated ${response.data.modules.length} modules!`);

    } catch (error) {
      console.error('Batch generation failed:', error);
      setGenerationProgress(`Error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Module Generation Hub</h1>
      <p className={styles.subtitle}>
        Generate training modules using Claude AI + Speechify
      </p>

      {step === 1 && (
        <div className={styles.step}>
          <h2>Step 1: Select Source Material</h2>
          <div className={styles.sourceList}>
            {sources.map(source => (
              <div
                key={source.id}
                className={`${styles.sourceCard} ${selectedSource === source.id ? styles.selected : ''}`}
                onClick={() => setSelectedSource(source.id)}
              >
                <h3>{source.name}</h3>
                <p>{source.description}</p>
              </div>
            ))}
            <div
              className={`${styles.sourceCard} ${selectedSource === 'custom' ? styles.selected : ''}`}
              onClick={() => setSelectedSource('custom')}
            >
              <h3>Custom (Upload Markdown)</h3>
              <p>Upload your own source material as markdown</p>
            </div>
          </div>

          {selectedSource === 'custom' && (
            <div className={styles.customUpload}>
              <label>Paste Markdown Source:</label>
              <textarea
                value={customMarkdown}
                onChange={(e) => setCustomMarkdown(e.target.value)}
                placeholder="# Framework Name&#10;&#10;## Overview&#10;..."
                rows={15}
              />
            </div>
          )}

          <button
            className={styles.nextButton}
            disabled={!selectedSource || (selectedSource === 'custom' && !customMarkdown)}
            onClick={() => setStep(2)}
          >
            Next: Select Thread
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h2>Step 2: Select Thread/Module Focus</h2>
          <p className={styles.note}>
            {selectedSource === 'core-threads'
              ? 'Select which thread to create a module for'
              : 'Select thread focus if applicable, or leave blank for framework-specific module'}
          </p>
          <select
            value={selectedThread}
            onChange={(e) => setSelectedThread(e.target.value)}
          >
            <option value="">-- Optional --</option>
            {threads.map(thread => (
              <option key={thread} value={thread}>
                {thread.toUpperCase()}
              </option>
            ))}
          </select>

          <div className={styles.navigation}>
            <button onClick={() => setStep(1)}>Back</button>
            <button onClick={() => setStep(3)}>Next: Select Tier</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h2>Step 3: Select Capacity Tier</h2>
          <div className={styles.tierList}>
            {tiers.map(tier => (
              <div
                key={tier.value}
                className={`${styles.tierCard} ${selectedTier === tier.value ? styles.selected : ''}`}
                onClick={() => setSelectedTier(tier.value)}
              >
                <h3>{tier.label}</h3>
                <p>{tier.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.navigation}>
            <button onClick={() => setStep(2)}>Back</button>
            <button onClick={() => setStep(4)}>Next: Generate</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={styles.step}>
          <h2>Step 4: Generate Module</h2>

          <div className={styles.summary}>
            <h3>Configuration Summary</h3>
            <p><strong>Source:</strong> {sources.find(s => s.id === selectedSource)?.name || 'Custom'}</p>
            <p><strong>Thread:</strong> {selectedThread || 'Auto-detect from source'}</p>
            <p><strong>Tier:</strong> {selectedTier}</p>
            <p><strong>Estimated Cost:</strong> $1.58</p>
            <p><strong>Estimated Time:</strong> 30 seconds</p>
          </div>

          {!isGenerating && !generatedModuleId && (
            <div className={styles.actions}>
              <button
                className={styles.generateButton}
                onClick={handleGenerate}
              >
                Generate Module
              </button>

              {selectedSource === 'core-threads' && !selectedThread && (
                <button
                  className={styles.batchButton}
                  onClick={handleBatchGenerate}
                >
                  Batch Generate: All 7 Threads at {selectedTier} tier
                  <span className={styles.batchCost}>($11.06 total)</span>
                </button>
              )}
            </div>
          )}

          {isGenerating && (
            <div className={styles.progress}>
              <div className={styles.spinner}></div>
              <p>{generationProgress}</p>
            </div>
          )}

          {generatedModuleId && (
            <div className={styles.success}>
              <p>✓ {generationProgress}</p>
              <button onClick={() => navigate(`/admin/training/module/${generatedModuleId}/edit`)}>
                Open in Editor
              </button>
              <button onClick={() => {
                setStep(1);
                setGeneratedModuleId('');
                setGenerationProgress('');
              }}>
                Generate Another Module
              </button>
            </div>
          )}

          <div className={styles.navigation}>
            <button onClick={() => setStep(3)} disabled={isGenerating}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Step 4.2: Create Styles

**File:** `client/src/pages/ModuleGenerationHub.module.css`

```css
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
}

.subtitle {
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.step {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.sourceList,
.tierList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.sourceCard,
.tierCard {
  padding: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.sourceCard:hover,
.tierCard:hover {
  border-color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.sourceCard.selected,
.tierCard.selected {
  border-color: var(--primary-color);
  background: var(--primary-light);
}

.sourceCard h3,
.tierCard h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
}

.sourceCard p,
.tierCard p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.customUpload {
  margin-top: 1.5rem;
}

.customUpload textarea {
  width: 100%;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  resize: vertical;
}

.navigation {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.nextButton,
.generateButton,
.batchButton {
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.nextButton:hover,
.generateButton:hover,
.batchButton:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.nextButton:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.batchButton {
  background: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.batchCost {
  font-size: 0.85rem;
  opacity: 0.9;
}

.summary {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.summary h3 {
  margin-top: 0;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.success {
  text-align: center;
  padding: 2rem;
}

.success p {
  font-size: 1.2rem;
  color: green;
  margin-bottom: 1.5rem;
}

.note {
  color: var(--text-muted);
  font-style: italic;
  margin-bottom: 1rem;
}
```

### Step 4.3: Add Route

**File:** `client/src/App.tsx`

Add route:
```typescript
<Route path="/admin/training/generate" element={<ModuleGenerationHub />} />
```

---

## Phase 5: Testing & Refinement
**Duration:** 2-3 hours
**Activities:** End-to-end testing

### Test Plan

1. **Test Source Material Loading**
   - Verify all built-in sources load correctly
   - Test custom markdown upload
   - Check error handling for missing files

2. **Test Claude Generation**
   - Generate single module
   - Verify JSON structure
   - Check timing notation in meditation
   - Validate all required fields present

3. **Test Speechify Integration**
   - Verify audio generation for meditation
   - Check slide narration generation
   - Test error handling

4. **Test S3 Upload**
   - Verify media uploads to S3
   - Check URLs are accessible
   - Test public access permissions

5. **Test Batch Generation**
   - Generate all 7 threads at foundation tier
   - Verify all complete successfully
   - Check cost calculation

6. **Test UI Flow**
   - Navigate through all wizard steps
   - Test back navigation
   - Verify validation works
   - Check progress indicators

7. **Test Editor Integration**
   - Open generated module in TrainingModuleEditor
   - Make edits
   - Publish module
   - Verify accessible to users

### Success Criteria

✅ Single module generates in ~30 seconds
✅ All module components present (slides, meditation, exercises, etc.)
✅ Audio files uploaded to S3 and accessible
✅ Module saved as draft in database
✅ Module opens in editor without errors
✅ Batch generation completes all 7 modules
✅ Cost calculated correctly
✅ No errors in console

---

## Phase 6: Production Deployment
**Duration:** 1 hour
**Activities:** Deploy and monitor

### Deployment Checklist

1. **Environment Variables**
   - [ ] Add ANTHROPIC_API_KEY to production env
   - [ ] Verify SPEECHIFY_API_KEY is set
   - [ ] Check AWS credentials are correct
   - [ ] Confirm S3_BUCKET_NAME is correct

2. **Code Deployment**
   - [ ] Merge feature branch to main
   - [ ] Wait for auto-deploy (Amplify + App Runner)
   - [ ] Verify deployment succeeded

3. **Database**
   - [ ] No migrations needed (uses existing schemas)
   - [ ] Verify MongoDB connection works

4. **Source Materials**
   - [ ] Create training-source-materials/ directory on server
   - [ ] Upload all source markdown files
   - [ ] Set correct file permissions

5. **Testing in Production**
   - [ ] Generate test module
   - [ ] Verify all steps work
   - [ ] Check costs are tracking correctly
   - [ ] Monitor logs for errors

6. **Monitoring**
   - [ ] Set up CloudWatch alerts for generation failures
   - [ ] Monitor Claude API usage
   - [ ] Track Speechify costs
   - [ ] Monitor S3 storage growth

---

## Post-Launch: Content Generation
**Duration:** 3 weeks
**Activities:** Generate all 36 modules

### Week 1: Foundation Tier (7 modules)

**Day 1: Batch Generate**
```
Source: core-threads
Threads: All 7
Tier: Foundation
Time: ~3.5 minutes generation
Cost: $11.06
```

**Days 2-3: Review & Edit**
- Review each module in editor
- Check conceptual accuracy
- Verify tone and language
- Make necessary edits
- Publish approved modules

### Week 2: Building Tier (7 modules)

Repeat same process for building tier

### Week 3: Pattern Modules (8 modules)

**Option 1:** Batch generate using core-threads source
**Option 2:** Create pattern-specific source materials first

### Week 4-5: Deepening & Mastery (14 modules)

Generate and review remaining tiers

### Final Status
- 36 modules complete
- Total generation cost: ~$57
- Total review time: ~36 hours
- All modules published and live

---

## Troubleshooting

### Issue: Claude API Timeout

**Symptoms:** Request times out after 60 seconds

**Solution:**
- Increase timeout in Anthropic SDK config
- Simplify prompt if too long
- Reduce max_tokens if response too large

### Issue: Speechify Fails

**Symptoms:** Audio generation returns error

**Solution:**
- Check API key is valid
- Verify text doesn't contain invalid characters
- Try shorter audio segments
- Check rate limits

### Issue: Module JSON Parse Error

**Symptoms:** Can't parse Claude's response

**Solution:**
- Improve prompt to emphasize JSON-only output
- Add retry logic with adjusted prompt
- Log raw response for debugging

### Issue: S3 Upload Fails

**Symptoms:** Media doesn't upload

**Solution:**
- Check AWS credentials
- Verify bucket permissions
- Check network connectivity
- Retry with exponential backoff

---

## Cost Tracking

### Development Costs
- Developer time: 10-15 hours @ $50/hr = $500-750
- Claude API testing: ~$5
- Speechify testing: ~$10
- **Total:** ~$515-765

### Production Costs (36 modules)
- Claude API: 36 × $0.08 = $2.88
- Speechify: 36 × $1.50 = $54
- S3 storage: ~$1/month
- **Total:** ~$57

### ROI Calculation
- Manual creation cost: $90,000 (1,800 hours @ $50/hr)
- Automated creation cost: $1,857 (36 hours @ $50/hr + $57 generation)
- **Savings: $88,143 (98% reduction)**
- **Time saved: 1,764 hours**

---

## Success Metrics

### Technical Metrics
- ✅ Module generation time: < 60 seconds
- ✅ Generation success rate: > 95%
- ✅ Audio generation success rate: > 95%
- ✅ S3 upload success rate: > 99%
- ✅ Average module quality score: 4/5 (after review)

### Business Metrics
- ✅ Time to create 36 modules: < 6 weeks (vs. 16 months)
- ✅ Cost per module: < $2 (vs. $2,500)
- ✅ Platform launch timeline: Accelerated by 14 months
- ✅ Ability to create new frameworks: < 1 week per framework

---

## Next Steps After Launch

1. **Create Additional Frameworks**
   - S.A.F.E. modules (4 tiers)
   - For Educators modules (4 tiers)
   - RECKON modules
   - HOLD Practice modules

2. **Optimize Generation**
   - Fine-tune prompts based on results
   - Reduce costs if possible
   - Improve quality metrics
   - Add more automation

3. **Expand Capabilities**
   - Auto-generate slide images (DALL-E integration)
   - A/B test different meditation scripts
   - Personalize modules for users (Professional tier)
   - Create module variations

4. **Scale Infrastructure**
   - Add caching for generated modules
   - Implement queue system for batch jobs
   - Add monitoring dashboard
   - Create admin analytics

---

**Document Status:** Complete implementation guide
**Last Updated:** December 27, 2025
**Related Documents:**
- [PLATFORM-TECHNICAL-SPEC.md](PLATFORM-TECHNICAL-SPEC.md) - Technical implementation details
- [TRAINING-SYSTEM-DESIGN.md](TRAINING-SYSTEM-DESIGN.md) - Content design philosophy
- [IMPLEMENTATION-STATUS.md](IMPLEMENTATION-STATUS.md) - Current project status
