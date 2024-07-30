import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCountryDto {  @ApiProperty({
    example: 'United States',
    description: 'The name of the Country',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '840',
    description: 'The numeric code of the Country',
  })
  @IsOptional()
  @IsString()
  numeric_code: string;

  @ApiProperty({
    example: '+1',
    description: 'The phone code of the Country',
  })
  @IsOptional()
  @IsString()
  phone_code: string;



  @ApiProperty({
    example: ['California', 'Texas', 'New York'],
    description: 'The states of the Country',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  states: string[];}
