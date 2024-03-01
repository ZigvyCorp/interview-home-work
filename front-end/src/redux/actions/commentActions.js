export const FETCH_COMMENT_BY_POST_ID = "FETCH_POSTS";
export const SET_COMMENTS_POST = "SET_COMMENTS_POST";
export const fetchCommentByPostId = (postId) => ({ type: FETCH_COMMENT_BY_POST_ID, postId });
export const setComments = (comments) => ({ type: SET_COMMENTS_POST, comments });
// Error
