export const GET_POSTS = "POSTS/GET_POSTS";
export const GET_POSTS_SUCCESS = "POSTS/GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "POSTS/GET_POSTS_FAILURE";

export const getPosts= (params) => ({
  type: GET_POSTS,
  payload: params
});

export const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});
