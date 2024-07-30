import { TwilioService } from './twilio.service';
import { SendTwilioDto } from './dto/set.top.dto';
export declare class TwilioController {
    private readonly twilioService;
    constructor(twilioService: TwilioService);
    sendMessage(sendTwilioDto: SendTwilioDto): Promise<any>;
}
