import { CreateCountryDto } from './create-country.dto';
declare const UpdateCountryDto_base: import("@nestjs/common").Type<Partial<CreateCountryDto>>;
export declare class UpdateCountryDto extends UpdateCountryDto_base {
    name?: string;
    numeric_code?: string;
    phone_code?: string;
    states?: string[];
}
export {};
