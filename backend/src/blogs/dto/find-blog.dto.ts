import { ApiProperty } from '@nestjs/swagger';
export class FindBlogDto {
  @ApiProperty({
    required: false,
  })
  keyword: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
