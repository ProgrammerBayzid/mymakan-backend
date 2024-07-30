import { ConfigService } from '@nestjs/config';
import { SendTwilioDto } from './dto/set.top.dto';
export declare class TwilioService {
    private configService;
    private twilioClient;
    private twilioPhoneNumber;
    constructor(configService: ConfigService);
    sendMessage(sendTwilioDto: SendTwilioDto): Promise<any>;
}
