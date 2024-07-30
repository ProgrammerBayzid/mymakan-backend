import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateStateDto {
  @ApiProperty({
    example: 'United States',
    description: 'The name of the State',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "country id",
    description: 'The id of the Country',
  })
  @IsString()
  @IsNotEmpty()
  country_id: string;

}
