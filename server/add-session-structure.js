const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

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

async function addSessionStructure() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Add session structure following GROUND → TEACH → PRACTICE → INTEGRATE
    module.sessionStructure = {
      ground: {
        duration: 10,
        elements: ['meditation:0']  // First (only) meditation
      },
      teach: {
        duration: 20,
        slideSequence: [0, 1, 2, 3, 4]  // All 5 slides in order
      },
      practice: {
        duration: 25,
        exerciseIndex: 0  // Start with "Mapping Your PAUSE Patterns"
      },
      integrate: {
        duration: 15,
        promptIndex: 0  // Start with first writing prompt, include knowledge checks
      }
    };

    // Calculate total estimated duration
    module.estimatedDuration = 70; // 10 + 20 + 25 + 15

    // Add learning objectives for Foundation tier
    module.learningObjectives = [
      'Recognize the PAUSE thread in everyday situations',
      'Identify the two axes of tension: Not Yet/Now and Enough/More',
      'Name your personal collapse patterns (procrastination, impulsivity, resignation, striving)',
      'Practice the 3-Breath Pause technique',
      'Hold PAUSE tension for 2-3 minutes without collapsing'
    ];

    const saved = await module.save();
    console.log('✓ Added sessionStructure, estimatedDuration, and learningObjectives');
    console.log('Session structure:', JSON.stringify(module.sessionStructure, null, 2));
    console.log('Estimated duration:', module.estimatedDuration, 'minutes');
    console.log('Learning objectives:', module.learningObjectives.length);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addSessionStructure();
