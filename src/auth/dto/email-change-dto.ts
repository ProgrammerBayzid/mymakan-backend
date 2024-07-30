import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class EmailChangeDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  oldEmail: string;

  @ApiProperty({ example: 'newtest@test.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  newEmail: string;

  @ApiProperty({ example: '12345678', description: 'Password of the user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
