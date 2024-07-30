import { PartialType } from '@nestjs/swagger';
import { CreatePostUserDto } from './create-post-user.dto';
import { ApiProperty,  } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { PostLocation } from 'src/post-agent/entities/post-location';

export class UpdatePostUserDto extends PartialType(CreatePostUserDto) {

    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsOptional()
      title?: string;
    
      @ApiProperty({
        example: 'the post description',
        description: 'The Post description',
      })
      @IsOptional()
      description?: string;
    
      @ApiProperty({
        example: 'sell or rent etc',
        description: 'The post for sell or rent etc',
      })
      @IsOptional()
      for?: string;
    
      @ApiProperty({
        type: [String],
        description: 'The images of post',
      })
      @IsOptional()
      @IsArray()
      image?: string[];
    
      @ApiProperty({
        type: [String],
        description: 'The tags of post',
      })
      @IsOptional()
      tags?: string[];
    
      @ApiProperty({
        type: PostLocation,
        description: 'The map location of post',
      })
      @IsOptional()
      location?: PostLocation;
    
      @ApiProperty({
        description: 'Indicates if the post is booked',
      })
      @IsOptional()
      booked?: boolean;
    
      @ApiProperty({
        description: 'Indicates if the post is for sell',
      })
      @IsOptional()
      sell?: boolean;
    
      
      @ApiProperty({
        description: 'Indicates if the post is for argent',
      })
      @IsString()
      @IsOptional()
      postType?: string;

      @ApiProperty({
        description: 'Indicates if the post is for argent',
      })
      @IsString()
      @IsOptional()
      type?: string;
    
      @ApiProperty()
      @IsString()
      @IsOptional()
      propertyCategory?: string;

      @ApiProperty()
      @IsString()
      @IsOptional()
      propertyType?: string;
    
      @ApiProperty()
      @IsString()
      @IsOptional()
      parking: string;
    
      @ApiProperty()
      @IsString()
      @IsOptional()
      sqft?: string;
    
      @ApiProperty()
      @IsString()
      @IsOptional()
      price?: string;
    
      @ApiProperty({
        type: [String],
        description: 'The tags of post',
      })
      @IsOptional()
      sellType?: String[];
    
      @ApiProperty({
        description: 'Linke count of post',
      })
      @IsOptional()
      like?: number;
}
