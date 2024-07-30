import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAllPostCommentReplyDto } from './create-all-post-comment-reply.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAllPostCommentReplyDto  {
    @ApiProperty({
        example: 'the post comment reply title',
        description: 'The Post comment reply title',
      })
      @IsString()
      @IsOptional()
      reply: string;
}
