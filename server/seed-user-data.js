const mongoose = require('mongoose');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
require('dotenv').config();

const journalSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // String to match API behavior
  threadFocus: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const practiceSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // String to match API behavior
  threadId: { type: String, required: true },
  practiceType: { type: String, required: true },
  notes: { type: String },
  completedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Journal = mongoose.model('Journal', journalSchema);
const Practice = mongoose.model('Practice', practiceSchema);
const User = mongoose.model('User', { email: String });

const threads = ['PRESENCE', 'CONSENT', 'MEMORY', 'PAUSE', 'EMBODIMENT', 'UNCERTAINTY', 'BECOMING'];

const journalTemplates = [
  "Today I noticed myself collapsing into {thread} when faced with stress at work.",
  "I'm becoming more aware of my {thread} patterns in relationships.",
  "Practicing {thread} feels challenging but necessary for my growth.",
  "I see how {thread} shows up differently in my personal vs professional life.",
  "There's a tension between {thread} and my need for control.",
  "I'm learning to hold {thread} with more compassion for myself.",
  "The {thread} thread revealed itself in an unexpected way today.",
  "I'm noticing resistance around {thread} - what is that about?",
];

async function getMongoUri() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION || 'us-east-1',
    ...(accessKeyId && secretAccessKey ? {
      credentials: { accessKeyId, secretAccessKey }
    } : {})
  });

  try {
    const response = await client.send(
      new GetSecretValueCommand({ SecretId: 'threads-app-secrets' })
    );
    const secrets = JSON.parse(response.SecretString);
    if (!secrets.MONGODB_URI) {
      throw new Error('MONGODB_URI not found in secrets');
    }
    return secrets.MONGODB_URI;
  } catch (error) {
    console.error('Failed to get MongoDB URI from Secrets Manager:', error.message);
    throw error;
  }
}

async function seedUserData() {
  try {
    const mongoUri = await getMongoUri();
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB using URI from Secrets Manager');

    // Find the first user (or specific user by email)
    const user = await User.findOne().sort({ createdAt: -1 });
    if (!user) {
      console.log('No user found. Please create a user first.');
      process.exit(1);
    }

    console.log(`Adding entries for user: ${user.email}`);

    // Clear existing entries for this user (convert to string to match stored format)
    await Journal.deleteMany({ userId: user._id.toString() });
    await Practice.deleteMany({ userId: user._id.toString() });
    console.log('Cleared existing entries');

    // Create 12 journal entries over different days
    const journalEntries = [];
    for (let i = 0; i < 12; i++) {
      const daysAgo = Math.floor(Math.random() * 20) + 1; // 1-20 days ago
      const thread = threads[Math.floor(Math.random() * threads.length)];
      const template = journalTemplates[Math.floor(Math.random() * journalTemplates.length)];
      const content = template.replace('{thread}', thread);

      journalEntries.push({
        userId: user._id.toString(),
        threadFocus: thread,
        content: content,
        createdAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
      });
    }

    await Journal.insertMany(journalEntries);
    console.log(`Created ${journalEntries.length} journal entries`);

    // Create 8 practice entries over different days
    const practiceTypes = ['HOLD', 'See', 'Emerge', 'Reflection'];
    const practiceEntries = [];
    for (let i = 0; i < 8; i++) {
      const daysAgo = Math.floor(Math.random() * 18) + 1; // 1-18 days ago
      const thread = threads[Math.floor(Math.random() * threads.length)];
      const practiceType = practiceTypes[Math.floor(Math.random() * practiceTypes.length)];

      practiceEntries.push({
        userId: user._id.toString(),
        threadId: thread,
        practiceType: practiceType,
        notes: `Practiced ${practiceType} with ${thread}. Noticed patterns of collapse and moments of capacity.`,
        completedAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        createdAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
      });
    }

    await Practice.insertMany(practiceEntries);
    console.log(`Created ${practiceEntries.length} practice entries`);

    const uniqueJournalThreads = new Set(journalEntries.map(j => j.threadFocus));
    const uniquePracticeThreads = new Set(practiceEntries.map(p => p.threadId));

    console.log('\nSummary:');
    console.log(`- User: ${user.email}`);
    console.log(`- Journal entries: ${journalEntries.length}`);
    console.log(`- Practice entries: ${practiceEntries.length}`);
    console.log(`- Threads covered in journals: ${Array.from(uniqueJournalThreads).join(', ')}`);
    console.log(`- Threads covered in practices: ${Array.from(uniquePracticeThreads).join(', ')}`);

    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedUserData();
