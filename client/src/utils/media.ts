import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({ region: 'us-east-1' });

// CloudFront domains (will be populated after stack deployment)
export const MEDIA_DOMAINS = {
  audio: process.env.VITE_AUDIO_CLOUDFRONT_DOMAIN || '',
  images: process.env.VITE_IMAGE_CLOUDFRONT_DOMAIN || ''
};

export const BUCKET_NAMES = {
  audio: 'threads-of-becoming-audio',
  images: 'threads-of-becoming-images'
};

/**
 * Upload file to S3 bucket
 */
export async function uploadToS3(
  bucketType: 'audio' | 'images',
  key: string,
  file: File | Buffer,
  contentType?: string
) {
  const bucket = BUCKET_NAMES[bucketType];
  
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: file,
    ContentType: contentType || (file instanceof File ? file.type : 'application/octet-stream'),
  });

  return await s3Client.send(command);
}

/**
 * Get CloudFront URL for a file
 */
export function getCloudFrontUrl(bucketType: 'audio' | 'images', key: string): string {
  const domain = MEDIA_DOMAINS[bucketType];
  if (!domain) {
    console.warn(`CloudFront domain not configured for ${bucketType}`);
    return '';
  }
  return `https://${domain}/${key}`;
}

/**
 * Generate presigned URL for direct S3 upload
 */
export async function getPresignedUploadUrl(
  bucketType: 'audio' | 'images',
  key: string,
  contentType: string,
  expiresIn: number = 3600
) {
  const bucket = BUCKET_NAMES[bucketType];
  
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType,
  });

  return await getSignedUrl(s3Client, command, { expiresIn });
}

/**
 * Audio file utilities
 */
export const AudioUtils = {
  upload: (key: string, file: File | Buffer) => uploadToS3('audio', key, file),
  getUrl: (key: string) => getCloudFrontUrl('audio', key),
  getUploadUrl: (key: string, contentType: string) => getPresignedUploadUrl('audio', key, contentType)
};

/**
 * Image file utilities
 */
export const ImageUtils = {
  upload: (key: string, file: File | Buffer) => uploadToS3('images', key, file),
  getUrl: (key: string) => getCloudFrontUrl('images', key),
  getUploadUrl: (key: string, contentType: string) => getPresignedUploadUrl('images', key, contentType)
};