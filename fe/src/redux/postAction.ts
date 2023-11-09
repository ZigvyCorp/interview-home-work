import { PAGINATION, POST_DETAIL, POST_LIST } from "./constant.ts";

export const postList = ({
  perPage,
  page,
  key,
}: {
  perPage?: number;
  page?: number;
  key?: number;
}) => {
  return {
    type: POST_LIST,
    data: { perPage, page, key },
  };
};

export const postDetail = (id: string) => {
  return {
    type: POST_DETAIL,
    data: { id },
  };
};

export const pagination = ({
  perPage,
  page,
  key,
}: {
  perPage?: number;
  page?: number;
  key?: string;
}) => {
  return {
    type: PAGINATION,
    data: { perPage, page, key },
  };
};
