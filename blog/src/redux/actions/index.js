import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (err) => err,
});

export const getComments = createActions({
  getCommentsRequest: (payload) => payload,
  getCommentsSuccess: (payload) => payload,
  getCommentsFailure: (err) => err,
});
export const createComment = createActions({
  createCommentRequest: (payload) => payload,
  createCommentSuccess: (payload) => payload,
  createCommentFailure: (err) => err,
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload,
  updatePostSuccess: (payload) => payload,
  updatePostFailure: (err) => err,
});

export const login = createActions({
  getLoginRequest: (payload) => payload,
  getLoginSuccess: (payload) => payload,
  getLoginFailure: (err) => err,
});

export const logout = createAction("SET_LOGOUT");
export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
