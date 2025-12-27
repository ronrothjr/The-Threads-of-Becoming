const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

// Use proper schema
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

async function fixKnowledgeChecks() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Foundation-level knowledge checks with proper options
    const knowledgeChecks = [
      {
        type: 'thread_identification',
        question: 'What are the two axes of tension in the PAUSE thread?',
        scenario: '',
        options: [
          { 
            text: 'Fast vs. Slow', 
            isCorrect: false, 
            feedback: 'Not quite. PAUSE is about timing and readiness, not just speed.' 
          },
          { 
            text: 'Not Yet vs. Now, and Enough vs. More', 
            isCorrect: true, 
            feedback: 'Correct! PAUSE holds the tension between timing (not yet/now) and sufficiency (enough/more).' 
          },
          { 
            text: 'Action vs. Inaction', 
            isCorrect: false, 
            feedback: 'Close, but this is too binary. PAUSE is about the quality of when and how much, not just whether.' 
          },
          { 
            text: 'Patience vs. Urgency', 
            isCorrect: false, 
            feedback: 'These are related to the poles, but not the fundamental axes. Look deeper.' 
          }
        ]
      },
      {
        type: 'collapse_recognition',
        question: 'Procrastination is best understood as:',
        scenario: '',
        options: [
          { 
            text: 'Laziness and poor time management', 
            isCorrect: false, 
            feedback: 'This is the common judgment, but misses the deeper pattern. Look at what procrastination protects against.' 
          },
          { 
            text: 'A collapse toward the "not yet" pole, often driven by fear', 
            isCorrect: true, 
            feedback: 'Yes! Procrastination is usually a protective collapse away from the risk/vulnerability of acting now.' 
          },
          { 
            text: 'A healthy form of waiting', 
            isCorrect: false, 
            feedback: 'Healthy waiting holds the tension consciously. Procrastination is an unconscious collapse.' 
          },
          { 
            text: 'The same as patience', 
            isCorrect: false, 
            feedback: 'Patience holds the tension. Procrastination collapses away from it.' 
          }
        ]
      },
      {
        type: 'capacity_assessment',
        question: 'The 3-Breath Pause practice is designed to:',
        scenario: '',
        options: [
          { 
            text: 'Suppress all impulses permanently', 
            isCorrect: false, 
            feedback: 'No - the practice isn\'t about suppression, but creating space for choice.' 
          },
          { 
            text: 'Create space between stimulus and response', 
            isCorrect: true, 
            feedback: 'Exactly! The pause creates the space where conscious choice becomes possible.' 
          },
          { 
            text: 'Make you slower at everything', 
            isCorrect: false, 
            feedback: 'Pausing isn\'t about being slow - it\'s about responding with awareness rather than reacting.' 
          },
          { 
            text: 'Eliminate urgency from your life', 
            isCorrect: false, 
            feedback: 'Urgency has its place. The practice helps you recognize when it\'s real vs. reactive.' 
          }
        ]
      },
      {
        type: 'practice_application',
        question: 'Impulsivity represents:',
        scenario: '',
        options: [
          { 
            text: 'Healthy spontaneity', 
            isCorrect: false, 
            feedback: 'Spontaneity can be healthy, but impulsivity is unconscious reactivity - different things.' 
          },
          { 
            text: 'The "now" collapse - constant urgency and inability to pause', 
            isCorrect: true, 
            feedback: 'Yes! Impulsivity collapses toward immediate action without space for consideration.' 
          },
          { 
            text: 'The same as being decisive', 
            isCorrect: false, 
            feedback: 'Being decisive includes conscious discernment. Impulsivity skips that step.' 
          },
          { 
            text: 'The opposite of procrastination, which means it\'s better', 
            isCorrect: false, 
            feedback: 'Both are collapses - neither holds the creative tension. Neither is better.' 
          }
        ]
      },
      {
        type: 'integration_understanding',
        question: 'The goal of PAUSE practice is to:',
        scenario: '',
        options: [
          { 
            text: 'Never feel urgency again', 
            isCorrect: false, 
            feedback: 'Urgency is part of life. The goal is to relate to it consciously, not eliminate it.' 
          },
          { 
            text: 'Always wait for perfect timing', 
            isCorrect: false, 
            feedback: 'Perfect timing is a myth. The practice is about being present with the tension, not finding perfection.' 
          },
          { 
            text: 'Hold the creative tension without collapsing', 
            isCorrect: true, 
            feedback: 'Exactly! The capacity to stay present with the tension between not yet/now and enough/more.' 
          },
          { 
            text: 'Eliminate the need for action', 
            isCorrect: false, 
            feedback: 'Action is essential. The practice helps you act from awareness rather than reaction.' 
          }
        ]
      }
    ];

    module.knowledgeChecks = knowledgeChecks;
    const saved = await module.save();

    console.log('✓ Updated knowledge checks with proper options and feedback');
    console.log(`  Updated ${knowledgeChecks.length} checks`);

    // Verify
    const verified = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    console.log('First check has', verified.knowledgeChecks[0].options.length, 'options');
    console.log('First option correct?', verified.knowledgeChecks[0].options[0].isCorrect);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

fixKnowledgeChecks();
