export const SEARCH_BLOG_REQUEST = 'SEARCH_BLOG_REQUEST';
export const SEARCH_BLOG_SUCCESS = 'SEARCH_BLOG_SUCCESS';
export const SEARCH_BLOG_FAILURE = 'SEARCH_BLOG_FAILURE';

interface SearchBlogRequestAction {
  type: typeof SEARCH_BLOG_REQUEST;
  payload: string; 
}

interface SearchBlogSuccessAction {
  type: typeof SEARCH_BLOG_SUCCESS;
  payload: any[]; 
}

interface SearchBlogFailureAction {
  type: typeof SEARCH_BLOG_FAILURE;
  payload: Error;
}

export type SearchBlogActionTypes =
  | SearchBlogRequestAction
  | SearchBlogSuccessAction
  | SearchBlogFailureAction;

export const searchBlogRequest = (tag: string): SearchBlogRequestAction => ({
  type: SEARCH_BLOG_REQUEST,
  payload: tag,
});

export const searchBlogSuccess = (data: any[]): SearchBlogSuccessAction => ({
  type: SEARCH_BLOG_SUCCESS,
  payload: data,
});

export const searchBlogFailure = (error: Error): SearchBlogFailureAction => ({
  type: SEARCH_BLOG_FAILURE,
  payload: error,
});