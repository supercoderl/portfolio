import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveServiceDto {
    @ApiProperty()
    @IsArray()
    ids: [];
}
