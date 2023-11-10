import { Query } from 'express-serve-static-core';

export interface PaginationReqQuery extends Query {
  page?: string;
  limit?: string;
}
