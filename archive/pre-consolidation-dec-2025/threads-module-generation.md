These are already complete: Complete admin module editor UI, Integrate Speechify API. I want to fully automate the generation of modules within the already completed admin module UI. I want to integrate with Claude AI's API using my own personal account and provide what it needs to create the modules the same way we have here in Claude Code. Is that even possible?
Yes! Absolutely possible and actually brilliant - you can use Claude API to generate entire training modules automatically within your admin UI.
What You Have
✅ Admin module editor UI complete
✅ Speechify API integrated
✅ Claude Code conversation showing EXACTLY how to structure modules (the PAUSE Foundation example in TRAINING-SYSTEM-DESIGN.md)
What You Need to Build
1. Module Generation Service
// server/src/training/module-generator.service.ts

import Anthropic from '@anthropic-ai/sdk';

@Injectable()
export class ModuleGeneratorService {
  private anthropic: Anthropic;

  constructor(private speechifyService: SpeechifyService) {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY  // Your personal API key
    });
  }

  async generateCompleteModule(
    thread: string,
    tier: 'foundation' | 'building' | 'deepening' | 'mastery'
  ): Promise<TrainingModule> {
    
    // 1. Generate module structure with Claude
    const moduleContent = await this.generateModuleContent(thread, tier);
    
    // 2. Generate audio for meditation
    const meditationAudio = await this.speechifyService.generateAudio(
      moduleContent.meditation.script
    );
    
    // 3. Generate audio for slide narration
    const slideAudio = await Promise.all(
      moduleContent.slides.map(slide => 
        this.speechifyService.generateAudio(slide.narrationScript)
      )
    );
    
    // 4. Assemble complete module
    return {
      id: `${thread}-${tier}-module`,
      ...moduleContent,
      media: {
        meditationAudio: meditationAudio.url,
        slideAudio: slideAudio.map(a => a.url)
      }
    };
  }

  private async generateModuleContent(thread: string, tier: string) {
    const prompt = this.buildModuleGenerationPrompt(thread, tier);
    
    const message = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',  // Latest Sonnet
      max_tokens: 8000,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    // Parse Claude's response into structured module data
    return this.parseModuleResponse(message.content[0].text);
  }

  private buildModuleGenerationPrompt(thread: string, tier: string): string {
    // Load the PAUSE Foundation example from your docs as the template
    const exampleModule = this.loadExampleModule(); // From TRAINING-SYSTEM-DESIGN.md

    return `
You are an expert instructional designer creating thread capacity training modules.

TASK: Generate a complete training module for the ${thread.toUpperCase()} thread at the ${tier.toUpperCase()} tier.

Use this EXACT structure from our proven PAUSE Foundation module:

${exampleModule}

REQUIREMENTS:
1. Follow the exact same structure (slides, meditation, exercises, writing prompts, knowledge checks)
2. Maintain the same quality and pedagogical approach
3. Adapt content to ${thread} thread specifics:
   - Seed question
   - Tension poles
   - Collapse shadows
   - Capacity goals for ${tier} tier
4. Output as JSON with this structure:

{
  "title": "...",
  "description": "...",
  "estimatedDuration": 25,
  "slides": [
    {
      "slideNumber": 1,
      "title": "...",
      "visualDescription": "...",
      "narrationScript": "...",
      "narrationDuration": 30
    },
    // ... 5-7 slides
  ],
  "meditation": {
    "title": "...",
    "script": "... [use timing notation: [~], [~~], [~~~]]",
    "duration": 10
  },
  "exercises": [...],
  "writingPrompts": [
    "What did you notice during the practice?",
    "Where do you recognize this thread in your daily life?",
    "What surprised you about this thread?"
  ],
  "knowledgeCheck": {
    "questions": [
      {
        "question": "...",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "explanation": "..."
      }
      // 3 questions
    ],
    "passingScore": 60
  },
  "practiceAssignment": {
    "title": "...",
    "instructions": ["...", "...", "..."],
    "duration": "3-5 minutes daily for one week"
  }
}

THREAD-SPECIFIC DATA:
${this.getThreadData(thread)}

TIER-SPECIFIC FOCUS:
${this.getTierGuidance(tier)}

Generate the complete module now as valid JSON.
    `;
  }

  private getThreadData(thread: string): string {
    const threadData = {
      presence: {
        seedQuestion: "Where Am I?",
        poles: "Within ↔ Between • Here ↔ Elsewhere",
        collapseA: "Isolation (Within only, no Between)",
        collapseB: "Enmeshment (Between only, no Within)",
        // ... etc
      },
      consent: {
        seedQuestion: "May I / Will You?",
        poles: "Control ↔ Appease • Set ↔ Yield",
        collapseA: "Controlling",
        collapseB: "Appeasing",
      },
      // ... other threads
    };

    return JSON.stringify(threadData[thread], null, 2);
  }

  private getTierGuidance(tier: string): string {
    const tierGuidance = {
      foundation: {
        focus: "Basic awareness, definitions, simple recognition",
        teachPracticeRatio: "60% teach / 40% practice",
        complexity: "One new idea at a time, heavy scaffolding",
        languageExample: "Understanding [THREAD]: [Seed Question]"
      },
      building: {
        focus: "Skill development, pattern interruption, practice",
        teachPracticeRatio: "50% teach / 50% practice",
        complexity: "Multiple related concepts, moderate scaffolding",
        languageExample: "[THREAD]: Building Capacity"
      },
      // ... other tiers
    };

    return JSON.stringify(tierGuidance[tier], null, 2);
  }

  private parseModuleResponse(text: string): any {
    // Extract JSON from Claude's response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse module JSON from Claude response');
    }
    return JSON.parse(jsonMatch[0]);
  }
}
2. Admin UI Integration
// client/src/pages/TrainingModuleGenerator.tsx

