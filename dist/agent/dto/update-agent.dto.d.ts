import { CreateAgentDto } from './create-agent.dto';
declare const UpdateAgentDto_base: import("@nestjs/common").Type<Partial<CreateAgentDto>>;
export declare class UpdateAgentDto extends UpdateAgentDto_base {
    country?: string;
    state?: string;
    fullName?: string;
    role?: string;
    companyName?: string;
    image?: string;
    coverImage?: string;
    mobile?: string;
    mobile_code?: string;
    email?: string;
    gender?: string;
    bio?: string;
    identity?: [];
    uniqueId?: string;
    verified?: boolean;
    reject?: boolean;
    verificationCode?: string;
    verificationEmailSent?: boolean;
}
export {};
