import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAgentPostCommentDto } from './create-agent-post-comment.dto';
import { IsOptional } from 'class-validator';

export class UpdateAgentPostCommentDto {

    @ApiProperty({
        example: 'update the comment',
        description: 'update the comment',
      })
      @IsOptional()
      comment?: string;
}
