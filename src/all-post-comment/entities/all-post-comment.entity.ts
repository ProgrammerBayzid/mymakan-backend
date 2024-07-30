import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, Types } from 'mongoose';
import { PostAgent } from 'src/post-agent/entities/post-agent.entity';
import { User } from 'src/user/entities/user.entity';
import { Agent } from 'src/agent/entities/agent.entity';
import { AllPost } from 'src/allposts/entities/allpost.entity';

export type AllPostCommentDocument = AllPostComment & Document;

@Schema({ timestamps: true })
export class AllPostComment {
  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the doctor',
  })
  _id: string;

  @ApiProperty({
    type: User,
    description: 'The User ID',
  })
  @Prop({type:  mongoose.Schema.Types.ObjectId, ref: 'User',  })
  userId: string;

  @ApiProperty({
    type: Agent,
    description: 'The User ID',
  })
  @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'Agent',  })
  agentId: string;

  @ApiProperty({
    type: AllPost,
    description: 'The Post ID',
  })
  @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'AllPost',  })
  postId: string;

  @ApiProperty({
    type: String,
    description: 'The post comment',
  })
  @Prop({ type: String, required: true })
  comment: string;

  @ApiProperty({
    type: String,
    description: 'The post comment',
  })
  @Prop({ type: String, required: true })
  commentBy: string;

  @ApiProperty({
    type: [String],
    description: 'The reply of post comment',
  })
  @Prop({ type: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'AllPostCommentReply' }], default: [] })
  reply: string[];

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

export const AllPostCommentSchema = SchemaFactory.createForClass(AllPostComment);
// AllPostCommentSchema.pre('findOne', autoPopulate);
// AllPostCommentSchema.pre('find', autoPopulate);

// function autoPopulate(next) {
//   this.populate('userId').populate('reply').populate('agentPostId');
//   next();
// }