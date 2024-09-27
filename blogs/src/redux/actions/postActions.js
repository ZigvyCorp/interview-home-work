export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const SET_PAGE = "SET_PAGE";

export const fetchPostsRequest = (page) => ({
  type: FETCH_POSTS_REQUEST,
  payload: page,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
