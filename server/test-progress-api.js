const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const http = require('http');

// Read MongoDB URI
const mongoUri = fs.readFileSync('.mongo-uri', 'utf8').trim();

mongoose.connect(mongoUri).then(async () => {
  const User = mongoose.model('User', new mongoose.Schema({
    email: String,
  }), 'users');

  const user = await User.findOne({ email: 'ronrothjr@gmail.com' });

  if (!user) {
    console.log('User not found');
    await mongoose.disconnect();
    return;
  }

  const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

  const token = jwt.sign(
    { sub: user._id.toString(), email: user.email },
    jwtSecret,
    { expiresIn: '30d' }
  );

  console.log('Testing with user:', user.email);
  console.log('User ID:', user._id.toString());
  console.log('JWT Secret:', jwtSecret.substring(0, 20) + '...');

  await mongoose.disconnect();

  // Now test the API
  const options = {
    hostname: 'localhost',
    port: 5050,
    path: '/api/training/modules/with-progress',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('\nAPI Response Status:', res.statusCode);

      if (res.statusCode !== 200) {
        console.log('Error Response:', data);
        return;
      }

      try {
        const parsed = JSON.parse(data);
        console.log('Total Modules:', parsed.length);

        // Find PAUSE Foundation module
        const pauseModule = parsed.find(m => m.moduleId === 'pause-foundation');

        if (pauseModule) {
          console.log('\n=== PAUSE Foundation Module ===');
          console.log('Title:', pauseModule.title);
          console.log('Progress exists:', !!pauseModule.progress);
          if (pauseModule.progress) {
            console.log('Completed:', pauseModule.progress.completed);
            console.log('Current Phase:', pauseModule.progress.currentPhase);
            console.log('Module ID in progress:', pauseModule.progress.moduleId);
          } else {
            console.log('❌ No progress object attached');
          }
        } else {
          console.log('\n❌ PAUSE Foundation module not found in response');
        }
      } catch (e) {
        console.log('Parse Error:', e.message);
        console.log('Response:', data.substring(0, 500));
      }
    });
  });

  req.on('error', (e) => {
    console.error('Request Error:', e.message);
  });

  req.end();
}).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
