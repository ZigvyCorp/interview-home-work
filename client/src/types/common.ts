export interface ListResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  message?: string;
}

export interface IQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}
