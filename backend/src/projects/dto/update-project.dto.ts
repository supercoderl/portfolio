import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProjectDto {
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
    updatedAt: Date;
}
