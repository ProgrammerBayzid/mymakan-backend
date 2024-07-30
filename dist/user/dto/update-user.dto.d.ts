import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    country?: string;
    state?: string;
    fullName?: string;
    role?: string;
    image?: string;
    coverImage?: string;
    mobile?: string;
    mobile_code?: string;
    email?: string;
    gender?: string;
    bio?: string;
    uniqueId?: string;
    verified?: boolean;
    reject?: boolean;
    verificationCode?: string;
    verificationEmailSent?: boolean;
}
export {};
