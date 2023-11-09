export const FILTER_POSTS = 'FILTER_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_MORE_POSTS = 'FETCH_MORE_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FILTER_POSTS_SUCCESS = 'FILTER_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const FILTER_POSTS_FAIL = 'FILTER_POSTS_FAIL';
export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING';

export const actionFetchPosts = () => {
  return {
    type: FETCH_POSTS,
  };
};

export const actionFilterPosts = ({ query }) => {
  return {
    type: FILTER_POSTS,
    payload: {
      query,
    },
  };
};

export const actionFetchMorePosts = ({ query }) => {
  return {
    type: FETCH_MORE_POSTS,
    payload: {
      query,
    },
  };
};
