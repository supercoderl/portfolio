import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveBlogDto {
    @ApiProperty()
    @IsArray()
    ids: [];
}
