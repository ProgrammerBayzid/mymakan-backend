// src/twilio/dto/send-twilio.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class SendTwilioDto {
  @ApiProperty({
        example: '+8801676485383',
        description: 'The number',
      })
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    example: 'Hello I am working',
    description: 'The sms body',
  })
  @IsString()
  @IsNotEmpty()
  body: string;
}
