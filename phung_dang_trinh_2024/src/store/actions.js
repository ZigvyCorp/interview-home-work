export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const GET_POST_DETAILS_REQUEST = "GET_POST_DETAILS_REQUEST";
export const GET_POST_DETAILS_SUCCESS = "GET_POST_DETAILS_SUCCESS";
export const GET_POST_DETAILS_FAILURE = "GET_POST_DETAILS_FAILURE";

export const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const getCommentsRequest = () => ({ type: GET_COMMENTS_REQUEST });
export const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});
export const getCommentsFailure = (error) => ({
  type: GET_COMMENTS_FAILURE,
  payload: error,
});

export const getUsersRequest = () => ({ type: GET_USERS_REQUEST });
export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});
export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getPostDetailsRequest = (postId) => ({
  type: GET_POST_DETAILS_REQUEST,
  postId,
});
export const getPostDetailsSuccess = (postDetails) => ({
  type: GET_POST_DETAILS_SUCCESS,
  payload: postDetails,
});
export const getPostDetailsFailure = (error) => ({
  type: GET_POST_DETAILS_FAILURE,
  payload: error,
});
