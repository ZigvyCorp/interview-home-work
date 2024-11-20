export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_NEXT_POSTS = 'GET_NEXT_POSTS';
export const GET_NEXT_POSTS_SUCCESS = 'GET_NEXT_POSTS_SUCCESS';
export const GET_NEXT_POSTS_FAILURE = 'GET_NEXT_POSTS_FAILURE';
export const ADD_NEXT_POSTS = 'ADD_NEXT_POSTS';

export const GET_MATCHING_POSTS = 'GET_MATCHING_POSTS';
export const GET_MATCHING_POSTS_SUCCESS =
  'GET_MATCHING_POSTS_SUCCESS';
export const GET_MATCHING_POSTS_FAILURE =
  'GET_MATCHING_POSTS_FAILURE';

export const getPosts = () => {
  return {
    type: GET_POSTS
  };
};

export const getPostsSuccess = (posts, totalPosts) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts,
    totalPosts
  };
};

export const getPostsFailure = (errors) => {
  return {
    type: GET_POSTS_FAILURE,
    errors
  };
};

export const getNextPosts = () => {
  return {
    type: GET_NEXT_POSTS
  };
};

export const getNextPostsSuccess = (posts, totalPosts) => {
  return {
    type: GET_NEXT_POSTS_SUCCESS,
    posts,
    totalPosts
  };
};

export const getNextPostsFailure = (errors) => {
  return {
    type: GET_NEXT_POSTS_FAILURE,
    errors
  };
};

export const addNextPosts = () => {
  return {
    type: ADD_NEXT_POSTS
  };
};

export const getMatchingPosts = (searchValue) => {
  return {
    type: GET_MATCHING_POSTS,
    searchValue
  };
};

export const getMatchingPostsSuccess = (matchingPosts) => {
  return {
    type: GET_MATCHING_POSTS_SUCCESS,
    matchingPosts
  };
};

export const getMatchingPostsFailure = (errors) => {
  return {
    type: GET_MATCHING_POSTS_FAILURE,
    errors
  };
};
