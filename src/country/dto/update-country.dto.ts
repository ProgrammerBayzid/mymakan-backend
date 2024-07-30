import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCountryDto } from './create-country.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto extends PartialType(CreateCountryDto) { 
  @ApiProperty({
    example: 'United States',
    description: 'The name of the Country',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: '840',
    description: 'The numeric code of the Country',
  })
  @IsOptional()
  @IsString()
  numeric_code?: string;

  @ApiProperty({
    example: '+1',
    description: 'The phone code of the Country',
  })
  @IsOptional()
  @IsString()
  phone_code?: string;

  

  @ApiProperty({
    example: ['California', 'Texas', 'New York'],
    description: 'The states of the Country',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  states?: string[];

}
