export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_NEXT_POSTS = 'GET_NEXT_POSTS';
export const GET_NEXT_POSTS_SUCCESS = 'GET_NEXT_POSTS_SUCCESS';
export const GET_NEXT_POSTS_FAILURE = 'GET_NEXT_POSTS_FAILURE';
export const ADD_NEXT_POSTS = 'ADD_NEXT_POSTS';

export const getPosts = () => {
  return {
    type: GET_POSTS
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts
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

export const getNextPostsSuccess = (posts) => {
  return {
    type: GET_NEXT_POSTS_SUCCESS,
    posts
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
