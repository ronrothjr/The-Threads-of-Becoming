const { S3Client, HeadObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

const bucketName = process.env.S3_BUCKET_NAME || 'threads-of-becoming-audio';

async function checkFile() {
  try {
    // Check specific file
    const key = 'training-modules/pause-foundation/image/1766810102436-slide-1-visual.png';
    console.log(`Checking: s3://${bucketName}/${key}`);

    try {
      const headCommand = new HeadObjectCommand({
        Bucket: bucketName,
        Key: key
      });
      const response = await s3Client.send(headCommand);
      console.log('✅ File EXISTS in S3');
      console.log('Content-Type:', response.ContentType);
      console.log('Size:', response.ContentLength, 'bytes');
      console.log('Last Modified:', response.LastModified);
    } catch (error) {
      if (error.name === 'NotFound') {
        console.log('❌ File NOT FOUND in S3');
      } else {
        throw error;
      }
    }

    // List all files in the training-modules/pause-foundation/image/ prefix
    console.log('\n--- Listing all image files for pause-foundation ---');
    const listCommand = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: 'training-modules/pause-foundation/image/',
      MaxKeys: 20
    });

    const listResponse = await s3Client.send(listCommand);

    if (listResponse.Contents && listResponse.Contents.length > 0) {
      console.log(`Found ${listResponse.Contents.length} files:`);
      listResponse.Contents.forEach(obj => {
        console.log(`  - ${obj.Key} (${obj.Size} bytes, ${obj.LastModified})`);
      });
    } else {
      console.log('No files found in this prefix');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkFile();
