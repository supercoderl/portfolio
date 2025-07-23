import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveBlogDto {
  @ApiProperty()
  @IsString()
  id: string;
}
