import {
  CLEAR_AUTH_ERROR_STATUS,
  LOG_IN,
  LOG_IN_SUCCEED,
  SIGN_UP,
  SIGN_UP_SUCCEED,
  CLEAR_CREATE_POST_STATUS,
  GET_POSTS,
  GET_POSTS_SUCCEED,
  CREATE_POST,
  CREATE_POST_SUCCEED,
  SIGN_OUT,
} from "./actionTypes";

export const clearAuthErrorStatusAction = () => ({
  type: CLEAR_AUTH_ERROR_STATUS,
});

export const logInUserAction = (user) => ({
  type: LOG_IN,
  user,
});

export const signUpUserAction = (user) => ({
  type: SIGN_UP,
  user,
});

export const signOutUserAction = () => ({
  type: SIGN_OUT,
});

export const clearCreatePostStatusAction = () => ({
  type: CLEAR_CREATE_POST_STATUS,
});

export const getPostsAction = () => ({
  type: GET_POSTS,
});

export const createPostAction = (info) => ({
  type: CREATE_POST,
  info,
});

// SAGA ACTIONS

export const logInSucceedAction = (response) => ({
  type: LOG_IN_SUCCEED,
  response,
});

export const signUpSucceedAction = (response) => ({
  type: SIGN_UP_SUCCEED,
  response,
});

export const getPostsSucceedAction = (data) => ({
  type: GET_POSTS_SUCCEED,
  data,
});

export const createPostSucceedAction = (response) => ({
  type: CREATE_POST_SUCCEED,
  response,
});
