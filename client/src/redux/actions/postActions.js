export const fetchPostsRequest = (page) => ({
  type: 'FETCH_POSTS_REQUEST',
  payload: page,
});

export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  payload: error,
});

export const fetchPostByIdRequest = (id) => ({
  type: 'FETCH_POST_BY_ID_REQUEST',
  payload: id,
});

export const fetchPostByIdSuccess = (post) => ({
  type: 'FETCH_POST_BY_ID_SUCCESS',
  payload: post,
});

export const fetchPostByIdFailure = (error) => ({
  type: 'FETCH_POST_BY_ID_FAILURE',
  payload: error,
});

export const handleFilterPosts = (filterPosts) => ({
  type: 'FILTER_POST',
  payload: filterPosts
});