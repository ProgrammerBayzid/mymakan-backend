import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class PostLocation {
    @Prop({ type: Number })
    @ApiProperty({
      type: Number,
      description: 'The latitude of the post location',
    })
    lat: number;
  
    @Prop({ type: Number })
    @ApiProperty({
      type: Number,
      description: 'The longitude of the post location',
    })
    lng: number;
  
    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The formatted address of the post location',
    })
    formatted_address: string;

    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The country of the post',
    })
    country: string;

    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The state of the post',
    })
    state: string;

    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'The state of the post',
    })
    city: string;


    @Prop({ type: String })
    @ApiProperty({
      type: String,
      description: 'Towers or Building Name',
    })
    towersorBuildingName: string;

  }