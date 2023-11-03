export type RequestPaging = {
  textSearch?: string;
  paging?: {
    limit?: number;
    skip?: number;
  };
};

export type * from './blog.interface';
export type * from './user.interface';
export type * from './comment.interface';
export type * from './responseType';
