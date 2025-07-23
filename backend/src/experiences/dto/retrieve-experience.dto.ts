import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveExperienceDto {
  @ApiProperty()
  @IsString()
  id: string;
}
