/**Get all posts action */
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

/**Search action */
export const SEARCH_POSTS_REQUEST = "SEARCH_POSTS_REQUEST";
export const SEARCH_POSTS_SUCCESS = "SEARCH_POSTS_SUCCESS";
export const SEARCH_POSTS_FAILURE = "SEARCH_POSTS_FAILURE";

/**Post detail */
export const GET_POST_BY_ID_REQUEST = "GET_POST_BY_ID_REQUEST";
export const GET_POST_BY_ID_SUCCESS = "GET_POST_BY_ID_SUCCESS";
export const GET_POST_BY_ID_FAILURE = "GET_POST_BY_ID_FAILURE";

export const getPostsRequest = (page, size) => ({
  type: GET_POSTS_REQUEST,
  payload: { page, size },
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const searchPostsRequest = (keyword, page, size) => ({
  type: SEARCH_POSTS_REQUEST,
  payload: { keyword, page, size },
});

export const searchPostsSuccess = (posts) => ({
  type: SEARCH_POSTS_SUCCESS,
  payload: posts,
});

export const searchPostsFailure = (error) => ({
  type: SEARCH_POSTS_FAILURE,
  payload: error,
});

export const getPostByIdRequest = (postId) => ({
  type: GET_POST_BY_ID_REQUEST,
  payload: postId,
});

export const getPostByIdSuccess = (post) => ({
  type: GET_POST_BY_ID_SUCCESS,
  payload: post,
});

export const getPostByIdFailure = (error) => ({
  type: GET_POST_BY_ID_FAILURE,
  payload: error,
});
