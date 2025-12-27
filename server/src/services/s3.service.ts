import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import axios from 'axios';

export interface UploadResult {
  url: string;
  key: string;
  bucket: string;
}

@Injectable()
export class S3Service {
  private readonly logger = new Logger(S3Service.name);
  private s3Client: S3Client;
  private audioBucketName: string;
  private imageBucketName: string;
  private region: string;
  private audioCloudfrontDomain: string;
  private imageCloudfrontDomain: string;

  constructor(private configService: ConfigService) {
    this.region = this.configService.get<string>('AWS_REGION') || 'us-east-1';
    this.audioBucketName = this.configService.get<string>('S3_AUDIO_BUCKET_NAME') || 'threads-of-becoming-audio';
    this.imageBucketName = this.configService.get<string>('S3_IMAGE_BUCKET_NAME') || 'threads-of-becoming-images';
    this.audioCloudfrontDomain = this.configService.get<string>('CLOUDFRONT_AUDIO_DOMAIN') || 'https://dvmxv87qgnsr1.cloudfront.net';
    this.imageCloudfrontDomain = this.configService.get<string>('CLOUDFRONT_IMAGE_DOMAIN') || 'https://dr09ete9bzfvc.cloudfront.net';

    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');

    this.s3Client = new S3Client({
      region: this.region,
      // Only include credentials if both are defined (local dev), otherwise use IAM role (production)
      ...(accessKeyId && secretAccessKey ? {
        credentials: {
          accessKeyId,
          secretAccessKey,
        }
      } : {})
    });

    this.logger.log(`S3 Service initialized: audioBucket=${this.audioBucketName}, imageBucket=${this.imageBucketName}, region=${this.region}`);
    this.logger.log(`CloudFront domains: audio=${this.audioCloudfrontDomain}, image=${this.imageCloudfrontDomain}`);
  }

  /**
   * Upload a file buffer to S3 and return CloudFront URL
   */
  async uploadFile(
    buffer: Buffer,
    key: string,
    contentType: string,
    metadata?: Record<string, string>
  ): Promise<UploadResult> {
    try {
      // Determine bucket and CloudFront distribution based on content type
      const isAudio = contentType.startsWith('audio/');
      const bucketName = isAudio ? this.audioBucketName : this.imageBucketName;
      const cloudfrontDomain = isAudio ? this.audioCloudfrontDomain : this.imageCloudfrontDomain;

      this.logger.log(`[S3-UPLOAD] Preparing S3 upload...`);
      this.logger.log(`[S3-UPLOAD] Bucket: ${bucketName} (${isAudio ? 'audio' : 'image'})`);
      this.logger.log(`[S3-UPLOAD] Key: ${key}`);
      this.logger.log(`[S3-UPLOAD] Content-Type: ${contentType}`);
      this.logger.log(`[S3-UPLOAD] Buffer size: ${buffer.length} bytes`);

      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: buffer,
        ContentType: contentType,
        Metadata: metadata,
        // Note: ACL not set because S3 Block Public Access is enabled
        // CloudFront uses Origin Access Control (OAC) to access private objects
      });

      this.logger.log(`[S3-UPLOAD] Sending to S3...`);
      await this.s3Client.send(command);
      this.logger.log(`[S3-UPLOAD] ✅ S3 upload successful`);

      // Return CloudFront URL for faster CDN delivery
      const url = `${cloudfrontDomain}/${key}`;

      this.logger.log(`[S3-UPLOAD] CloudFront domain selected: ${cloudfrontDomain}`);
      this.logger.log(`[S3-UPLOAD] Final URL: ${url}`);

