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

async function addTensionsStructure() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Add the tensions structure
    module.tensions = {
      axis1: { 
        pole1: 'Not Yet', 
        pole2: 'Now' 
      },
      axis2: { 
        pole1: 'Enough', 
        pole2: 'More' 
      }
    };

    // Add quadrants
    module.quadrants = [
      {
        name: 'Sacred Pause',
        description: 'Not yet + Enough - Trusting timing from a place of sufficiency',
        examples: ['Waiting for the right moment', 'Trusting the process', 'Patient discernment']
      },
      {
        name: 'Right Action',
        description: 'Now + Enough - Acting from fullness without urgency',
        examples: ['Decisive action', 'Present responsiveness', 'Confident engagement']
      },
      {
        name: 'Impatient Grasping',
        description: 'Not yet + More - Wanting but not acting, scarcity-driven waiting',
        examples: ['Waiting for perfect conditions', 'Accumulating before acting', 'Fear-based delay']
      },
      {
        name: 'Urgency & Striving',
        description: 'Now + More - Reactive action driven by scarcity',
        examples: ['Constant urgency', 'Never enough time', 'Frantic doing']
      }
    ];

    // Add collapse patterns
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
      }
    ];

    const saved = await module.save();
    console.log('✓ Added tensions structure, quadrants, and collapse patterns');
    console.log('Tensions:', module.tensions);
    console.log('Quadrants:', module.quadrants.length);
    console.log('Collapse Patterns:', module.collapsePatterns.length);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addTensionsStructure();
