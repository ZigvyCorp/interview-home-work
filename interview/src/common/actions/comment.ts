export const GET_COMMENT_REQUEST = "GET_COMMENT_REQUEST";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const GET_COMMENT_FAILED = "GET_COMMENT_FAILED";

export const getComment = (postId:number) => ({
    type: GET_COMMENT_REQUEST,
    payload:postId
});
export const getCommentSuccess = (response: any) => {
  return { type: GET_COMMENT_SUCCESS, payload: { data: response } };
};
export const getCommentFailed = (err: object) => {
  return { type: GET_COMMENT_FAILED, payload: { err } };
};
