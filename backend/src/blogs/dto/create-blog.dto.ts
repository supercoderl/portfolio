import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    coverImage: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    publishedAt: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    tags: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    viewCount: number;

    @ApiProperty()
    createdAt: Date;

    updatedAt: Date;
}
