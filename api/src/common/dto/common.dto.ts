import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FetchByIdDto {
  @ApiProperty({
    type: String,
    description: 'Unique identifier',
  })
  id: string;
}

export class QueryParamsDto {
  @ApiPropertyOptional({
    type: Number,
    description: 'Page number',
  })
  page: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Limit number',
  })
  limit: number;
}
