import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserPostCommentReplyDto {
    @ApiProperty({
        example: 'the post comment title',
        description: 'The Post comment title',
      })
      @IsString()
      @IsNotEmpty()
      userPostCommentId: string;
      
    @ApiProperty({
        example: 'The Post comment reply title',
        description: 'The Post comment reply title',
      })
      @IsString()
      @IsNotEmpty()
      reply: string;
}
