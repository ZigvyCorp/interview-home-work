export const FETCH_DATA = "FETCH_DATA";
export const FETCH_USER = "FETCH_USER";
export const FETCH_COMMENTS = "FETCH_COMMENTS"

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchDataAction = () => ({
  type: FETCH_DATA,
});

export const fetchCommentsAction = (postId) => ({
  type: FETCH_COMMENTS,
  payload: postId
});

export const fetchUserAction = () => ({
  type: FETCH_USER
});

export const fetchDataSuccessAction = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailureAction = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchUserSuccessAction = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailureAction = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchCommentsSuccessAction = (data) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchCommentsFailureAction= (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});