import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';
import { UserReview } from './review.entity';

export type UserDocument = HydratedDocument<User>;
@Schema({
  timestamps: true,
})
export class User {
  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the user',
  })
  _id: string;

  @ApiProperty({
    example: 'bayzid',
    description: 'The fullName of the user',
  })
  @Prop({ default: null })
  fullName: string;

  @ApiProperty({
    example: 'Agent',
    description: 'The role of the user',
  })
  @Prop({ default: null })
  role: string;

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
    example: 'image.png',
    description: 'The image of the user',
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
    description: 'The mobile number of the user',
  })
  @Prop({ default: null })
  mobile: string;

  @ApiProperty({
    example: '01676485383',
    description: 'The mobile number of the user',
  })
  @Prop({ default: null })
  mobile_code: string;

  @ApiProperty({
    example: 'bayzid@gmail.com',
    description: 'The email of the user',
  })
  @Prop({ default: null })
  email: string;

  @Prop({ required: [false, 'User password is required'], default: null })
  password: string;

  @ApiProperty({
    example: 'Male',
    description: 'The gender of the user',
  })
  @Prop({ default: null })
  gender: string;

  @ApiProperty({
    example: 'Bio',
    description: 'The bio of the Agent',
  })
  @Prop({ default: null })
  bio: string;

  @ApiProperty({
    example: 'PT2056',
    description: 'The Patient unique ID',
  })
  @Prop()
  uniqueId: string;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  verified: boolean;


  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  reject: boolean;

  @ApiProperty({
    example: 'app or web',
    description: 'The user singup device',
  })
  @Prop({ default: null })
  device: string;

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

  @Prop({ type: Number , default:0})
  credit: number;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  premium: Boolean;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  online: boolean;

  @Prop({ type: Number , default:0})
  followingBuyerCount: number;

  @Prop({ type: Number , default:0})
  followingAgentCount: number;

  @Prop({ type: Number , default:0})
  followerBuyerCount: number;

  @Prop({ type: Number , default:0})
  followerAgentCount: number;


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

export const UserSchema = SchemaFactory.createForClass(User);
