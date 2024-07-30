import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserPostCommentDto } from './create-user-post-comment.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserPostCommentDto  {

    @ApiProperty({
        example: 'update the comment',
        description: 'update the comment',
      })
      @IsOptional()
      comment?: string;
}




