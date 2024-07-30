import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateAllPostCommentDto  {
    
    @ApiProperty({
        example: 'update the comment',
        description: 'update the comment',
      })
      @IsOptional()
      comment?: string;
}
