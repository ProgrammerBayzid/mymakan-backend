import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Agent } from 'src/agent/entities/agent.entity';
import { User } from 'src/user/entities/user.entity';
import { AllPostComment } from 'src/all-post-comment/entities/all-post-comment.entity';

export type AllPostCommentReplyDocument = AllPostCommentReply & Document;

@Schema()
export class AllPostCommentReply {
  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the agent post comment reply',
  })
  _id: string;

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
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' })
  agentId: string;

  @ApiProperty({
    type: AllPostComment,
    description: 'The Agent Post Comment ID',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AllPostComment' })
  postCommentId: string;

  @ApiProperty({
    type: String,
    description: 'The agent post comment reply',
  })
  @Prop()
  reply: string;

  @ApiProperty({
    example: '2024-02-01T12:34:56.789Z',
    description: 'The timestamp when the agent post comment reply was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-01T12:34:56.789Z',
    description: 'The timestamp when the agent post comment reply was last updated',
  })
  updatedAt: Date;
}

export const AllPostCommentReplySchema = SchemaFactory.createForClass(AllPostCommentReply);

// AllPostCommentReplySchema.pre('findOne', autoPopulate);
// AllPostCommentReplySchema.pre('find', autoPopulate);

// function autoPopulate(next) {
//   this.populate('userId').populate('agentPostCommentId').populate('userId');
//   next();
// }