      return {
        url,
        key,
        bucket: bucketName,
      };
    } catch (error) {
      this.logger.error(`[S3-UPLOAD] ❌ S3 upload failed: ${error.message}`, error.stack);
      throw new Error(`S3 upload failed: ${error.message}`);
    }
  }

  /**
   * Upload base64 encoded data to S3
   */
  async uploadBase64(
    base64Data: string,
    key: string,
    contentType?: string
  ): Promise<UploadResult> {
    // Extract content type from data URL if not provided
    let actualContentType = contentType;
    let base64String = base64Data;

    if (base64Data.startsWith('data:')) {
      const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/);
      if (matches) {
        actualContentType = actualContentType || matches[1];
        base64String = matches[2];
      }
    }

    if (!actualContentType) {
      throw new Error('Content type must be provided or included in data URL');
    }

    const buffer = Buffer.from(base64String, 'base64');
    return this.uploadFile(buffer, key, actualContentType);
  }

  /**
   * Upload a buffer directly to S3
   */
  async uploadBuffer(
    buffer: Buffer,
    key: string,
    contentType: string
  ): Promise<UploadResult> {
    return this.uploadFile(buffer, key, contentType);
  }

  /**
   * Download a file from a URL and upload it to S3
   * Useful for downloading Speechify audio and re-hosting on S3
   */
  async downloadAndUpload(
    sourceUrl: string,
    key: string,
    contentType?: string
  ): Promise<UploadResult> {
    try {
      this.logger.log(`[S3-UPLOAD] Starting download from: ${sourceUrl}`);

      const response = await axios.get(sourceUrl, {
        responseType: 'arraybuffer',
        timeout: 60000, // 60 second timeout
      });

      const buffer = Buffer.from(response.data);
      const actualContentType = contentType || response.headers['content-type'] || 'application/octet-stream';

      this.logger.log(`[S3-UPLOAD] Downloaded ${buffer.length} bytes (${(buffer.length / 1024).toFixed(2)} KB)`);
      this.logger.log(`[S3-UPLOAD] Content type: ${actualContentType}`);
      this.logger.log(`[S3-UPLOAD] Uploading to S3 key: ${key}`);

      const result = await this.uploadFile(buffer, key, actualContentType);

      this.logger.log(`[S3-UPLOAD] ✅ Upload complete`);
      return result;
    } catch (error) {
      this.logger.error(`[S3-UPLOAD] ❌ Download and upload failed: ${error.message}`, error.stack);
      throw new Error(`Download and upload failed: ${error.message}`);
    }
  }

  /**
   * Delete a file from S3
   * Determines the correct bucket based on the key path
   */
  async deleteFile(key: string, bucket?: string): Promise<void> {
    try {
      // If bucket not specified, try to determine from key
      let bucketName = bucket;
      if (!bucketName) {
        // Assume audio bucket for audio paths, image bucket otherwise
        bucketName = key.includes('/audio/') ? this.audioBucketName : this.imageBucketName;
      }

      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
      });

      await this.s3Client.send(command);
      this.logger.log(`File deleted from S3 ${bucketName}: ${key}`);
    } catch (error) {
      this.logger.error(`Failed to delete file from S3: ${error.message}`, error.stack);
      throw new Error(`S3 delete failed: ${error.message}`);
    }
  }

  /**
   * Generate a presigned URL for temporary access to a private file
   * (Not needed for public files, but useful for future private content)
   */
  async getSignedUrl(key: string, expiresIn: number = 3600, bucket?: string): Promise<string> {
    try {
      // If bucket not specified, try to determine from key
      let bucketName = bucket;
      if (!bucketName) {
        bucketName = key.includes('/audio/') ? this.audioBucketName : this.imageBucketName;
      }

      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      });

      const url = await getSignedUrl(this.s3Client, command, { expiresIn });
      return url;
    } catch (error) {
      this.logger.error(`Failed to generate signed URL: ${error.message}`, error.stack);
      throw new Error(`Signed URL generation failed: ${error.message}`);
    }
  }

  /**
   * Generate a unique key for a training module asset
   */
  generateAssetKey(
    moduleId: string,
    assetType: 'audio' | 'image',
    filename: string
  ): string {
    const timestamp = Date.now();
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    return `training-modules/${moduleId}/${assetType}/${timestamp}-${sanitizedFilename}`;
  }

  /**
   * Upload audio file and get CloudFront URL
   * Example: await s3Service.uploadAudio('intro-speech.mp3', audioBuffer);
   */
  async uploadAudio(filename: string, buffer: Buffer): Promise<string> {
    const key = filename;
    const result = await this.uploadFile(buffer, key, 'audio/mpeg');
    return result.url; // Returns: https://dvmxv87qgnsr1.cloudfront.net/intro-speech.mp3
  }

  /**
   * Upload image file and get CloudFront URL
   * Example: await s3Service.uploadImage('hero-image.jpg', imageBuffer);
   */
  async uploadImage(filename: string, buffer: Buffer, contentType: string = 'image/jpeg'): Promise<string> {
    const key = filename;
    const result = await this.uploadFile(buffer, key, contentType);
    return result.url; // Returns: https://dr09ete9bzfvc.cloudfront.net/hero-image.jpg
  }

  /**
   * Get CloudFront URL for an audio file
   * Example: const audioUrl = s3Service.getAudioUrl('intro-speech.mp3');
   */
  getAudioUrl(filename: string): string {
    return `${this.audioCloudfrontDomain}/${filename}`;
  }

  /**
   * Get CloudFront URL for an image file
   * Example: const imageUrl = s3Service.getImageUrl('hero-image.jpg');
   */
  getImageUrl(filename: string): string {
    return `${this.imageCloudfrontDomain}/${filename}`;
  }

  /**
   * Check if S3 is properly configured
   */
  isConfigured(): boolean {
    return !!(this.audioBucketName && this.imageBucketName && this.region);
  }

  /**
   * Extract S3 key from CloudFront URL
   * Example: https://dvmxv87qgnsr1.cloudfront.net/training-modules/pause/audio/123-file.mp3
   * Returns: training-modules/pause/audio/123-file.mp3
   */
  extractKeyFromUrl(url: string): string | null {
    try {
      // Check if it's one of our CloudFront URLs
      if (url.includes(this.audioCloudfrontDomain) || url.includes(this.imageCloudfrontDomain)) {
        const urlObj = new URL(url);
        // Remove leading slash from pathname to get the key
        return urlObj.pathname.substring(1);
      }
      return null; // Not a CloudFront URL we manage
    } catch (error) {
      this.logger.warn(`Failed to extract key from URL: ${url}`, error.message);
      return null;
    }
  }

  /**
   * Delete file from S3 using CloudFront URL
   * Returns true if deleted, false if URL was not ours or deletion failed
   */
  async deleteByUrl(url: string): Promise<boolean> {
    if (!url) return false;

    const key = this.extractKeyFromUrl(url);
    if (!key) {
      this.logger.log(`[S3-DELETE] URL is not a CloudFront URL, skipping: ${url}`);
      return false;
    }

    try {
      this.logger.log(`[S3-DELETE] Deleting old file: ${key}`);
      await this.deleteFile(key);
      this.logger.log(`[S3-DELETE] ✅ Successfully deleted old file`);
      return true;
    } catch (error) {
      this.logger.error(`[S3-DELETE] ❌ Failed to delete old file: ${error.message}`, error.stack);
      return false;
    }
  }
}
