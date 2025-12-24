import { Injectable } from '@nestjs/common';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { SecretsService } from '../config/secrets.service';

@Injectable()
export class EmailService {
  private sesClient: SESClient;

  constructor(private secretsService: SecretsService) {
    // Use IAM role if no credentials provided (production)
    // Use credentials if they exist (local development)
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    this.sesClient = new SESClient({
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

  async sendContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const command = new SendEmailCommand({
      Source: 'noreply@creativeadvance.org',
      Destination: { ToAddresses: ['contact@creativeadvance.org'] },
      Message: {
        Subject: { Data: `New ${data.subject} inquiry from ${data.name}` },
        Body: {
          Text: { 
            Data: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}` 
          },
          Html: {
            Data: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            `
          }
        }
      }
    });

    await this.sesClient.send(command);

    // Try to send confirmation email, but don't fail if SES is in sandbox mode
    try {
      await this.sendConfirmationEmail(data.email, data.name);
    } catch (error) {
      // Log error but don't throw - user's message was already sent to contact@
      console.warn('Could not send confirmation email (likely SES sandbox mode):', error.message);
    }
  }

  private async sendConfirmationEmail(email: string, name: string) {
    const command = new SendEmailCommand({
      Source: 'noreply@creativeadvance.org',
      Destination: { ToAddresses: [email] },
      Message: {
        Subject: { Data: 'Thank you for contacting us' },
        Body: {
          Html: {
            Data: `
              <h2>Thank you, ${name}!</h2>
              <p>We've received your message and will respond within 2 business days.</p>
              <p>Best regards,<br>The Threads of Becoming Team</p>
            `
          }
        }
      }
    });

    await this.sesClient.send(command);
  }

  async sendVerificationEmail(email: string, token: string, name: string) {
    const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:5051'}/verify-email?token=${token}`;

    const command = new SendEmailCommand({
      Source: 'noreply@creativeadvance.org',
      Destination: { ToAddresses: [email] },
      Message: {
        Subject: { Data: 'Verify Your Email - Threads of Becoming' },
        Body: {
          Html: {
            Data: `
              <h2>Welcome to Threads of Becoming, ${name}!</h2>
              <p>Thank you for registering. Please verify your email address to complete your account setup.</p>
              <p style="margin: 2rem 0;">
                <a href="${verificationUrl}" style="background: linear-gradient(135deg, #14B8A6, #8B5CF6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                  Verify Email Address
                </a>
              </p>
              <p>Or copy and paste this link into your browser:</p>
              <p style="color: #6B7280; word-break: break-all;">${verificationUrl}</p>
              <p style="margin-top: 2rem; color: #6B7280; font-size: 14px;">
                This link will expire in 24 hours. If you didn't create this account, please ignore this email.
              </p>
              <p>Best regards,<br>The Threads of Becoming Team</p>
            `
          },
          Text: {
            Data: `Welcome to Threads of Becoming, ${name}!

Thank you for registering. Please verify your email address by clicking the link below:

${verificationUrl}

This link will expire in 24 hours. If you didn't create this account, please ignore this email.

Best regards,
The Threads of Becoming Team`
          }
        }
      }
    });

    await this.sesClient.send(command);
  }
}