export const GET_ALL_POSTS_REQUEST = "GET_ALL_POSTS_REQUEST";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_FAILURE = "GET_ALL_POSTS_FAILURE";

export const GET_ALL_COMMENTS_REQUEST = "GET_ALL_COMMENTS_REQUEST";
export const GET_ALL_COMMENTS_SUCCESS = "GET_ALL_COMMENTS_SUCCESS";
export const GET_ALL_COMMENTS_FAILURE = "GET_ALL_COMMENTS_FAILURE";

export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAILURE = "GET_ALL_USERS_FAILURE";

export const GetAllPostsRequest = () => ({
  type: GET_ALL_POSTS_REQUEST,
});

export const GetAllPostsSuccess = (posts) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: posts,
});

export const GetAllPostsFailure = (error) => ({
  type: GET_ALL_POSTS_FAILURE,
  payload: error,
});

export const GetAllCommentsRequest = () => ({
  type: GET_ALL_COMMENTS_REQUEST,
});

export const GetAllCommentsSuccess = (posts) => ({
  type: GET_ALL_COMMENTS_SUCCESS,
  payload: posts,
});

export const GetAllCommentsFailure = (error) => ({
  type: GET_ALL_COMMENTS_FAILURE,
  payload: error,
});

export const GetAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST,
});

export const GetAllUsersSuccess = (posts) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: posts,
});

export const GetAllUsersFailure = (error) => ({
  type: GET_ALL_USERS_FAILURE,
  payload: error,
});
