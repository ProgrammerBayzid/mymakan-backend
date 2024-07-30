import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserPostCommentReplyDto } from './create-user-post-comment-reply.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserPostCommentReplyDto {
    @ApiProperty({
        example: 'the post comment reply title',
        description: 'The Post comment reply title',
      })
      @IsString()
      @IsOptional()
      reply: string;
}
