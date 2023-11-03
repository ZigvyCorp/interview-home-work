export class BasePaginationResponseDto {
  page: number;
  count: number;
  totalPage: number;
}

export class PaginationResponseDto<T> extends BasePaginationResponseDto {
  rows: T[];
}
