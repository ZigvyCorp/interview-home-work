export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_POST_BY_ID = "GET_POST_BY_ID";
export const GET_POST_BY_ID_SUCCESS = "GET_POST_BY_ID_SUCCESS";

export const getAllPosts = () => ({
  type: GET_ALL_POSTS,
});

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  id,
});
