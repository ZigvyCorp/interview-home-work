export const types = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_COMPLETED: 'FETCH_POSTS_COMPLETED',
  FETCH_POSTS_FAILED: 'FETCH_POSTS_FAILED',
  LOAD_MORE: 'LOAD_MORE',
  FETCH_COMMENTS: 'FETCH_COMMENTS',
  FETCH_COMMENTS_COMPLETED: 'FETCH_COMMENTS_COMPLETED',
  SEARCH_POST: 'SEARCH_POST',
};

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});

export const fetchPostsCompleted = (posts) => ({
  type: types.FETCH_POSTS_COMPLETED,
  payload: posts,
});

export const fetchPostsFailed = () => ({
  type: types.FETCH_POSTS_FAILED,
});

export const loadMore = () => ({
  type: types.LOAD_MORE,
});

export const fetchComments = (id) => ({
  type: types.FETCH_COMMENTS,
  payload: id,
});

export const fetchCommentsCompleted = (payload) => ({
  type: types.FETCH_COMMENTS_COMPLETED,
  payload,
});

export const searchPost = (payload) => ({
  type: types.SEARCH_POST,
  payload,
});
