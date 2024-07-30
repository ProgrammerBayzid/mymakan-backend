import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateUserDto {
  
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
  @IsNotEmpty()
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
  
  @ApiProperty({ example: 'test@test.com', description: 'Email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password of the user' })
   @IsOptional()
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
