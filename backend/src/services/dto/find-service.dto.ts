import { ApiProperty } from '@nestjs/swagger';
export class FindServiceDto {
  @ApiProperty({
    required: false,
  })
  keyword: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
