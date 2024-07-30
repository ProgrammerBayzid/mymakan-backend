import { Injectable } from '@nestjs/common';
import { CreateTwilioDto } from './dto/create-twilio.dto';
import { UpdateTwilioDto } from './dto/update-twilio.dto';
import { Twilio } from 'twilio';
import { ConfigService } from '@nestjs/config';
import { SendTwilioDto } from './dto/set.top.dto';

@Injectable()
export class TwilioService {
  private twilioClient: Twilio;
  private twilioPhoneNumber: string;

  constructor(private configService: ConfigService) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    this.twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    this.twilioClient = new Twilio(accountSid, authToken);
  }

  async sendMessage(sendTwilioDto: SendTwilioDto): Promise<any> {
    const { to, body } = sendTwilioDto;
    return this.twilioClient.messages.create({
      body,
      from: this.twilioPhoneNumber,
      to,
    });
  }
 
}
