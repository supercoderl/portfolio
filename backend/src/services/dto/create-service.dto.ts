import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  icon: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty()
  createdAt: Date;

  updatedAt: Date;
}
