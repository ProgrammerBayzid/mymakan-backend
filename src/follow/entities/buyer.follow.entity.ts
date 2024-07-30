import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument } from "mongoose";



export type BuyerFollowDocument = HydratedDocument<BuyerFollow>;
@Schema({
  timestamps: true,
})


export class BuyerFollow {

    @ApiProperty({
        example: '5ff48e093ecb8200f8b0fff3',
        description: 'The unique identifier of the Agent',
      })
      _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'  })
    userId: string;

    @Prop({ type: String  })
    role: string;
      
    @Prop({ default: 0 })
    followingUserCount: number;
  
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], default: [] })
    followingUser: string[];
  
    @Prop({ default: 0 })
    followerUserCount: number;
  
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  ,default: []})
    followerUser: string[];
  
    @Prop({ default: 0 })
    followIngAgentCount: number;
  
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }], default: [] })
    followingAgent: string[];
  
    @Prop({ default: 0 })
    followerAgentCount: number;
  
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }], default: [] })
    followerAgent: string[];

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


export const BuyerFollowSchema = SchemaFactory.createForClass(BuyerFollow);
