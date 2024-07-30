import { ConfigService } from '@nestjs/config';
declare const RtStrategy_base: new (...args: any[]) => any;
export declare class RtStrategy extends RtStrategy_base {
    private config;
    constructor(config: ConfigService);
    validate(payload: any): any;
}
export {};
