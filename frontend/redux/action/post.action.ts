export const FETCH_POSTS_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERR = "FETCH_POSTS_ERR";

export interface IPost {
  name: string;
  id: string;
  title: string;
  body: string;
  created_at: string;
}

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: IPost[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFail = (err: any) => ({
  type: FETCH_POSTS_ERR,
  payload: err,
});
