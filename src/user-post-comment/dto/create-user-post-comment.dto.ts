
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserPostCommentDto {
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      userPostId: string;
      
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      comment: string;

}
