import { IQueryParams } from 'src/common/interface/common.interface';

export interface IQueryParamsResult {
  skip: number;
  take: number;
  page: number;
  limit: number;
  search: string;
}

export function getQueryParamsResult(queryParams: IQueryParams): IQueryParamsResult {
  const page = parseInt(queryParams.page as unknown as string, 10) || 1;
  const limit = parseInt(queryParams.limit as unknown as string, 10) || 10;
  const search = queryParams.search || '';
  const take = limit;
  const skip = (page - 1) * limit;
  return { skip, take, search, page, limit };
}
