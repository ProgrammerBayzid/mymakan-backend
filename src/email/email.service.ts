import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { otpCode } from './otp-code-html-temp';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize the nodemailer transporter
    this.transporter = nodemailer.createTransport({
      host: 'mail.ajmir.ae',
      port: 465,
      secure: true,
      auth: {
        user: 'support@ajmir.ae',
        pass: '5OZd7SVBPC',
      },
    });
  }

  // Method to send emails using the transporter
  async sendEmail(to: string, subject: string, code: string): Promise<void> {
    console.log(to );
    
    try {
      await this.transporter.verify(); // Ensure transporter is valid
      await this.transporter.sendMail({
        from: 'support@ajmir.ae',
        to,
        subject,
        html: otpCode(code)
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Rethrow error for further handling
    }
  }
}
