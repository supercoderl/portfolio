import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    githubUrl?: string;

    @ApiProperty()
    liveDemoUrl?: string;

    @ApiProperty()
    createdAt: Date;
}
