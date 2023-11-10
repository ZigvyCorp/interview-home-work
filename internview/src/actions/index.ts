// ActionTypes
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export interface Post {
  created_at: any;
  tags: any;
  content: string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}

// actions

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (data: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailure = (error: string) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});