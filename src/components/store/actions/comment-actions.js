export const GET_COMMENTS = 'GET_GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_GET_COMMENTS_FAILURE';

export const GET_TOTAL_COMMENTS = 'GET_TOTAL_COMMENTS_';
export const GET_TOTAL_COMMENTS_SUCCESS =
  'GET_TOTAL_COMMENTS_SUCCESS';
export const GET_TOTAL_COMMENTS_FAILURE =
  'GET_TOTAL_COMMENTS_COUNT_FAILURE';

export const getComments = (postId) => {
  return {
    type: GET_COMMENTS,
    postId
  };
};

export const getCommentsSuccess = (commentsDataMap) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    commentsDataMap
  };
};

export const getCommentsFailure = (errors) => {
  return {
    type: GET_COMMENTS_FAILURE,
    errors
  };
};

export const getTotalComments = (postId) => {
  return {
    type: GET_TOTAL_COMMENTS,
    postId
  };
};

export const getTotalCommentsSuccess = (totalCommentsMap) => {
  return {
    type: GET_TOTAL_COMMENTS_SUCCESS,
    totalCommentsMap
  };
};

export const getTotalCommentsFailure = (errors) => {
  return {
    type: GET_TOTAL_COMMENTS_FAILURE,
    errors
  };
};
