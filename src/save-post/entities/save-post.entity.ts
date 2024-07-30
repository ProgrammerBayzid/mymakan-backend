import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";
import { Agent } from "src/agent/entities/agent.entity";
import { User } from "src/user/entities/user.entity";


export type SavePostDocument = SavePost & Document;

@Schema({ timestamps: true })
export class SavePost {

    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the post',
      })
      _id: string;


    @ApiProperty({
        example: 'buyer',
        description: 'The role of the post',
      })
      @Prop({required: true})
      saveBy: string;



    @ApiProperty({
        type: User,
        description: 'The User ID',
      })
      @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
      userId: string;

    @ApiProperty({
        type: Agent,
        description: 'The Agent ID',
      })
    @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'Agent' })
    agentId: string;

    @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'AllPost' })
    savePostId: string;



    @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was created',
      })
      createdAt: Date;
    
      @ApiProperty({
        example: '2024-02-01T12:34:56.789Z',
        description: 'The timestamp when the post was last updated',
      })
      updatedAt: Date;
}
export const SavePostSchema = SchemaFactory.createForClass(SavePost);
