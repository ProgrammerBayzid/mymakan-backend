import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserLoginWithGmailDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
