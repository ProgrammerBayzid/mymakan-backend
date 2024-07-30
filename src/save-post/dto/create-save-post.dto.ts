import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray, IsOptional } from "class-validator";
import mongoose from "mongoose";

export class CreateSavePostDto {

    @ApiProperty({
        type: String,
        description: 'The Agent ID',
      })
    @IsString()
    @IsOptional()
    readonly savePostId: string;

}
