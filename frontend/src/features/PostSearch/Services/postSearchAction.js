export const FETCH_POST_SEARCH_REQUEST = 'FETCH_POST_SEARCH_REQUEST';
export const FETCH_POST_SEARCH_SUCCESS = 'FETCH_POST_SEARCH_SUCCESS';
export const FETCH_POST_SEARCH_FAILURE = 'FETCH_POST_SEARCH_FAILURE';

export const fetchPostSearchRequest = (keyword) => ({
    type: FETCH_POST_SEARCH_REQUEST,
    payload: keyword
});

export const fetchPostSearchSuccess = (data) => ({
    type: FETCH_POST_SEARCH_SUCCESS,
    payload: data,
});

export const fetchPostSearchFailure = (error) => ({
    type: FETCH_POST_SEARCH_FAILURE,
    payload: error,
});