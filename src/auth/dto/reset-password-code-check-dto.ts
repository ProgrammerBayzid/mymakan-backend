import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserResetPasswordCodeCheckDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email of the User' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'Code for resetting the password',
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}
