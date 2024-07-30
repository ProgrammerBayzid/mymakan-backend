import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';
import { AgentReview, AgentReviewSchema } from './review.entity';

export type AgentDocument = HydratedDocument<Agent>;
@Schema({
  timestamps: true,
})
export class Agent {
  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the Agent',
  })
  _id: string;

  @ApiProperty({
    example: 'country',
    description: 'The country of the user',
  })
  @Prop({ default: null })
  country: string;

  @ApiProperty({
    example: 'state',
    description: 'The state of the user',
  })
  @Prop({ default: null })
  state: string;

  @ApiProperty({
    example: 'bayzid',
    description: 'The fullName of the Agent',
  })
  @Prop({ default: null })
  fullName: string;

  @ApiProperty({
    example: 'Agent',
    description: 'The role of the Agent',
  })
  @Prop({ default: null })
  role: string;

  @ApiProperty({
    example: 'Agent',
    description: 'The role of the Agent',
  })
  @Prop({ default: null })
  companyName: string;


  @ApiProperty({
    example: 'image.png',
    description: 'The image of the Agent',
  })
  @Prop({ default: "https://i.ibb.co/MnV4DcK/user.png" })
  image: string;


  @ApiProperty({
    example: 'image.png',
    description: 'The image of the Agent',
  })
  @Prop({ default: "https://i.ibb.co/MnV4DcK/user.png" })
  coverImage: string;


  @ApiProperty({
    example: '01676485383',
    description: 'The mobile number of the Agent',
  })
  @Prop({ default: null })
  mobile: string;

  @ApiProperty({
    example: '880',
    description: 'The mobile_code number of the user',
  })
  @Prop({ default: null })
  mobile_code: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The email of the Agent',
  })
  @Prop({ default: null })
  email: string;

  @ApiProperty({
    example: 'Bayzid12@',
    description: 'Provide a password',
  })
  @Prop({ default: null })
  password: string;

  @ApiProperty({
    example: 'Male',
    description: 'The gender of the Agent',
  })
  @Prop({ default: null })
  gender: string;

  @ApiProperty({
    example: 'Bio',
    description: 'The bio of the Agent',
  })
  @Prop({ default: null })
  bio: string;

  @Prop({ type: [] })
  @ApiProperty({
    type: [],
    description: 'The Identity Information list of image object of the Agent',
  })
  identity: [];

  @Prop({ type: [] })
  @ApiProperty({
    type: [],
    description: 'The speeking language of the Agent',
  })
  language: [];

  @ApiProperty({
    example: 'PT2056',
    description: 'The Patient unique ID',
  })
  @Prop()
  uniqueId: string;

  @Prop({ type: Number, default:0})
  @ApiProperty({
    type: Number,
    description: 'The total rating of agent',
  })
  totalrating: number;

  @Prop({ type: Number , default:0})
  @ApiProperty({
    type: Number,
    description: 'The avg rating of agent',
  })
  avgrating: number;

  @Prop({ type: Number , default:0})
  @ApiProperty({
    type: Number,
    description: 'The avg rating of agent',
  })
  totalReview: number;

  @Prop({ type: Number , default:0})
  credit: number;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  premium: Boolean;

  @Prop({ type: Number , default:0})
  followingBuyerCount: number;

  @Prop({ type: Number , default:0})
  followingAgentCount: number;

  @Prop({ type: Number , default:0})
  followerBuyerCount: number;

  @Prop({ type: Number , default:0})
  followerAgentCount: number;

  @Prop({ type: Number , default:0})
  @ApiProperty({
    type: Number,
    description: 'The avg rating of agent',
  })
  totalPost: number;

  @Prop({ type: Number , default:0})
  @ApiProperty({
    type: Number,
    description: 'The avg rating of agent',
  })
  totalSponsoredPost: number;

  @Prop({ type: Number , default:0})
  @ApiProperty({
    type: Number,
    description: 'The avg rating of agent',
  })
  totalUrgentPost: number;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  verified: boolean;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  reject: boolean;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  online: boolean;

  @ApiProperty({
    example: 'app or web',
    description: 'The agent singup device',
  })
  @Prop({ default: null })
  device: string;

  @ApiHideProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  emailVerified: Boolean | false;

  @ApiHideProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  verificationEmailSent: boolean;

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

export const AgentSchema = SchemaFactory.createForClass(Agent);


