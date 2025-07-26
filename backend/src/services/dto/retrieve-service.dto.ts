import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveServiceDto {
  @ApiProperty()
  @IsString()
  id: string;
}
