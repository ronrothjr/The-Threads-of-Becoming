const mongoose = require('mongoose');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
require('dotenv').config();

async function getMongoUri() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION || 'us-east-1',
    ...(accessKeyId && secretAccessKey ? {
      credentials: { accessKeyId, secretAccessKey }
    } : {})
  });

  const response = await client.send(
    new GetSecretValueCommand({ SecretId: 'threads-app-secrets' })
  );
  const secrets = JSON.parse(response.SecretString);
  return secrets.MONGODB_URI;
}

async function checkUsers() {
  try {
    const mongoUri = await getMongoUri();
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB using URI from Secrets Manager');

    const User = mongoose.model('User', new mongoose.Schema({
      email: String,
      name: String,
      createdAt: Date
    }));

    const users = await User.find({}).select('email name createdAt').lean();

    if (users.length === 0) {
      console.log('No users found in database');
    } else {
      console.log('Found ' + users.length + ' user(s):');
      users.forEach(function(user, idx) {
        console.log((idx + 1) + '. ' + user.email + ' (ID: ' + user._id + ')');
      });
    }

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkUsers();
