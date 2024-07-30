import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateAgentDto } from './create-agent.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAgentDto extends PartialType(CreateAgentDto) {
    @ApiPropertyOptional({
        example: 'country',
        description: 'The country of the user',
      })
      @IsOptional()
      @IsString()
      country?: string;
    
      @ApiPropertyOptional({
        example: 'state',
        description: 'The state of the user',
      })
      @IsOptional()
      @IsString()
      state?: string;
    
      @ApiPropertyOptional({
        example: 'bayzid',
        description: 'The fullName of the Agent',
      })
      @IsOptional()
      @IsString()
      fullName?: string;
    
      @ApiPropertyOptional({
        example: 'Agent',
        description: 'The role of the Agent',
      })
      @IsOptional()
      @IsString()
      role?: string;
    
      @ApiPropertyOptional({
        example: 'Agent',
        description: 'The role of the Agent',
      })
      @IsOptional()
      @IsString()
      companyName?: string;
    
      @ApiPropertyOptional({
        example: 'image.png',
        description: 'The image of the Agent',
      })
      @IsOptional()
      @IsString()
      image?: string;

      @ApiPropertyOptional({
        example: 'image.png',
        description: 'The image of the Agent',
      })
      @IsOptional()
      @IsString()
      coverImage?: string;
    
      @ApiPropertyOptional({
        example: '01676485383',
        description: 'The mobile number of the Agent',
      })
      @IsOptional()
      @IsString()
      mobile?: string;
    
      @ApiPropertyOptional({
        example: '880',
        description: 'The mobile_code number of the user',
      })
      @IsOptional()
      @IsString()
      mobile_code?: string;
    
      @ApiPropertyOptional({
        example: 'bayzid@gmail.com',
        description: 'The email of the Agent',
      })
      @IsOptional()
      @IsString()
      email?: string;
    
      @ApiPropertyOptional({
        example: 'Male',
        description: 'The gender of the Agent',
      })
      @IsOptional()
      @IsString()
      gender?: string;

      @ApiPropertyOptional({
        example: 'bio',
        description: 'The bio of the Agent',
      })
      @IsOptional()
      @IsString()
      bio?: string;

      @ApiPropertyOptional({
        type: [],
        description: 'The Identity Information of the agent',
      })
      @IsOptional()
      identity?: [];
    
      @ApiPropertyOptional({
        example: 'PT2056',
        description: 'The Patient unique ID',
      })
      @IsOptional()
      @IsString()
      uniqueId?: string;
    
      @ApiPropertyOptional({
        example: false,
        description: 'Verification status of the Agent',
      })
      @IsOptional()
      @IsBoolean()
      verified?: boolean;
    
      @ApiPropertyOptional({
        example: false,
        description: 'Rejection status of the Agent',
      })
      @IsOptional()
      @IsBoolean()
      reject?: boolean;
    
      @ApiPropertyOptional({
        example: '1234',
        description: 'Verification code sent to the Agent',
      })
      @IsOptional()
      @IsString()
      verificationCode?: string;
    
      @ApiPropertyOptional({
        example: false,
        description: 'Status of verification email sent',
      })
      @IsOptional()
      @IsBoolean()
      verificationEmailSent?: boolean;
}
