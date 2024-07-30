import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateAllPostCommentReplyDto {
    @ApiProperty({
        example: 'the post comment title',
        description: 'The Post comment title',
      })
      @IsString()
      @IsNotEmpty()
      postCommentId: string;
      
    @ApiProperty({
        example: 'The Post comment reply title',
        description: 'The Post comment reply title',
      })
      @IsString()
      @IsNotEmpty()
      reply: string;
}
