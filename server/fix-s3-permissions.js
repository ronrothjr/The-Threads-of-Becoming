const { S3Client, PutObjectAclCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

const bucketName = process.env.S3_BUCKET_NAME || 'threads-of-becoming-audio';
const key = 'training-modules/pause-foundation/image/1766810102436-slide-1-visual.png';

async function makePublic() {
  try {
    console.log(`Making public: s3://${bucketName}/${key}`);

    const command = new PutObjectAclCommand({
      Bucket: bucketName,
      Key: key,
      ACL: 'public-read'
    });

    await s3Client.send(command);
    console.log('✅ File is now public');
    console.log(`URL: https://dr09ete9bzfvc.cloudfront.net/${key}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

makePublic();
