import { GET_COMMENT_FETCH, GET_POST_FETCH, GET_USER_FETCH } from "./types";

export const getUserFetch = () => ({
  type: GET_USER_FETCH,
});
export const getPostFetch = (page, limit) => ({
  type: GET_POST_FETCH,
  page,
  limit,
});
export const getCommentFetch = () => ({
  type: GET_COMMENT_FETCH,
});
