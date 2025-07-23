import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class UpdateExperienceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company: string;

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
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isCurrent: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty()
  updatedAt: Date;
}
