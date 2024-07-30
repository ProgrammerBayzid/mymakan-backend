import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { PostLocation } from '../entities/post-location';

export class CreatePostAgentDto {
  @ApiProperty({
    example: 'the post title',
    description: 'The Post title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'the post description',
    description: 'The Post description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'sell or rent etc',
    description: 'The post for sell or rent etc',
  })
  @IsString()
  @IsNotEmpty()
  for: string;

  @ApiProperty({
    description: 'The media items associated with the post',
    type: [
      {
        _id: { type: String, required: true },
        type: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    example: [
      {
        _id: '609d0f2f2f3b1c6b6d7d91d5',
        type: 'image',
        url: 'https://example.com/media/image.jpg',
      },
      {
        _id: '609d0f2f2f3b1c6b6d7d91d6',
        type: 'video',
        url: 'https://example.com/media/video.mp4',
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MediaItem)
  readonly media: MediaItem[];

  @ApiProperty({
    type: [String],
    description: 'The tags of post',
  })
  @IsArray()
  tags: string[];

  @ApiProperty({
    type: PostLocation,
    description: 'The map location of post',
  })
  @ValidateNested()
  @Type(() => PostLocation)
  @IsOptional()
  location: PostLocation;


  @ApiProperty({
    description: 'Indicates if the post is for argent',
  })
  @IsString()
  postType: string;
  
  @ApiProperty({
    description: 'Indicates if the post is for argent',
  })
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  propertyCategory: string;

  @ApiProperty()
  @IsString()
  propertyType: string;

  @ApiProperty()
  @IsString()
  parking: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  sqft: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  price: string;

  @ApiProperty({
    type: [String],
    description: 'The tags of post',
  })
  @IsOptional()
  sellType: String[];

}


class MediaItem {
  @ApiProperty({
    description: 'The unique identifier for the media item',
    example: '609d0f2f2f3b1c6b6d7d91d5',
  })
  @IsString()
  readonly _id: string;

  @ApiProperty({
    description: 'The type of the media item (e.g., image, video)',
    example: 'image',
  })
  @IsString()
  readonly type: string;

  @ApiProperty({
    description: 'The URL of the media item',
    example: 'https://example.com/media/image.jpg',
  })
  @IsString()
  readonly url: string;
}
