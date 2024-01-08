/**Get comments by postID action */
export const GET_COMMENTS_BY_POST_ID_REQUEST = 'GET_COMMENTS_BY_POST_ID_REQUEST';
export const GET_COMMENTS_BY_POST_ID_SUCCESS = 'GET_COMMENTS_BY_POST_ID_SUCCESS';
export const GET_COMMENTS_BY_POST_ID_FAILURE = 'GET_COMMENTS_BY_POST_ID_FAILURE';

export const getCommentsByPostIDRequest = (postID, filters) => ({
  type: GET_COMMENTS_BY_POST_ID_REQUEST,
  payload: { postID, filters },
});

export const getCommentsByPostIDSuccess = (comments) => ({
  type: GET_COMMENTS_BY_POST_ID_SUCCESS,
  payload: comments,
});

export const getCommentsByPostIDFailure = (error) => ({
  type: GET_COMMENTS_BY_POST_ID_FAILURE,
  payload: error,
});