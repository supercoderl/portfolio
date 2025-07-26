import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveProjectDto {
    @ApiProperty()
    @IsArray()
    ids: [];
}
