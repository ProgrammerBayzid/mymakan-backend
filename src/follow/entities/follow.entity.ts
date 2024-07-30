import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument } from "mongoose";



export type FollowDocument = HydratedDocument<Follow>;
@Schema({
  timestamps: true,
})


export class Follow {
  populate(arg0: { path: "followerId" | "followingId"; model: mongoose.Model<mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{ _id: string; }>, {}, {}, {}, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{ _id: string; }>> & mongoose.Document<unknown, {}, import("../../user/entities/user.entity").User> & import("../../user/entities/user.entity").User & Required<{ _id: string; }>, any> | mongoose.Model<mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{ _id: string; }>, {}, {}, {}, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{ _id: string; }>> & mongoose.Document<unknown, {}, import("../../agent/entities/agent.entity").Agent> & import("../../agent/entities/agent.entity").Agent & Required<{ _id: string; }>, any>; select: string; }) {
    throw new Error('Method not implemented.');
  }

    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Agent',
      })
      _id: string;

      @Prop({ type: String , required: true })
      followerType: string

      @Prop({ type: mongoose.Schema.Types.ObjectId, required: true  })
      followerId: string;


      @Prop({ type: String , required: true })
      followingType: string

      @Prop({ type: mongoose.Schema.Types.ObjectId, required: true  })
      followingId: string;

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


export const FollowSchema = SchemaFactory.createForClass(Follow);
