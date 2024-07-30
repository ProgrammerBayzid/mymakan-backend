import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class AgentSignUpDto {


  @ApiProperty({ example: 'country', description: 'country of the user' })
  @IsOptional()
  @IsString()
  country: string;


  @ApiProperty({ example: 'image', description: 'image of the user' })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ example: 'state', description: 'country of the user' })
  @IsOptional()
  @IsString()
  state: string;

  @ApiProperty({ example: 'mobile', description: 'mobile of the user' })
  @IsOptional()
  @IsString()
  mobile: string;

  @ApiProperty({ example: 'mobile_code', description: 'mobile_code of the user' })
  @IsOptional()
  @IsString()
  mobile_code: string;

  @ApiProperty({ example: 'fullName', description: 'fullName of the user' })
  @IsOptional()
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'role', description: 'role of the user' })
  @IsNotEmpty()
  @IsString()
  role: string;
  @ApiProperty({ example: 'web or app', description: 'device of the user' })
  @IsNotEmpty()
  @IsString()
  device: string;

  @ApiProperty({ example: 'companyName', description: 'companyName of the user' })
  @IsOptional()
  @IsString()
  companyName: string;

  @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password of the user' })
  @IsOptional()
  @IsString()
  @MinLength(8)
  password: string;
}
