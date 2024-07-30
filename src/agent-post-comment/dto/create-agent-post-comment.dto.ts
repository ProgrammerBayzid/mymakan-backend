import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAgentPostCommentDto {
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      agentPostId: string;
      
    @ApiProperty({
        example: 'the post title',
        description: 'The Post title',
      })
      @IsString()
      @IsNotEmpty()
      comment: string;

}
