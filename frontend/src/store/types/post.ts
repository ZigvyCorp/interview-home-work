import { IPostWithRelations } from "src/interfaces/post";

export interface IPostState {
  post: IPostWithRelations | null;
  posts: IPostWithRelations[];
  totalCount: number;
  isLoading: boolean;
  query: IPostPaginationQuery;
  postId: number;
}

export interface IPostPaginationQuery {
  titleSearch: string;
  start: number;
  limit: number;
}

export const POSTS = "posts";

export const PAGINATE_POST = `${POSTS}/paginatePostStart`;
export const POST_DETAIL = `${POSTS}/getPostDetailStart`;
export const CREATE_POST = `${POSTS}/createPostStart`;
