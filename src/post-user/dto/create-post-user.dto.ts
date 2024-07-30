import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { PostLocation } from 'src/post-agent/entities/post-location';

export class CreatePostUserDto {

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
    type: [String],
    description: 'The images of post',
  })
  @IsOptional()
  @IsArray()
  image: string[];

  @ApiProperty({
    type: [String],
    description: 'The images of post',
  })
  @IsOptional()
  @IsArray()
  video: string[];


  @ApiProperty({
    type: [String],
    description: 'The images of post',
  })
  @IsOptional()
  @IsArray()
  doc: string[];

  @ApiProperty({
    type: [String],
    description: 'The tags of post',
  })
  @IsArray()
  @IsString({ each: true })
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
