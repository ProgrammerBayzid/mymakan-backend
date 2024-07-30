import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class AgentRating {
    @Prop({ type: Number })
    @ApiProperty({
      type: Number,
      description: 'The total rating of agent',
    })
    rating: number;
  
    @Prop({ type: Number })
    @ApiProperty({
      type: Number,
      description: 'The avg rating of agent',
    })
    avgrating: number;

  }