
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { Agent } from 'src/agent/entities/agent.entity';
import { IsBoolean, IsString } from 'class-validator';
import { PostLocation } from './post-location';

export type PostAgentDocument = PostAgent & Document;

@Schema({ timestamps: true })
export class PostAgent {
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
        type: Agent,
        description: 'The Agent ID',
      })
    @Prop({ type:  mongoose.Schema.Types.ObjectId, ref: 'Agent' })
    agentId: string;


  @ApiProperty({
    type: [Object],
    description: 'The users who liked the post',
  })
  @Prop({ 
    type: [{ 
      _id: { type: String, required: true },
      type: { type: String, required: true },
      url: { type: String, required: true },
    }], 
    default: [] 
  })
  media: {
    _id: { type: String, required: true },
      type: { type: String, required: true },
      url: { type: String, required: true },
  }[];

    @Prop({ type: [] })
    @ApiProperty({
      type: [],
      description: 'The tags of post',
    })
    tags: [];

    @Prop({ type: PostLocation })
    @ApiProperty({
      type: PostLocation,
      description: 'The map location of post',
    })
    location:PostLocation;

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

   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgentPostComment' }],  default:[]}) 
    @ApiProperty({
      type: [],
      description: 'The comment of post',
    })
    comment:string[];

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

export const PostAgentSchema = SchemaFactory.createForClass(PostAgent);


// PostAgentSchema.pre('findOne', autoPopulate);
// PostAgentSchema.pre('find', autoPopulate);

// function autoPopulate(next) {
//   this.populate('agentId').populate('comment');
//   next();
// }