import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';
import { Flag } from './flag.entity';

export type CountryDocument = HydratedDocument<Country>;
@Schema({
  timestamps: true,
})
export class Country {
    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Country',
      })
      _id: string;
    
      @ApiProperty({
        example: 'United States',
        description: 'The name of the Country',
      })
      @Prop({ default: null })
      name: string;

   
      @Prop({ type: Flag })
      @ApiProperty({
        type: Flag,
        description: 'The country flag',
      })
      flags:Flag;
    
      @ApiProperty({
        example: '840',
        description: 'The numeric code of the Country',
      })
      @Prop({ default: null })
      numeric_code: string;
    
      @ApiProperty({
        example: '+1',
        description: 'The phone code of the Country',
      })
      @Prop({ default: null })
      phone_code: string;
     
    
      @ApiProperty({
        example: ['California', 'Texas', 'New York'],
        description: 'The states of the Country',
      })
      @Prop({ type: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'State' }], default: [] })
      states: string[];
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the country was created',
      })
      createdAt: Date;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the country was last updated',
      })
      updatedAt: Date;
}

export const CountrySchema = SchemaFactory.createForClass(Country);