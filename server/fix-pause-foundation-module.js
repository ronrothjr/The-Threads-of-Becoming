/**
 * Fix PAUSE Foundation Module - Add missing required fields
 */

const mongoose = require('mongoose');
const fs = require('fs');

// Read MongoDB URI
const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

async function fixPauseFoundationModule() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const TrainingModule = mongoose.connection.collection('trainingmodules');

    // Find the PAUSE Foundation module
    const module = await TrainingModule.findOne({ moduleId: 'pause-foundation' });

    if (!module) {
      console.log('PAUSE Foundation module not found');
      return;
    }

    console.log('Found PAUSE Foundation module');
    console.log('Current seedQuestion:', module.seedQuestion);
    console.log('Current knowledgeChecks count:', module.knowledgeChecks?.length || 0);
    console.log('Current practiceAssignments count:', module.practiceAssignments?.length || 0);

    // Prepare update
    const update = {};

    // Add seedQuestion if missing
    if (!module.seedQuestion) {
      update.seedQuestion = "What would change if you could pause before reacting?";
      console.log('Adding seedQuestion');
    }

    // Fix knowledgeChecks - add type field to each
    if (module.knowledgeChecks && module.knowledgeChecks.length > 0) {
      const fixedKnowledgeChecks = module.knowledgeChecks.map((check, index) => {
        if (!check.type) {
          return {
            ...check,
            type: index === 0 ? 'thread_identification' :
                  index === 1 ? 'collapse_recognition' :
                  index === 2 ? 'capacity_assessment' :
                  index === 3 ? 'practice_application' :
                  'integration_understanding'
          };
        }
        return check;
      });
      update.knowledgeChecks = fixedKnowledgeChecks;
      console.log('Fixing knowledgeChecks types');
    }

    // Fix practiceAssignments - add title and type to each
    if (module.practiceAssignments && module.practiceAssignments.length > 0) {
      const fixedPracticeAssignments = module.practiceAssignments.map((assignment, index) => {
        const fixed = { ...assignment };

        if (!fixed.title) {
          fixed.title = index === 0 ? 'Micro-Practice: 3-Second Phone Pause' :
                       index === 1 ? 'Mini-Practice: Morning Pause Ritual' :
                       'Real-World Practice: High-Stakes Pause';
        }

        if (!fixed.type) {
          fixed.type = index === 0 ? 'micro' :
                      index === 1 ? 'mini' :
                      'real_world';
        }

        return fixed;
      });
      update.practiceAssignments = fixedPracticeAssignments;
      console.log('Fixing practiceAssignments titles and types');
    }

    // Apply update if there are changes
    if (Object.keys(update).length > 0) {
      const result = await TrainingModule.updateOne(
        { moduleId: 'pause-foundation' },
        { $set: update }
      );
      console.log('\nUpdate result:', result);
      console.log('✅ PAUSE Foundation module fixed!');
    } else {
      console.log('No updates needed');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

fixPauseFoundationModule();
