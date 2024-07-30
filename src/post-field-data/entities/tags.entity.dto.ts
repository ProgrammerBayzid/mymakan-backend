import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


export type TagsDocument = Tags & Document;

export class Tags {

    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the doctor',
      })
      _id: string;


    @ApiProperty({
        type: String,
        description: 'The post comment',
      })
      @Prop({ type: String, required: true })
      name: string;

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

export const TagsSchema = SchemaFactory.createForClass(Tags);
