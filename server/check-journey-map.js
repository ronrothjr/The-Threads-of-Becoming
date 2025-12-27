const mongoose = require('mongoose');
const fs = require('fs');

// Read MongoDB URI from .mongo-uri file
const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

async function checkJourneyMap() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const Assessment = mongoose.model('Assessment', new mongoose.Schema({}, { strict: false }));

    const journeyMaps = await Assessment.find({ type: 'personal_journey_map' }).lean();

    console.log(`\nFound ${journeyMaps.length} Personal Journey Map assessments:\n`);

    for (const assessment of journeyMaps) {
      console.log(`Assessment ID: ${assessment._id}`);
      console.log(`User ID: ${assessment.userId}`);
      console.log(`Is Complete: ${assessment.isComplete}`);
      console.log(`Completed At: ${assessment.completedAt}`);
      console.log(`Responses Count: ${assessment.responses?.length || 0}`);
      console.log(`Has Results: ${!!assessment.results}`);
      console.log('---');
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkJourneyMap();
