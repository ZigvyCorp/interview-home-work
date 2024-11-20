import { ParamsDictionary, Query } from 'express-serve-static-core';
import { BlogAudience } from '~/constants/enum';
import { PaginationReqQuery } from './Common.requests';

// Body: Tạo blog
export interface CreateBlogReqBody {
  title: string;
  content: string;
  audience?: BlogAudience;
}

// Body: Cập nhật blog
export interface UpdateBlogReqBody {
  title?: string;
  content?: string;
  audience?: BlogAudience;
}

// Params: Blog ID
export interface BlogIdReqParams extends ParamsDictionary {
  blog_id: string;
}

// Body: Xoá blog (một hoặc nhiều)
export interface DeleteBlogsReqBody {
  blog_ids: string[];
}

// Query: Lấy danh sách blog
export interface GetBlogsQuery extends PaginationReqQuery {
  title?: string;
}
