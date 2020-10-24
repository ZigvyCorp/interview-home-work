import {
  SET_EXPENDED_CMT,
  SET_LOADING,
  SET_ERROR,
  GET_POSTS,
  SET_POSTS, SET_PAGE, NEXT_PAGE, PUSH_POSTS, SET_KEYWORD, SET_HAS_MORE,
} from '../constaints';

export const setExpendedCmt = ({ id, status }) => {
  return { type: SET_EXPENDED_CMT, payload: { id, status } };
};

export const setLoading = (status) => {
  return { type: SET_LOADING, payload: status };
};

export const setError = (message) => {
  return { type: SET_ERROR, payload: message };
};

export const getPosts = ({ page, limit, keyword }) => {
  return { type: GET_POSTS, payload: { page, limit, keyword } };
};

export const setPosts = (posts) => {
  return { type: SET_POSTS, payload: posts };
};

export const pushPosts = (posts) => {
  return { type: PUSH_POSTS, payload: posts };
};

export const setKeyword = (keyword) => {
  return { type: SET_KEYWORD, payload: keyword };
};

export const setPage = (page) => {
  return { type: SET_PAGE, payload: page };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const setHasMore = (value) => {
  return { type: SET_HAS_MORE, payload: value };
};