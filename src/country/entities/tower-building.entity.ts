import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';

export type TowersOrBuildingNameDocument = HydratedDocument<TowersOrBuildingName>;
@Schema({
  timestamps: true,
})
export class TowersOrBuildingName {
    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the TowersOrBuildingName',
      })
      _id: string;
    
      @ApiProperty({
        example: 'United States',
        description: 'The name of the TowersOrBuildingName',
      })
      @Prop({ default: null })
      name: string;

      @ApiProperty({
        example: "city id",
        description: 'The id of the city',
      })
      @Prop({  type:  mongoose.Schema.Types.ObjectId, ref: 'Citiy' , required:true })
      city_id: string;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the TowersOrBuildingName was created',
      })
      createdAt: Date;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the TowersOrBuildingName was last updated',
      })
      updatedAt: Date;
}

export const TowersOrBuildingNameSchema = SchemaFactory.createForClass(TowersOrBuildingName);