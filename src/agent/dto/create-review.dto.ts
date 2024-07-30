import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateAgentReviewDto {

  @ApiProperty({ example: 'rating', description: 'rating of the agent' })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({ example: 'content', description: 'content of the agent' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: 'agentid', description: 'agentid' })
  @IsNotEmpty()
  @IsString()
  agentId: string;
}
