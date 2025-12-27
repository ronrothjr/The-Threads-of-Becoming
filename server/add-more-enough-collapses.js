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

async function addMoreEnoughCollapses() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Add all four collapse patterns (both axes)
    module.collapsePatterns = [
      {
        name: 'Procrastination',
        direction: 'Not Yet',
        description: 'Collapse toward perpetual waiting, unable to act',
        behavioralSigns: [
          'Chronic delay despite consequences',
          'Feeling paralyzed or frozen',
          'Endless preparation without action',
          'Fear of commitment or visibility'
        ],
        protectiveFunction: 'Protects against risk, vulnerability, judgment, or failure'
      },
      {
        name: 'Impulsivity',
        direction: 'Now',
        description: 'Collapse toward constant urgency, unable to pause',
        behavioralSigns: [
          'Acting before thinking',
          'Chronic sense of urgency',
          'Difficulty waiting or reflecting',
          'Reactive responses to situations'
        ],
        protectiveFunction: 'Protects against uncertainty, emptiness, or feeling stuck'
      },
      {
        name: 'Resignation',
        direction: 'Enough',
        description: 'Collapse toward settling, unable to reach or strive',
        behavioralSigns: [
          'Premature acceptance or giving up',
          'Suppressing legitimate desires',
          '"Good enough" as avoidance',
          'Fear of wanting or needing more'
        ],
        protectiveFunction: 'Protects against disappointment, appearing greedy, or destabilizing what exists'
      },
      {
        name: 'Striving',
        direction: 'More',
        description: 'Collapse toward insatiable accumulation, never enough',
        behavioralSigns: [
          'Chronic dissatisfaction',
          'Moving goalposts',
          'Unable to rest or celebrate',
          'Perpetual sense of scarcity'
        ],
        protectiveFunction: 'Protects against vulnerability of satisfaction, fear of stagnation, or facing emptiness'
      }
    ];

    const saved = await module.save();
    console.log('✓ Updated collapse patterns to include all four');
    console.log('Collapse Patterns:');
    module.collapsePatterns.forEach(cp => {
      console.log(`  - ${cp.name} (${cp.direction}): ${cp.description}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addMoreEnoughCollapses();
