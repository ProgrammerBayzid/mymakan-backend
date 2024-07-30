import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsDto {
    @ApiProperty({
        type: String,
        description: 'The post comment',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}