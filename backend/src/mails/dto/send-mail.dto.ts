import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SendMailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  from: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