export default function TrainingModuleGenerator() {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState('');

  const generateModule = async (thread: string, tier: string) => {
    setGenerating(true);
    setProgress('Generating module content with Claude AI...');

    try {
      // 1. Generate module structure
      const response = await fetch('/api/admin/training/generate-module', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thread, tier })
      });

      const { module } = await response.json();
      
      setProgress('Module generated! Review and publish.');
      
      // Open module in editor for review
      navigate(`/admin/training/module/${module.id}/edit`);
      
    } catch (error) {
      console.error('Generation failed:', error);
      setProgress('Generation failed. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="module-generator">
      <h1>Generate Training Module</h1>
      
      <div className="generator-grid">
        {['presence', 'consent', 'memory', 'pause', 'embodiment', 'uncertainty', 'becoming'].map(thread => (
          <div key={thread} className="thread-card">
            <h3>{thread.toUpperCase()}</h3>
            {['foundation', 'building', 'deepening', 'mastery'].map(tier => (
              <button
                key={tier}
                onClick={() => generateModule(thread, tier)}
                disabled={generating}
              >
                Generate {tier}
              </button>
            ))}
          </div>
        ))}
      </div>

      {generating && (
        <div className="progress-indicator">
          <Spinner />
          <p>{progress}</p>
        </div>
      )}
    </div>
  );
}
3. API Endpoint
// server/src/training/training-admin.controller.ts

