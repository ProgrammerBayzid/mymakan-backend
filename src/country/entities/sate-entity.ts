import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';

export type StateDocument = HydratedDocument<State>;
@Schema({
  timestamps: true,
})
export class State {
    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the State',
      })
      _id: string;
    
      @ApiProperty({
        example: 'United States',
        description: 'The name of the State',
      })
      @Prop({ default: null })
      name: string;   
      
      @ApiProperty({
        example: "country id",
        description: 'The id of the Country',
      })
      @Prop({type:  mongoose.Schema.Types.ObjectId, ref: 'Country' , required:true })
      country_id: string;
    
      @ApiProperty({
        example: ['California', 'Texas', 'New York'],
        description: 'The states of the State',
      })
      @Prop({ type: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Citiy' }], default:[] })
      cites: string[];
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the State was created',
      })
      createdAt: Date;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the State was last updated',
      })
      updatedAt: Date;
}

export const StateSchema = SchemaFactory.createForClass(State);