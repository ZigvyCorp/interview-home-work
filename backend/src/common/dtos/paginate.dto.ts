import { Transform } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class PaginateQueryDto {
  @IsDefined()
  @IsNumber({})
  @Transform(({ value }) => {
    return Number(value);
  })
  readonly limit: string;

  @IsDefined()
  @IsNumber({})
  @Transform(({ value }) => {
    return Number(value);
  })
  readonly page: string;

  @IsString()
  readonly keyword?: string;
}
