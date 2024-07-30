import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;
@Schema({
  timestamps: true,
})
export class Company {
  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the Company',
  })
  _id: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  name_english: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  name_arabic: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  broker_number: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  Office_name_english: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  phone_number: string;


  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The name_english of the Company',
  })
  @Prop({ default: null })
  email: string;


  @ApiProperty({
    example: '2024-02-01T12:34:56.789Z',
    description: 'The timestamp when the doctor was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-01T12:34:56.789Z',
    description: 'The timestamp when the doctor was last updated',
  })
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);