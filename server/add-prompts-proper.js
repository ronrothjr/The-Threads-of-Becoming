const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

// Import the actual schema
const { SchemaFactory } = require('@nestjs/mongoose');

// Define inline to match the server schema exactly
const AudioContentSchema = new mongoose.Schema({
  text: String,
  voiceId: String,
  speed: Number,
  model: String,
  audioUrl: String,
  duration: Number,
  generatedAt: Date,
  charactersUsed: Number
}, { _id: false });

const WritingPromptSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  type: String,
  suggestedDuration: Number,
  guidance: String
}, { _id: false });

const KnowledgeCheckSchema = new mongoose.Schema({
  type: { type: String, required: true },
  question: { type: String, required: true },
  scenario: String,
  options: [Object]
}, { _id: false });

const TrainingModuleSchema = new mongoose.Schema({
  moduleId: { type: String, required: true, unique: true },
  thread: { type: String, required: true },
  tier: { type: String, required: true },
  title: { type: String, required: true },
  seedQuestion: { type: String, required: true },
  tensions: Object,
  quadrants: [Object],
  collapsePatterns: [Object],
  learningObjectives: [String],
  milestones: [Object],
  slides: [Object],
  meditations: [Object],
  exercises: [Object],
  writingPrompts: [WritingPromptSchema],
  knowledgeChecks: [KnowledgeCheckSchema],
  practiceAssignments: [Object],
  estimatedDuration: Number,
  sessionStructure: Object,
  published: Boolean,
  version: String,
  author: String,
  tags: [String]
}, { timestamps: true });

const TrainingModule = mongoose.model('TrainingModule', TrainingModuleSchema, 'trainingmodules');

async function addWritingPrompts() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');
    console.log('Current writingPrompts:', module.writingPrompts);

    // Foundation-level writing prompts for PAUSE
    const writingPrompts = [
      {
        prompt: 'Where did I notice the tension between pausing and reacting today?',
        type: 'reflection',
        suggestedDuration: 5,
        guidance: 'Think about specific moments today when you felt pulled to react immediately. What was happening? What did you do?'
      },
      {
        prompt: 'Which pole do I usually collapse toward—rushing to react or avoiding/freezing?',
        type: 'exploration',
        suggestedDuration: 7,
        guidance: 'Reflect on your typical patterns. Do you tend to jump into action without thinking, or do you tend to shut down and avoid? Are there specific situations where you do one or the other?'
      },
      {
        prompt: 'Describe a recent situation where I paused before responding. What made that possible?',
        type: 'application',
        suggestedDuration: 5,
        guidance: 'Recall a specific moment when you successfully created space between stimulus and response. What conditions helped you pause? What did you notice?'
      },
      {
        prompt: 'What am I learning about my relationship with reactivity and pause?',
        type: 'integration',
        suggestedDuration: 10,
        guidance: 'Looking back over your practice this week, what patterns are emerging? What are you discovering about yourself? What questions are arising?'
      }
    ];

    module.writingPrompts = writingPrompts;
    const saved = await module.save();

    console.log('✓ Saved with prompts');
    
    // Verify by re-fetching
    const verified = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    console.log('Verified writingPrompts count:', verified.writingPrompts?.length || 0);
    if (verified.writingPrompts?.length > 0) {
      console.log('First prompt:', verified.writingPrompts[0].prompt);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addWritingPrompts();
