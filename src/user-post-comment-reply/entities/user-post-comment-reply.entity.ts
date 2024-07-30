import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { AgentPostComment } from 'src/agent-post-comment/entities/agent-post-comment.entity';
import { Agent } from 'src/agent/entities/agent.entity';
import { User } from 'src/user/entities/user.entity';
import { UserPostComment } from 'src/user-post-comment/entities/user-post-comment.entity';

export type UserPostCommentReplyDocument = UserPostCommentReply & Document;

@Schema()
export class UserPostCommentReply {
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
    type: UserPostComment,
    description: 'The Agent Post Comment ID',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserPostComment' })
  userPostCommentId: string;

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

export const UserPostCommentReplySchema = SchemaFactory.createForClass(UserPostCommentReply);

// AgentPostCommentReplySchema.pre('findOne', autoPopulate);
// AgentPostCommentReplySchema.pre('find', autoPopulate);

// function autoPopulate(next) {
//   this.populate('userId').populate('agentPostCommentId').populate('userId');
//   next();
// }