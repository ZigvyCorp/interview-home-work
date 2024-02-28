import { Action } from 'redux';

export const FETCH_BLOG_REQUEST = 'FETCH_BLOG_REQUEST';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';

interface FetchBlogRequestAction extends Action<typeof FETCH_BLOG_REQUEST> {}

interface FetchBlogSuccessAction extends Action<typeof FETCH_BLOG_SUCCESS> {
  payload: any; 
}

interface FetchBlogFailureAction extends Action<typeof FETCH_BLOG_FAILURE> {
  payload: Error;
}

export type BlogActionTypes =
  | FetchBlogRequestAction
  | FetchBlogSuccessAction
  | FetchBlogFailureAction;

export const fetchBlog = (): FetchBlogRequestAction => ({
  type: FETCH_BLOG_REQUEST,
});

export const fetchBlogSuccess = (data: any): FetchBlogSuccessAction => ({
  type: FETCH_BLOG_SUCCESS,
  payload: data,
});

export const fetchBlogFailure = (error: Error): FetchBlogFailureAction => ({
  type: FETCH_BLOG_FAILURE,
  payload: error,
});


export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE';

interface FetchCommentRequestAction extends Action<typeof FETCH_COMMENT_REQUEST> {}

interface FetchCommentSuccessAction extends Action<typeof FETCH_COMMENT_SUCCESS> {
  payload: any; 
}

interface FetchCommentFailureAction extends Action<typeof FETCH_COMMENT_FAILURE> {
  payload: Error;
}

export type CommentActionTypes =
  | FetchCommentRequestAction
  | FetchCommentSuccessAction
  | FetchCommentFailureAction;

export const fetchComment = (): FetchCommentRequestAction => ({
  type: FETCH_COMMENT_REQUEST,
});

export const fetchCommentSuccess = (data: any): FetchCommentSuccessAction => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: data,
});

export const fetchCommentFailure = (error: Error): FetchCommentFailureAction => ({
  type: FETCH_COMMENT_FAILURE,
  payload: error,
});

export const FETCH_BLOG_DETAIL_REQUEST = 'FETCH_BLOG_DETAIL_REQUEST';
export const FETCH_BLOG_DETAIL_SUCCESS = 'FETCH_BLOG_DETAIL_SUCCESS';
export const FETCH_BLOG_DETAIL_FAILURE = 'FETCH_BLOG_DETAIL_FAILURE';

interface FetchBlogDetailRequestAction extends Action<typeof FETCH_BLOG_DETAIL_REQUEST> {
  payload: string; 
}

interface FetchBlogDetailSuccessAction extends Action<typeof FETCH_BLOG_DETAIL_SUCCESS> {
  payload: any; 
}

interface FetchBlogDetailFailureAction extends Action<typeof FETCH_BLOG_DETAIL_FAILURE> {
  payload: Error;
}

export type BlogDetailActionTypes =
  | FetchBlogDetailRequestAction
  | FetchBlogDetailSuccessAction
  | FetchBlogDetailFailureAction;

export const fetchBlogDetailRequest = (id: string): FetchBlogDetailRequestAction => ({
  type: FETCH_BLOG_DETAIL_REQUEST,
  payload: id,
});

export const fetchBlogDetailSuccess = (data: any): FetchBlogDetailSuccessAction => ({
  type: FETCH_BLOG_DETAIL_SUCCESS,
  payload: data,
});

export const fetchBlogDetailFailure = (error: Error): FetchBlogDetailFailureAction => ({
  type: FETCH_BLOG_DETAIL_FAILURE,
  payload: error,
});
