import { CreateCompanyDto } from './create-company.dto';
declare const UpdateCompanyDto_base: import("@nestjs/common").Type<Partial<CreateCompanyDto>>;
export declare class UpdateCompanyDto extends UpdateCompanyDto_base {
    name_english: string;
    name_arabic: string;
    broker_number: string;
    Office_name_english: string;
    phone_number: string;
    email: string;
}
export {};
