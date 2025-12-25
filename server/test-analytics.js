const mongoose = require('mongoose');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

// Import the actual schemas from the compiled dist
const { Journal } = require('./dist/schemas/journal.schema');
const { Practice } = require('./dist/schemas/practice.schema');
const { User } = require('./dist/schemas/user.schema');

async function testAnalytics() {
  const client = new SecretsManagerClient({ region: 'us-east-1' });
  const response = await client.send(new GetSecretValueCommand({ SecretId: 'threads-app-secrets' }));
  const secrets = JSON.parse(response.SecretString);

  await mongoose.connect(secrets.MONGODB_URI);

  const JournalModel = mongoose.model('Journal', new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    threadFocus: String,
    content: String,
    createdAt: Date
  }));

  const PracticeModel = mongoose.model('Practice', new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    threadId: String,
    practiceType: String,
    notes: String,
    completedAt: Date,
    createdAt: Date
  }));

  const UserModel = mongoose.model('User', new mongoose.Schema({ email: String }));

  const user = await UserModel.findOne().sort({ createdAt: -1 });
  console.log('Testing analytics for user:', user.email);
  console.log('User ID:', user._id);

  const journalEntries = await JournalModel.find({ userId: user._id }).exec();
  const practices = await PracticeModel.find({ userId: user._id }).exec();

  console.log('\n=== RAW DATA ===');
  console.log('Journal entries found:', journalEntries.length);
  console.log('Practice entries found:', practices.length);

  if (journalEntries.length > 0) {
    console.log('\nSample journal entry:');
    console.log(JSON.stringify(journalEntries[0], null, 2));
  }

  if (practices.length > 0) {
    console.log('\nSample practice entry:');
    console.log(JSON.stringify(practices[0], null, 2));
  }

  // Simulate the analytics calculation
  const journalDays = new Set(
    journalEntries.map((entry) => {
      const date = new Date(entry.createdAt || new Date());
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }),
  );

  const journalThreadBreakdown = {};
  journalEntries.forEach((entry) => {
    journalThreadBreakdown[entry.threadFocus] =
      (journalThreadBreakdown[entry.threadFocus] || 0) + 1;
  });

  const practiceDays = new Set(
    practices.map((practice) => {
      const date = new Date(practice.completedAt);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }),
  );

  const practiceThreadBreakdown = {};
  const practiceTypeBreakdown = {};

  practices.forEach((practice) => {
    practiceThreadBreakdown[practice.threadId] =
      (practiceThreadBreakdown[practice.threadId] || 0) + 1;
    practiceTypeBreakdown[practice.practiceType] =
      (practiceTypeBreakdown[practice.practiceType] || 0) + 1;
  });

  console.log('\n=== CALCULATED ANALYTICS ===');
  console.log('Journal stats:', {
    totalEntries: journalEntries.length,
    journalDaysCount: journalDays.size,
    threadBreakdown: journalThreadBreakdown
  });

  console.log('\nPractice stats:', {
    totalSessions: practices.length,
    practiceDaysCount: practiceDays.size,
    threadBreakdown: practiceThreadBreakdown,
    typeBreakdown: practiceTypeBreakdown
  });

  await mongoose.connection.close();
}

testAnalytics().catch(console.error);
