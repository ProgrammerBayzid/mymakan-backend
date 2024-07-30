import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Flag {
  
    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The flag png link',
    })
    png: string;

    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The flag svg link',
    })
    svg: string;

    

  }