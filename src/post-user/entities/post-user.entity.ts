import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { IsArray, IsBoolean, IsString } from 'class-validator';
import { PostLocation } from 'src/post-agent/entities/post-location';
import { User } from 'src/user/entities/user.entity';

export type PostUserDocument = PostUser & Document;

@Schema({ timestamps: true })
export class PostUser {

  @ApiProperty({
    example: '5ff48e093ecb8200f8b0fff3',
    description: 'The unique identifier of the post',
  })
  _id: string;

  @ApiProperty({
    example: 'the post title',
    description: 'The Post title',
  })
  @Prop()
  title: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  role: string;

  @ApiProperty({
    example: 'the post description',
    description: 'The Post description',
  })
  @Prop()
  description: string;

  @ApiProperty({
    example: 'sell or rent etc',
    description: 'The post for sell or rent etc',
  })
  @Prop()
  for: string;

  @ApiProperty({
    type: User,
    description: 'The User ID',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @ApiProperty({
    type: [String],
    description: 'The images of post',
  })
  @Prop({ type: [String], })
  @IsArray()
  image: string[];

  @ApiProperty({
    type: [String],
    description: 'The images of post',
  })
  @Prop({ type: [String], })
  @IsArray()
  video: string[];


  @ApiProperty({
    type: [String],
    description: 'The images of post',
  })
  @Prop({ type: [String], })
  @IsArray()
  doc: string[];

  @ApiProperty({
    type: [String],
    description: 'The tags of post',
  })
  @Prop({ type: [String], required: false })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({
    type: PostLocation,
    description: 'The map location of post',
  })
  @Prop({ type: PostLocation })
  location: PostLocation;

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  booked: boolean;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  postType: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  type: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  propertyCategory: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  propertyType: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  parking: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  sqft: string;

  @ApiProperty()
  @Prop({ type: String })
  @IsString()
  price: string;

  @Prop({ type: [String] })
  @ApiProperty({
    type: [String],
    description: 'The tags of post',
  })
  sellType: String[];

  @ApiProperty()
  @Prop({ type: SchemaTypes.Boolean, default: false })
  @IsBoolean()
  sell: boolean;

  @ApiProperty({
    type: [String],
    description: 'The comment of post',
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserPostComment' }], default: [] })
  comment: string[];

  @Prop({ default: 0 })
  likeCount: number;

  @ApiProperty({
    type: [Object],
    description: 'The users who liked the post',
  })
  @Prop({ 
    type: [{ 
      _id: { type: String, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      role: { type: String, required: true }
    }], 
    default: [] 
  })
  likedBy: {
    _id: string, 
    name: string,
    image: string,
    role: string
  }[];

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

export const PostUserSchema = SchemaFactory.createForClass(PostUser);
