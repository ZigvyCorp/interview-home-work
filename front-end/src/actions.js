export const GET_POSTS_FETCH = "GET_POSTS_FETCH";

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export const getPostsFetch = (data) => ({
  type: GET_POSTS_FETCH,
  data,
});

export const GET_COMMENTS_FETCH = "GET_COMMENTS_FETCH";

export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";

export const getCommentsFetch = () => ({
  type: GET_COMMENTS_FETCH,
});

export const GET_USERS_FETCH = "GET_USERS_FETCH";

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});

export const GET_POST_DETAIL_FETCH = "GET_POST_DETAIL_FETCH";

export const GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS";

export const getPostDetailFetch = (id) => ({
  type: GET_POST_DETAIL_FETCH,
  id,
});
