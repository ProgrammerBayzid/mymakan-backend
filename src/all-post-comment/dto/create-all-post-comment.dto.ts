import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAllPostCommentDto {
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      postId: string;
      
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      comment: string;

}
