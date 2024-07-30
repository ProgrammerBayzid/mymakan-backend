import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserResendOTPEmaildDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
