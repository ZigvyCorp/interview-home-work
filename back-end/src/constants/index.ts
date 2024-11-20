import { RequestPaging } from '../interfaces';

export const DEFAULT_TEXT_SEARCH = '';

export const DEFAULT_PAGING: Pick<RequestPaging, 'paging'> = {
  paging: {
    limit: 10,
    skip: 0,
  },
};

export enum PAGING {
  SKIP = 0,
  LIMIT = 10,
}
