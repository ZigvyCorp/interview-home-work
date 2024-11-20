export type ResponseType<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type ResponseListType<T> = {
  data: ResponseListPayload<T>;
  success: boolean;
  message?: string;
};

export type ResponseListPayload<T> = {
  list: T[];
  paging: ResponsePaging;
};

export type ResponsePaging = {
  total: number;
  skip: number;
  pages: number;
  limit: number;
};
