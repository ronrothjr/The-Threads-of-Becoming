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

async function balanceContent() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    
    if (!module) {
      console.log('PAUSE Foundation Module not found');
      return;
    }

    console.log('Found PAUSE Foundation Module');

    // Update Slide 3 to cover all four collapse patterns
    module.slides[2].narration.text = `When we can't hold the tension of PAUSE, we collapse in one of four directions. On the timing axis: Procrastination is the "not yet" collapse - perpetual waiting driven by fear. We say "someday" but never move. Impulsivity is the "now" collapse - constant urgency, unable to pause. We say "right now" before we're ready. On the sufficiency axis: Resignation is the "enough" collapse - premature settling, unable to reach. We say "this is fine" to avoid disappointment. Striving is the "more" collapse - insatiable accumulation, never satisfied. We say "not yet enough" and can't rest. Most of us have a home collapse pattern on each axis. Which ones feel familiar to you? Notice, without judgment, where you tend to land when the tension gets too much.`;

    // Add balanced writing prompts
    module.writingPrompts = [
      {
        prompt: 'Where did I notice the tension between pausing and reacting today? Between enough and more?',
        type: 'reflection',
        suggestedDuration: 5,
        guidance: 'Think about specific moments today - both timing tensions (when to act?) and sufficiency tensions (is this enough?).'
      },
      {
        prompt: 'Which poles do I usually collapse toward? On timing: rushing to react or avoiding/freezing? On sufficiency: settling too soon or never satisfied?',
        type: 'exploration',
        suggestedDuration: 7,
        guidance: 'Reflect on your typical patterns on BOTH axes. Do you tend to procrastinate or act impulsively? Do you tend toward resignation or constant striving?'
      },
      {
        prompt: 'Describe a moment when I held the PAUSE tension well - neither collapsing nor forcing. What made that possible?',
        type: 'application',
        suggestedDuration: 5,
        guidance: 'Recall when you acted at the right time from a place of sufficiency. What conditions helped you stay in the tension?'
      },
      {
        prompt: 'What am I learning about my relationship with timing and sufficiency? When do I trust the pause, and when do I collapse?',
        type: 'integration',
        suggestedDuration: 10,
        guidance: 'Looking back over your practice, what patterns are emerging across both axes? What questions are arising?'
      }
    ];

    const saved = await module.save();
    console.log('✓ Updated Slide 3 narration to cover all four collapse patterns');
    console.log('✓ Updated writing prompts to balance both axes');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

balanceContent();
