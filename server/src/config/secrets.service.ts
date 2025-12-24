import { Injectable } from '@nestjs/common';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

@Injectable()
export class SecretsService {
  private secrets: any = null;
  private secretsClient: SecretsManagerClient;

  constructor() {
    // Use IAM role if no credentials provided (production)
    // Use credentials if they exist (local development)
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    this.secretsClient = new SecretsManagerClient({
      region: process.env.AWS_REGION || 'us-east-1',
      // Only include credentials if both are defined
      ...(accessKeyId && secretAccessKey ? {
        credentials: {
          accessKeyId,
          secretAccessKey,
        }
      } : {})
    });
  }

  async getSecrets() {
    if (this.secrets) return this.secrets;

    try {
      const command = new GetSecretValueCommand({
        SecretId: 'threads-app-secrets',
      });
      
      const response = await this.secretsClient.send(command);
      if (!response.SecretString) {
        throw new Error('SecretString is undefined');
      }
      this.secrets = JSON.parse(response.SecretString);
      return this.secrets;
    } catch (error) {
      console.error('Failed to retrieve secrets:', error);
      throw error;
    }
  }
}