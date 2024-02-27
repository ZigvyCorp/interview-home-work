export type ActionType<T> = {
  type: string;
  payload: T;
};

export type DataResponse<T> = {
  data: {
    status: 200 | 400;
    data: T | null;
    message: string;
  };
};
