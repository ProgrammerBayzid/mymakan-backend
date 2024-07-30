import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserForgotPasswordDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email of the User' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
