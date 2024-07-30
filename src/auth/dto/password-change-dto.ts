import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PasswordChangeDto {



    @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

  @ApiProperty({
    example: 'test@test.com',
    description: 'old password of the user',
  })
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @ApiProperty({
    example: 'newtest@test.com',
    description: 'new password of the user',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  newPassword: string;
}
