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

async function addSufficiencyCheck() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Add a new knowledge check about the Enough/More axis
    const newCheck = {
      type: 'collapse_recognition',
      question: 'Someone who constantly says "this is fine" but feels resentful and unfulfilled is likely experiencing:',
      scenario: '',
      options: [
        { 
          text: 'Resignation collapse (Enough pole) - settling to avoid disappointment or appearing greedy', 
          isCorrect: true, 
          feedback: 'Exactly! Resignation is the collapse toward "enough" - premature settling that protects against wanting more.' 
        },
        { 
          text: 'Striving collapse (More pole) - never satisfied with what they have', 
          isCorrect: false, 
          feedback: 'Actually, the opposite. Striving would be constantly pursuing more, not settling for "this is fine."' 
        },
        { 
          text: 'Procrastination collapse (Not Yet pole) - waiting instead of acting', 
          isCorrect: false, 
          feedback: 'This is about sufficiency (enough/more), not timing (not yet/now). They\'ve acted, but settled too soon.' 
        },
        { 
          text: 'Impulsivity collapse (Now pole) - rushing into action without reflection', 
          isCorrect: false, 
          feedback: 'This is about sufficiency (enough/more), not timing (not yet/now). The issue is settling, not rushing.' 
        }
      ]
    };

    // Insert after the second collapse recognition question
    module.knowledgeChecks.splice(2, 0, newCheck);

    const saved = await module.save();
    console.log('✓ Added knowledge check about Enough/More axis');
    console.log('Total knowledge checks:', module.knowledgeChecks.length);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addSufficiencyCheck();
