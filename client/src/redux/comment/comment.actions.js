import CommentActionTypes from './comment.types';

export const fetchCommentsStart = () => ({
    type: CommentActionTypes.FETCH_COMMENTS_START,
});

export const fetchCommentsSuccess = (commentsMap) => ({
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: commentsMap,
});

export const fetchCommentsFailure = (errorMessage) => ({
    type: CommentActionTypes.FETCH_COMMENTS_FAILURE,
    payload: errorMessage,
});
