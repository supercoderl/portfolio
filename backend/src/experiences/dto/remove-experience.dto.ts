import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveExperienceDto {
    @ApiProperty()
    @IsArray()
    ids: [];
}
