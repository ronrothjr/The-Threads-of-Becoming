const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

const trainingModuleSchema = new mongoose.Schema({}, { strict: false });
const TrainingModule = mongoose.model('TrainingModule', trainingModuleSchema, 'trainingmodules');

async function test() {
  try {
    await mongoose.connect(mongoUri);
    
    const module = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    console.log('Module ID:', module._id);
    console.log('Current writingPrompts:', module.writingPrompts);
    
    // Try to add directly
    const writingPrompts = [
      {
        prompt: 'Test prompt',
        type: 'reflection',
        suggestedDuration: 5,
        guidance: 'Test guidance'
      }
    ];
    
    module.writingPrompts = writingPrompts;
    console.log('About to save with prompts:', module.writingPrompts);
    
    const result = await module.save();
    console.log('Save result writingPrompts:', result.writingPrompts);
    
    // Re-fetch to verify
    const fetched = await TrainingModule.findOne({ title: 'PAUSE Foundation' });
    console.log('Re-fetched writingPrompts:', fetched.writingPrompts);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

test();
