export const TYPES = {
  POSTS_FETCH_NEWEST_POSTS: 'POSTS_FETCH_NEWEST_POSTS',
  POSTS_FETCH_NEWEST_POSTS_SUCCEED: 'POSTS_FETCH_NEWEST_POSTS_SUCCEED',
  POSTS_FETCH_NEWEST_POSTS_FAILED: 'POSTS_FETCH_NEWEST_POSTS_FAILED',

  POST_FETCH_POST_DETAIL: 'POST_FETCH_POST_DETAIL',
  POST_FETCH_POST_DETAIL_SUCCEED: 'POST_FETCH_POST_DETAIL_SUCCEED',
  POST_FETCH_POST_DETAIL_FAILED: 'POST_FETCH_POST_DETAIL_FAILED',

  POSTS_SET_FILTER: 'POSTS_SET_FILTER',
};


export function fetchNewestPosts(payload) {
  return {
    type: TYPES.POSTS_FETCH_NEWEST_POSTS,
    payload
  };
};

export function fetchNewestPostsSucceed(payload) {
  return {
    type: TYPES.POSTS_FETCH_NEWEST_POSTS_SUCCEED,
    payload
  };
};

export function fetchNewestPostsFailed(message) {
  return {
    type: TYPES.POSTS_FETCH_NEWEST_POSTS_FAILED,
    message
  };
};

export function fetchPostDetail(payload) {
  return {
    type: TYPES.POST_FETCH_POST_DETAIL,
    payload
  };
};

export function fetchPostDetailSucceed(payload) {
  return {
    type: TYPES.POST_FETCH_POST_DETAIL_SUCCEED,
    payload
  };
};

export function fetchPostDetailFailed(message) {
  return {
    type: TYPES.POST_FETCH_POST_DETAIL_FAILED,
    message
  };
};

export function setFilter(payload) {
  return {
    type: TYPES.POSTS_SET_FILTER,
    payload
  };
};
