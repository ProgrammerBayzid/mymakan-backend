import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Agent } from 'src/agent/entities/agent.entity';

@Schema({ timestamps: true })
export class UserReview {
  @ApiProperty({
    description: 'The user ID of the agent being reviewed',
    type: Agent,
    example: '5ff48e093ecb8200f8b0fff3',
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Agent', })
  reviewerId: string;

  @ApiProperty({
    description: 'The agent ID of the agent being reviewed',
    type: User,
    example: '5ff48e093ecb8200f8b0fff3',
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User',  })
  userId: string;

  @ApiProperty({
    description: 'The rating given in the review',
    example: 4.5,
  })
  @Prop({ required: true })
  rating: number;

  @ApiProperty({
    description: 'The content of the review',
    example: 'Great service, very knowledgeable.',
  })
  @Prop({ required: false , default: null})
  content: string;

  @ApiProperty({
    description: 'The timestamp when the review was created',
    example: '2024-06-28T12:34:56.789Z',
    type: Date,
  })
  @Prop({ default: Date.now })
  createdAt: Date;

  @ApiProperty({
    description: 'The timestamp when the review was last updated',
    example: '2024-06-28T12:34:56.789Z',
    type: Date,
  })
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserReviewSchema = SchemaFactory.createForClass(UserReview);
