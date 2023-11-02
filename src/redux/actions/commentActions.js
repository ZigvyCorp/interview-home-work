import { FETCH_COMMENTS, SET_COMMENTS } from "../constants/actionTypes";

export const fetchComments = (postId) => ({
    type: FETCH_COMMENTS,
    payload: postId,
});

export const setComments = (comments) => ({
    type: SET_COMMENTS,
    payload: comments,
});