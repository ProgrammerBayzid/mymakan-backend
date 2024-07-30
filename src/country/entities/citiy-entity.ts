import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';

export type CitiyDocument = HydratedDocument<Citiy>;
@Schema({
  timestamps: true,
})
export class Citiy {
    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Citiy',
      })
      _id: string;
    
      @ApiProperty({
        example: 'United Citiys',
        description: 'The name of the Citiy',
      })
      @Prop({ default: null })
      name: string;   
      
      @ApiProperty({
        example: "State id",
        description: 'The id of the State',
      })
      @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'State' , required:true })
      state_id: string;
    
      @ApiProperty({
        example: ['California', 'Texas', 'New York'],
        description: 'The Towers Or BuildingName of the Citiy',
      })
      @Prop({ type: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'TowersOrBuildingName' }], default:[] })
      towersorBuildingName: string[];
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the Citiy was created',
      })
      createdAt: Date;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the Citiy was last updated',
      })
      updatedAt: Date;
}

export const CitiySchema = SchemaFactory.createForClass(Citiy);