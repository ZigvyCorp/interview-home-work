export const FETCH_POST_BY_ID_REQUEST = 'FETCH_POST_BY_ID_REQUEST';
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS';
export const FETCH_POST_BY_ID_FAILURE = 'FETCH_POST_BY_ID_FAILURE';

export const fetchPostByIdRequest = (page) => ({
    type: FETCH_POST_BY_ID_REQUEST,
    payload: page
});

export const fetchPostByIdSuccess = (data) => ({
    type: FETCH_POST_BY_ID_SUCCESS,
    payload: data,
});

export const fetchPostByIdFailure = (error) => ({
    type: FETCH_POST_BY_ID_FAILURE,
    payload: error,
});