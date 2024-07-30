import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateAgentDto {

  @ApiProperty({ example: 'country', description: 'country of the user' })
  // @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty({ example: 'image', description: 'image of the user' })
  // @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: 'state', description: 'country of the user' })
  // @IsNotEmpty()
  @IsString()
  state: string;
  
  @ApiProperty({ example: 'mobile', description: 'mobile of the agent' })
  // @IsNotEmpty()
  @IsString()
  mobile: string;

  @ApiProperty({ example: 'mobile_code', description: 'mobile_code of the user' })
  // @IsNotEmpty()
  @IsString()
  mobile_code: string;

  @ApiProperty({ example: 'fullName', description: 'fullName of the agent' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'role', description: 'role of the agent' })
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({ example: 'web or app', description: 'device of the user' })
  @IsNotEmpty()
  @IsString()
  device: string;

  @ApiProperty({ example: 'role', description: 'role of the agent' })
  // @IsNotEmpty()
  @IsString()
  companyName: string;
  
  @ApiProperty({ example: 'test@test.com', description: 'Email of the agent' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password of the agent' })
  // @IsNotEmpty()
  @IsString()
  password: string;


  @ApiProperty({
    example: 'DT2056',
    description: 'The Doctor unique ID',
  })
  @IsString()
  @IsNotEmpty()
  uniqueId: string;


}
