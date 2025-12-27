const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

const trainingModuleSchema = new mongoose.Schema({}, { strict: false });
const TrainingModule = mongoose.model('TrainingModule', trainingModuleSchema, 'trainingmodules');

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
    await module.save();

    console.log('✓ Added writing prompts to PAUSE Foundation Module');
    console.log(`  Added ${writingPrompts.length} prompts`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

addWritingPrompts();
