export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const GET_SINGLE_POST_REQUEST = "GET_SINGLE_POST_REQUEST";
export const GET_SINGLE_POST_SUCCESS = "GET_SINGLE_POST_SUCCESS";
export const GET_SINGLE_POST_FAILED = "GET_SINGLE_POST_FAILED";

export const actiongetAllPosts = () => ({
  type: GET_POSTS_REQUEST,
});
export const getAllPostsSuccess = (response: any) => {
  return { type: GET_POSTS_SUCCESS, payload: { data: response } };
};
export const getAllPostsFailed = (err: object) => {
  return { type: GET_POSTS_FAILED, payload: { err } };
};

export const getSinglePost = (postId: number) => ({
  type: GET_SINGLE_POST_REQUEST,
  payload: postId,
});
export const getSinglePostSuccess = (response: any) => {
  return { type: GET_SINGLE_POST_SUCCESS, payload: { data: response } };
};
export const getSinglePostFailed = (err: object) => {
  return { type: GET_SINGLE_POST_FAILED, payload: { err } };
};
