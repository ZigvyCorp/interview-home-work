import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PaginationOptionsDto {
  @ApiProperty()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  page: number = 1;

  @ApiProperty()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  take: number = 10;
}

interface IPaginationSkipParam {
  page: number;
  take: number;
}

export const getSkip = ({ page, take }: IPaginationSkipParam) =>
  (page - 1) * take;

interface IPaginationMeta {
  total: number;
  page: number;
  take: number;
}
export class PaginationData<T> {
  data: T[];
  meta: IPaginationMeta;

  constructor(data: T[], total: number, page: number, take: number) {
    this.data = data;
    this.meta = { total, page, take };
  }
}
