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
  const totalPage = pagination.page > 0 ? Math.ceil(count / pagination.pageSize) : 1;
  return { count, page: Number(pagination.page), rows, totalPage: Number(totalPage) };
};

