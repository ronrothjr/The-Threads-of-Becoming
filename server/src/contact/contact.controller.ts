import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Controller('contact')
export class ContactController {
  constructor(private emailService: EmailService) {}

  @Post()
  async submitContactForm(@Body() contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    try {
      if (!contactData.name || !contactData.email || !contactData.message) {
        throw new HttpException('Missing required fields', HttpStatus.BAD_REQUEST);
      }

      await this.emailService.sendContactForm(contactData);
      
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      console.error('Contact form error:', error);
      throw new HttpException(
        'Failed to send email', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}