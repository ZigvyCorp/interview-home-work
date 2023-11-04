import { PaginationDto, PaginationQueryDto } from "@dto/Pagination";
import { PaginationResponseDto } from "@dto/PaginationResponseDto";

export const getSkipAndTake = (page: number, pageSize: number): PaginationQueryDto => {
  const skip = (page - 1) * pageSize;
  return {
    take: pageSize,
    skip: Number(skip),
  };
};

export const getPageResponse = <T extends object>(
  pagination: PaginationDto,
  count: number,
  rows: T[],
): PaginationResponseDto<T> => {

  let totalPage = Math.ceil(count / pagination.pageSize);
  if (pagination.page <= 0) {
    totalPage = 1
  }
  if (rows.length === 0) {
    totalPage = 0;
  }
  
  return { count, page: Number(pagination.page), rows, totalPage: Number(totalPage) };
};

