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

async function fixFirstQuestion() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Fix the first knowledge check to have all answers with two axes
    module.knowledgeChecks[0] = {
      type: 'thread_identification',
      question: 'What are the two axes of tension in the PAUSE thread?',
      scenario: '',
      options: [
        { 
          text: 'Ready vs. Not Ready, and Fast vs. Slow', 
          isCorrect: false, 
          feedback: 'Close, but PAUSE isn\'t primarily about speed. The axes are about timing and sufficiency.' 
        },
        { 
          text: 'Not Yet vs. Now, and Enough vs. More', 
          isCorrect: true, 
          feedback: 'Correct! PAUSE holds the tension between timing (not yet/now) and sufficiency (enough/more).' 
        },
        { 
          text: 'Wait vs. Act, and Little vs. Much', 
          isCorrect: false, 
          feedback: 'You\'re in the right direction, but these are consequences rather than the fundamental axes.' 
        },
        { 
          text: 'Hesitate vs. Commit, and Cautious vs. Bold', 
          isCorrect: false, 
          feedback: 'These describe behavioral responses, not the underlying tensions themselves.' 
        }
      ]
    };

    const saved = await module.save();
    console.log('✓ Fixed first knowledge check question');
    console.log('Options:', module.knowledgeChecks[0].options.map(o => o.text));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

fixFirstQuestion();
