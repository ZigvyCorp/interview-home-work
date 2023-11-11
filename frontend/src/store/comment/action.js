import { CREATE_COMMENT, CREATE_COMMENT_SUCCESS, GET_COMMENTS_BY_POST, GET_COMMENTS_BY_POST_SUCCESS } from "./actionTypes";

export const createComment = (formData) => ({
    type: CREATE_COMMENT,
    payload: formData
});

export const createCommentSuccess = (comment) => ({
    type: CREATE_COMMENT_SUCCESS,
    payload: comment
});

export const getCommentByPost = (postId) => ({
    type: GET_COMMENTS_BY_POST,
    payload: postId
});

export const getCommentByPostSuccess = ({ postId, comments }) => ({
    type: GET_COMMENTS_BY_POST_SUCCESS,
    payload: {
        postId,
        comments
    }
});