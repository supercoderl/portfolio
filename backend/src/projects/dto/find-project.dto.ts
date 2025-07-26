import { ApiProperty } from '@nestjs/swagger';
export class FindProjectDto {
    @ApiProperty({
        required: false,
    })
    keyword: string;

    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;
}
