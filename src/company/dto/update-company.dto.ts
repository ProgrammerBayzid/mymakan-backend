import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {

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
        example: '123456',
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
        example: '+1234567890',
        description: 'The phone number of the Company',
        required: false,
      })
      @IsOptional()
      @IsString()
      phone_number : string;
    
      @ApiProperty({
        example: 'bayzid@gmail.com',
        description: 'The email of the Company',
        required: false,
      })
      @IsOptional()
      @IsEmail()
      email : string;
}