export interface ListResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  message?: string;
}
