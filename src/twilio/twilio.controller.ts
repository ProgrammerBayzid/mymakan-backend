import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { CreateTwilioDto } from './dto/create-twilio.dto';
import { UpdateTwilioDto } from './dto/update-twilio.dto';
import { SendTwilioDto } from './dto/set.top.dto';
import { Public } from 'src/common/public.decorator';

@Controller('twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}


  @Public()
  @Post('send')
  async sendMessage(@Body() sendTwilioDto: SendTwilioDto) {
    return this.twilioService.sendMessage(sendTwilioDto);
  }

 
}
