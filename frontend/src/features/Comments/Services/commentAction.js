export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsRequest = (postId, page) => ({
    type: FETCH_COMMENTS_REQUEST,
    payload: { postId: postId, page: page }
});

export const fetchCommentsSuccess = (data) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: data,
});

export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
});