@Post('admin/training/generate-module')
@UseGuards(JwtAuthGuard, AdminGuard)
async generateModule(@Body() body: { thread: string; tier: string }) {
  const module = await this.moduleGeneratorService.generateCompleteModule(
    body.thread,
    body.tier
  );

  // Save as draft for review
  await this.modulesService.create({
    ...module,
    status: 'draft',
    generatedBy: 'claude-api',
    generatedAt: new Date()
  });

  return { module };
}
Cost Analysis
Claude API Pricing:
Sonnet 3.5: $3/million input tokens, $15/million output tokens
Per module (~5K input + 4K output tokens): ~$0.08
36 modules: ~$2.88 total
Speechify Pricing:
~$1.50 per module for audio generation
36 modules: ~$54 total
Total to generate all 36 modules: ~$57
Workflow
Click "Generate" in Admin UI → Calls Claude API with thread/tier
Claude generates complete module → Returns JSON structure
Backend generates audio → Speechify creates meditation + slide narration
Saves as draft → You review in module editor
Make tweaks if needed → Edit in your existing UI
Click "Publish" → Module goes live
Advantages
✅ Consistency: Every module follows the proven PAUSE template ✅ Speed: Generate all 36 modules in hours, not months ✅ Quality: Claude has your exact specifications and example ✅ Cost-effective: ~$57 vs. months of manual work ✅ Iterative: Generate, review, regenerate if needed Should I create the complete implementation files for this?
This is good, but did you include the UI needed to initiate each module generation? And what Is I want to generate modules about new Threads and new Training Focus, like S.A.F.E., For Educators modules, or my Tier 1 Foundation training referenced in my  website? How can we provide source material in the form of markdown documents to become the source material for new training modules?
You're right - I need to show the complete UI for initiating generation AND make it flexible enough to handle new threads/focuses. Let me design a full system that can ingest markdown source material.
Complete Module Generation System
1. Full Admin UI for Module Generation
// client/src/pages/ModuleGenerationHub.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModuleGenerationHub() {
  const [selectedSource, setSelectedSource] = useState<string>('');
  const [selectedThread, setSelectedThread] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [customSource, setCustomSource] = useState<string>('');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState('');
  const navigate = useNavigate();

  // Available source materials
  const sourceMaterials = [
    { id: 'core-threads', name: 'Core 7 Threads', threads: ['presence', 'consent', 'memory', 'pause', 'embodiment', 'uncertainty', 'becoming'] },
    { id: 'safe', name: 'S.A.F.E. Framework', threads: ['safe-general'] },
    { id: 'educators', name: 'For Educators', threads: ['educator-specific'] },
    { id: 'tier1-foundation', name: 'Tier 1 Foundation Training', threads: ['tier1-modules'] },
    { id: 'reckon', name: 'RECKON Framework', threads: ['reckon-modules'] },
    { id: 'hold', name: 'HOLD Practice', threads: ['hold-practice'] },
    { id: 'custom', name: 'Custom (Upload Markdown)', threads: [] }
  ];

  const tiers = [
    { id: 'foundation', name: 'Foundation (0-25%)' },
    { id: 'building', name: 'Building (26-50%)' },
    { id: 'deepening', name: 'Deepening (51-75%)' },
    { id: 'mastery', name: 'Mastery (76-100%)' }
  ];

  const handleGenerateModule = async () => {
    setGenerating(true);
    setProgress('Preparing source material...');

    try {
      const payload = {
        sourceId: selectedSource,
        thread: selectedThread,
        tier: selectedTier,
        customSourceMarkdown: selectedSource === 'custom' ? customSource : null
      };

      setProgress('Generating module with Claude AI...');

      const response = await fetch('/api/admin/training/generate-module', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Generation failed');
      }

      const { module } = await response.json();
      
      setProgress('Generating audio with Speechify...');
      
      // Audio generation happens in background
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProgress('Module generated! Opening editor for review...');
      
      setTimeout(() => {
        navigate(`/admin/training/module/${module.id}/edit`);
      }, 1000);
      
    } catch (error) {
      console.error('Generation failed:', error);
      setProgress(`Error: ${error.message}`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="module-generation-hub">
      <header>
        <h1>Module Generation Hub</h1>
        <p>Use Claude AI to automatically generate training modules from source material</p>
      </header>

      <div className="generation-wizard">
        {/* Step 1: Select Source Material */}
        <section className="wizard-step">
          <h2>Step 1: Select Source Material</h2>
          <div className="source-grid">
            {sourceMaterials.map(source => (
              <div
                key={source.id}
                className={`source-card ${selectedSource === source.id ? 'selected' : ''}`}
                onClick={() => setSelectedSource(source.id)}
              >
                <h3>{source.name}</h3>
                {source.threads.length > 0 && (
                  <p className="thread-count">{source.threads.length} modules available</p>
                )}
              </div>
            ))}
          </div>

          {selectedSource === 'custom' && (
            <div className="custom-source-upload">
              <h3>Upload Custom Markdown</h3>
              <p>Paste markdown content describing your training framework, thread, or module focus:</p>
              <textarea
                value={customSource}
                onChange={(e) => setCustomSource(e.target.value)}
                placeholder="# My Custom Training Module&#10;&#10;## Overview&#10;This module teaches...&#10;&#10;## Core Concepts&#10;- Concept 1&#10;- Concept 2"
                rows={15}
                className="custom-source-textarea"
              />
              <p className="help-text">
                Or upload from file: <input type="file" accept=".md,.txt" onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => setCustomSource(event.target.result as string);
                    reader.readAsText(file);
                  }
                }} />
              </p>
            </div>
          )}
        </section>

        {/* Step 2: Select Thread/Module Focus */}
        {selectedSource && selectedSource !== 'custom' && (
          <section className="wizard-step">
            <h2>Step 2: Select Thread/Module Focus</h2>
            <div className="thread-grid">
              {sourceMaterials.find(s => s.id === selectedSource)?.threads.map(thread => (
                <button
                  key={thread}
                  className={`thread-button ${selectedThread === thread ? 'selected' : ''}`}
                  onClick={() => setSelectedThread(thread)}
                >
                  {thread.replace(/-/g, ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Select Tier (if applicable) */}
        {(selectedThread || selectedSource === 'custom') && selectedSource !== 'safe' && (
          <section className="wizard-step">
            <h2>Step 3: Select Capacity Tier</h2>
            <div className="tier-grid">
              {tiers.map(tier => (
                <button
                  key={tier.id}
                  className={`tier-button ${selectedTier === tier.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <strong>{tier.name}</strong>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 4: Generate */}
        {((selectedThread && selectedTier) || selectedSource === 'custom') && (
          <section className="wizard-step generate-section">
            <h2>Step 4: Generate Module</h2>
            
            <div className="generation-summary">
              <h3>Module to Generate:</h3>
              <ul>
                <li><strong>Source:</strong> {sourceMaterials.find(s => s.id === selectedSource)?.name}</li>
                {selectedThread && <li><strong>Thread/Focus:</strong> {selectedThread}</li>}
                {selectedTier && <li><strong>Tier:</strong> {selectedTier}</li>}
                <li><strong>Module ID:</strong> {selectedThread}-{selectedTier}-module</li>
              </ul>

              <p className="cost-estimate">
                <strong>Estimated Cost:</strong> ~$0.08 (Claude API) + ~$1.50 (Speechify) = ~$1.58
              </p>
            </div>

            <button
              onClick={handleGenerateModule}
              disabled={generating}
              className="generate-button"
            >
              {generating ? 'Generating...' : 'Generate Module with Claude AI'}
            </button>

            {generating && (
              <div className="progress-display">
                <div className="spinner"></div>
                <p>{progress}</p>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Batch Generation Option */}
      <section className="batch-generation">
        <h2>Batch Generation</h2>
        <p>Generate multiple modules at once:</p>
        
        <button 
          onClick={() => handleBatchGeneration('core-threads', 'foundation')}
          disabled={generating}
          className="batch-button"
        >
          Generate All Foundation Modules (7 modules, ~$11)
        </button>

        <button 
          onClick={() => handleBatchGeneration('core-threads', 'building')}
          disabled={generating}
          className="batch-button"
        >
          Generate All Building Modules (7 modules, ~$11)
        </button>
      </section>

      <style jsx>{`
        .module-generation-hub {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .wizard-step {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .source-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .source-card {
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .source-card:hover {
          border-color: #2C5F5D;
          box-shadow: 0 4px 12px rgba(44, 95, 93, 0.2);
        }

        .source-card.selected {
          border-color: #2C5F5D;
          background: rgba(44, 95, 93, 0.1);
        }

        .thread-grid, .tier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .thread-button, .tier-button {
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .thread-button:hover, .tier-button:hover {
          border-color: #2C5F5D;
        }

        .thread-button.selected, .tier-button.selected {
          border-color: #2C5F5D;
          background: rgba(44, 95, 93, 0.1);
        }

        .custom-source-textarea {
          width: 100%;
          font-family: 'Courier New', monospace;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .generate-button {
          background: #2C5F5D;
          color: white;
          padding: 1.5rem 3rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          margin-top: 1rem;
        }

        .generate-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .progress-display {
          text-align: center;
          margin-top: 2rem;
        }

        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #2C5F5D;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .batch-generation {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          margin-top: 3rem;
        }

        .batch-button {
          background: white;
          border: 2px solid #2C5F5D;
          color: #2C5F5D;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          margin-right: 1rem;
          margin-top: 1rem;
        }

        .batch-button:hover {
          background: #2C5F5D;
          color: white;
        }
      `}</style>
    </div>
  );
}
2. Source Material Manager (Backend)
// server/src/training/source-material.service.ts

import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SourceMaterialService {
  private sourceMaterialPath = join(process.cwd(), 'training-source-materials');

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
      throw new Error(`Unknown source: ${sourceId}`);
    }

    const filePath = join(this.sourceMaterialPath, filename);
    return await readFile(filePath, 'utf-8');
  }

  async saveCustomSource(userId: string, content: string): Promise<string> {
    // Save custom markdown to database for this user
    const sourceId = `custom-${userId}-${Date.now()}`;
    // ... save to database
    return sourceId;
  }
}
3. Updated Module Generator with Source Material Support
// server/src/training/module-generator.service.ts

import Anthropic from '@anthropic-ai/sdk';

@Injectable()
export class ModuleGeneratorService {
  private anthropic: Anthropic;

  constructor(
    private speechifyService: SpeechifyService,
    private sourceMaterialService: SourceMaterialService
  ) {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });
  }

  async generateModuleFromSource(request: {
    sourceId: string;
    thread?: string;
    tier?: string;
    customSourceMarkdown?: string;
  }): Promise<TrainingModule> {
    
    // 1. Load source material
    let sourceMaterial: string;
    
    if (request.customSourceMarkdown) {
      sourceMaterial = request.customSourceMarkdown;
    } else {
      sourceMaterial = await this.sourceMaterialService.loadSourceMaterial(request.sourceId);
    }

    // 2. Load example module template (PAUSE Foundation from docs)
    const exampleTemplate = await this.loadExampleTemplate();

    // 3. Generate module with Claude
    const moduleContent = await this.generateWithClaude(
      sourceMaterial,
      exampleTemplate,
      request.thread,
      request.tier
    );

    // 4. Generate audio
    const meditationAudio = await this.speechifyService.generateAudio(
      moduleContent.meditation.script,
      { voice: 'calm', speed: 0.9 }
    );

    const slideAudio = await Promise.all(
      moduleContent.slides.map(slide =>
        this.speechifyService.generateAudio(slide.narrationScript)
      )
    );

    // 5. Assemble final module
    return {
      ...moduleContent,
      id: `${request.thread || 'custom'}-${request.tier || 'general'}-module`,
      media: {
        meditationAudioUrl: meditationAudio.url,
        slideAudioUrls: slideAudio.map(a => a.url)
      },
      metadata: {
        generatedBy: 'claude-api',
        generatedAt: new Date(),
        sourceId: request.sourceId,
        claudeModel: 'claude-3-5-sonnet-20241022'
      }
    };
  }

  private async generateWithClaude(
    sourceMaterial: string,
    exampleTemplate: string,
    thread?: string,
    tier?: string
  ): Promise<any> {
    
    const prompt = `
You are an expert instructional designer creating transformative training modules.

YOUR TASK:
Create a complete training module based on the source material provided.

SOURCE MATERIAL TO USE:
${sourceMaterial}

EXAMPLE MODULE STRUCTURE (follow this EXACTLY):
${exampleTemplate}

${thread ? `THREAD FOCUS: ${thread.toUpperCase()}` : ''}
${tier ? `CAPACITY TIER: ${tier.toUpperCase()}` : ''}

REQUIREMENTS:
1. Extract key concepts, frameworks, and practices from the source material
2. Follow the EXACT structure of the example module:
   - 5-7 slides with narration
   - 10-minute guided meditation with timing notation [~], [~~], [~~~]
   - Interactive exercises
   - 3 writing prompts
   - 3-5 knowledge check questions
   - Practice assignment for real-world application

3. Maintain the same quality, depth, and pedagogical approach as the example
4. If tier is specified:
   - Foundation: Basic awareness, simple concepts, heavy teaching
   - Building: Skill development, pattern recognition, balanced
   - Deepening: Nuance, complexity, practice-heavy
   - Mastery: Teaching others, holding paradox, experiential

5. Output as valid JSON matching this structure:

{
  "title": "Module Title",
  "description": "Brief description",
  "estimatedDuration": 25,
  "slides": [
    {
      "slideNumber": 1,
      "title": "Slide Title",
      "visualDescription": "Description of what should be shown visually",
      "narrationScript": "What to say in the audio narration",
      "narrationDuration": 30
    }
  ],
  "meditation": {
    "title": "Meditation Title",
    "script": "Full meditation script with [~] timing notation",
    "duration": 10
  },
  "exercises": [
    {
      "title": "Exercise Title",
      "type": "exercise",
      "instructions": ["Step 1", "Step 2", "Step 3"],
      "duration": 5
    }
  ],
  "writingPrompts": [
    "Prompt 1",
    "Prompt 2",
    "Prompt 3"
  ],
  "knowledgeCheck": {
    "questions": [
      {
        "question": "Question text?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 0,
        "explanation": "Why this is correct..."
      }
    ],
    "passingScore": 60
  },
  "practiceAssignment": {
    "title": "Practice Assignment Title",
    "description": "What to practice",
    "instructions": ["Instruction 1", "Instruction 2"],
    "duration": "3-5 minutes daily"
  }
}

Generate the complete module now as valid JSON. ONLY output the JSON, no other text.
    `;

    const message = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 8000,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    // Parse JSON from response
    const responseText = message.content[0].text;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) {
      throw new Error('Failed to extract JSON from Claude response');
    }

    return JSON.parse(jsonMatch[0]);
  }

  private async loadExampleTemplate(): Promise<string> {
    // Load the PAUSE Foundation example from TRAINING-SYSTEM-DESIGN.md
    // Or store it as a separate file
    return `
## Sample Module: PAUSE Foundation

[Full PAUSE Foundation module text from your TRAINING-SYSTEM-DESIGN.md]
    `;
  }
}
4. File Structure for Source Materials
server/
└── training-source-materials/
    ├── core-threads-framework.md        # Your existing threads docs
    ├── SAFE-framework.md                 # S.A.F.E. content
    ├── for-educators.md                  # Educator-specific modules
    ├── tier-1-foundation-training.md     # Tier 1 from website
    ├── RECKON-framework.md               # RECKON content
    ├── HOLD-practice.md                  # HOLD practice content
    └── examples/
        └── pause-foundation-complete.md  # Your proven template
5. Example Source Material Format
<!-- server/training-source-materials/SAFE-framework.md -->

# S.A.F.E. Framework Training Module

## Overview
S.A.F.E. is a framework for addressing bullying and creating safer communities...

## Core Concepts

### S - See the Pattern
Description of recognizing bullying patterns...

### A - Acknowledge Impact
How to acknowledge harm without shame...

### F - Find Connection
Building bridges instead of walls...

### E - Emerge Together
Collective transformation...

## Key Practices
1. Practice 1 description
2. Practice 2 description

## Common Collapse Patterns
- Pattern 1: Righteous Reactor in bullying contexts
- Pattern 2: Frozen Deer when witnessing harm

## Guided Meditation Focus
Create a meditation that helps recognize bullying patterns without becoming reactive...

## Learning Objectives
By the end of this module, participants will be able to:
- Recognize bullying patterns in themselves and others
- Respond without shaming or collapsing
- Build connection across difference
How It Works
You drop markdown files into server/training-source-materials/
Admin UI shows all available sources
Click to select source → thread → tier
Claude reads the markdown + example template
Generates complete module in ~30 seconds
You review in editor and publish
Want me to create the actual implementation files you can copy-paste into your codebase?
