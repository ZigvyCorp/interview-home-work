import * as ACTION_TYPE from "../../types/posts/actionTypes";
import * as TYPE from "../../types/posts";

export const createPostRequest = (
  data: TYPE.IPostService
): TYPE.CreatePostRequest => ({
  type: ACTION_TYPE.ADD_POST_REQUEST,
  data: data,
});

export const deletePostRequest = (id: string): TYPE.DeletePostRequest => ({
  type: ACTION_TYPE.DELETE_POST_REQUEST,
  id: id,
});

export const editPostRequest = (
  data: TYPE.IPostService,
  id: string
): TYPE.EditPostRequest => ({
  type: ACTION_TYPE.EDIT_POST_REQUEST,
  data: data,
  id: id,
});

export const getPostsRequest = (pageNumber: Number): TYPE.GetPostsRequest => ({
  type: ACTION_TYPE.GET_POSTS_REQUEST,
  pageNumber: pageNumber,
});

export const searchPostsRequest = (
  pageNumber: number,
  title: string
): TYPE.SearchPostsRequest => ({
  type: ACTION_TYPE.SEARCH_POSTS_REQUEST,
  pageNumber: pageNumber,
  title: title,
});

export const getPostsSuccess = (
  payload: TYPE.GetPostsSuccessPayload
): TYPE.GetPostsSuccess => ({
  type: ACTION_TYPE.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailure = (
  payload: TYPE.GetPostsFailurePayload
): TYPE.GetPostsFailure => ({
  type: ACTION_TYPE.GET_POSTS_FAILURE,
  payload,
});

export const getCreatedPost = (
  payload: TYPE.GetCreatedPostPayload
): TYPE.GetCreatedPost => ({
  type: ACTION_TYPE.ADDED_POST,
  payload,
});

export const getDeletedPost = (
  payload: TYPE.GetDeletedPostPayload
): TYPE.GetDeletedPost => ({
  type: ACTION_TYPE.DELETED_POST,
  payload,
});

export const getEditedPost = (
  payload: TYPE.GetEditedPostPayload
): TYPE.GetEditedPost => ({
  type: ACTION_TYPE.EDITED_POST,
  payload,
});

export const getSearchedPosts = (
  payload: TYPE.GetSearchPostPayload
): TYPE.GetSearchedPosts => ({
  type: ACTION_TYPE.SEARCHED_POSTS,
  payload,
});
