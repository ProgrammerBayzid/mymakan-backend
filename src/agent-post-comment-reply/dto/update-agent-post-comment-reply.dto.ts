import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAgentPostCommentReplyDto } from './create-agent-post-comment-reply.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAgentPostCommentReplyDto  {
     
    @ApiProperty({
        example: 'the post comment reply title',
        description: 'The Post comment reply title',
      })
      @IsString()
      @IsOptional()
      reply: string;

}
