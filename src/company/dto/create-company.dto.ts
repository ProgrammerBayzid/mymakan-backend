import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateCompanyDto {
    @ApiProperty({
        example: 'bayzid@gmail.com',
        description: 'The name in English of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      name_english : string;
    
      @ApiProperty({
        example: 'بايزيد@gmail.com',
        description: 'The name in Arabic of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      name_arabic : string;
    
      @ApiProperty({
        example: 'BR12345678',
        description: 'The broker_number of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      broker_number : string;
    
      @ApiProperty({
        example: 'Bayzid Office',
        description: 'The office name in English of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      Office_name_english : string;
    
      @ApiProperty({
        example: '+123456789',
        description: 'The phone number of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      phone_number : string;
    
      @ApiProperty({
        example: 'info@bayzid.com',
        description: 'The email of the Company',
        required: false,
      })
      @IsOptional()
      @IsEmail()
      email : string;
}