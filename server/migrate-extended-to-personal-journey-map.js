/**
 * Migration script to rename "extended" assessment type to "personal_journey_map"
 * Run with: node migrate-extended-to-personal-journey-map.js
 */

const mongoose = require('mongoose');
const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');

async function getMongoUri() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION || 'us-east-1',
    ...(accessKeyId && secretAccessKey
      ? {
          credentials: { accessKeyId, secretAccessKey },
        }
      : {}),
  });

  try {
    const response = await client.send(
      new GetSecretValueCommand({ SecretId: 'threads-app-secrets' })
    );
    const secrets = JSON.parse(response.SecretString);
    return secrets.MONGODB_URI;
  } catch (error) {
    console.error('Error fetching secrets:', error);
    throw error;
  }
}

async function migrateAssessments() {
  let connection;

  try {
    console.log('Fetching MongoDB URI from AWS Secrets Manager...');
    const mongoUri = await getMongoUri();

    console.log('Connecting to MongoDB...');
    connection = await mongoose.connect(mongoUri);

    const db = connection.connection.db;
    const assessmentsCollection = db.collection('assessments');
    const usersCollection = db.collection('users');

    // Update all assessment records with type='extended' to 'personal_journey_map'
    console.log('\nUpdating assessment records...');
    const assessmentResult = await assessmentsCollection.updateMany(
      { type: 'extended' },
      { $set: { type: 'personal_journey_map' } }
    );
    console.log(`Updated ${assessmentResult.modifiedCount} assessment records`);

    // Update user records with extendedCompleted/extendedDate fields
    console.log('\nUpdating user records...');
    const usersWithExtended = await usersCollection.find({
      'assessments.extendedCompleted': { $exists: true }
    }).toArray();

    console.log(`Found ${usersWithExtended.length} users with extended assessment data`);

    for (const user of usersWithExtended) {
      const update = {
        'assessments.personalJourneyMapCompleted': user.assessments.extendedCompleted,
      };

      if (user.assessments.extendedDate) {
        update['assessments.personalJourneyMapDate'] = user.assessments.extendedDate;
      }

      await usersCollection.updateOne(
        { _id: user._id },
        {
          $set: update,
          $unset: {
            'assessments.extendedCompleted': '',
            'assessments.extendedDate': ''
          }
        }
      );
    }

    console.log(`Updated ${usersWithExtended.length} user records`);

    console.log('\n✅ Migration completed successfully!');
    console.log('\nSummary:');
    console.log(`  - Assessment records updated: ${assessmentResult.modifiedCount}`);
    console.log(`  - User records updated: ${usersWithExtended.length}`);

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.connection.close();
      console.log('\nMongoDB connection closed');
    }
  }
}

// Run the migration
migrateAssessments()
  .then(() => {
    console.log('\nDone!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
