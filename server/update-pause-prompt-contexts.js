const mongoose = require('mongoose');
const fs = require('fs');

const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

async function updatePromptContexts() {
  await mongoose.connect(mongoUri);

  const module = await mongoose.connection.db.collection('trainingmodules').findOne({ moduleId: 'pause-foundation' });

  if (!module) {
    console.log('Module not found');
    return;
  }

  // Update prompts with context metadata
  // Prompts 1-2: In-session (immediate reflection)
  // Prompt 3: Practice assignment (try this week)
  // Prompt 4: Weekly reflection (after some practice)

  module.writingPrompts[0] = {
    ...module.writingPrompts[0],
    context: 'in-session',
    optional: false // Required for in-session integration
  };

  module.writingPrompts[1] = {
    ...module.writingPrompts[1],
    context: 'in-session',
    optional: true // Optional - user can skip if they want
  };

  module.writingPrompts[2] = {
    ...module.writingPrompts[2],
    context: 'practice-assignment',
    optional: true,
    scheduledAfterDays: 3 // Show 3 days after completing module
  };

  module.writingPrompts[3] = {
    ...module.writingPrompts[3],
    context: 'weekly-reflection',
    optional: true,
    scheduledAfterDays: 7 // Show 7 days after completing module
  };

  await mongoose.connection.db.collection('trainingmodules').updateOne(
    { moduleId: 'pause-foundation' },
    { $set: { writingPrompts: module.writingPrompts } }
  );

  console.log('Updated writing prompts:');
  module.writingPrompts.forEach((prompt, idx) => {
    console.log(`\nPrompt ${idx + 1}:`);
    console.log('  Context:', prompt.context);
    console.log('  Optional:', prompt.optional);
    console.log('  Scheduled after:', prompt.scheduledAfterDays || 'N/A', 'days');
    console.log('  Prompt:', prompt.prompt.substring(0, 60) + '...');
  });

  await mongoose.connection.close();
}

updatePromptContexts().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
