import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveProjectDto {
    @ApiProperty()
    @IsString()
    id: string;
}
