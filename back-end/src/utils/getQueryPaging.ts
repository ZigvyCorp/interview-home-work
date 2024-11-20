import { PAGING } from '../constants';
import { ResponsePaging } from '../interfaces';

export const getQueryPaging = (
  total: number,
  limit = PAGING.LIMIT,
  skip = PAGING.SKIP
): ResponsePaging => {
  const pages = Math.ceil(total / limit);
  return { total, limit, skip, pages };
};
