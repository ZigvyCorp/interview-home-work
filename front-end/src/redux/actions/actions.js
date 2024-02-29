export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POSTS_BY_KEYWORD_REQUEST = 'FETCH_POSTS_BY_KEYWORD_REQUEST';
export const FETCH_POSTS_BY_KEYWORD_SUCCESS = 'FETCH_POSTS_BY_KEYWORD_SUCCESS';
export const FETCH_POSTS_BY_KEYWORD_FAILURE = 'FETCH_POSTS_BY_KEYWORD_FAILURE';

export const FETCH_POST_BY_ID_REQUEST = 'FETCH_POST_BY_ID_REQUEST';
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS';
export const FETCH_POST_BY_ID_FAILURE = 'FETCH_POST_BY_ID_FAILURE';

export const FETCH_COMMENTS_BY_POST_ID_REQUEST =
  'FETCH_COMMENTS_BY_POST_ID_REQUEST';
export const FETCH_COMMENTS_BY_POST_ID_SUCCESS =
  'FETCH_COMMENTS_BY_POST_ID_SUCCESS';
export const FETCH_COMMENTS_BY_POST_ID_FAILURE =
  'FETCH_COMMENTS_BY_POST_ID_FAILURE';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const FETCH_USER_BY_ID_REQUEST = 'FETCH_USER_BY_ID_REQUEST';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPostsByKeywordRequest = (keyword) => ({
  type: FETCH_POSTS_BY_KEYWORD_REQUEST,
  payload: keyword,
});

export const fetchPostsByKeywordSuccess = (posts) => ({
  type: FETCH_POSTS_BY_KEYWORD_SUCCESS,
  payload: posts,
});

export const fetchPostsByKeywordFailure = (error) => ({
  type: FETCH_POSTS_BY_KEYWORD_FAILURE,
  payload: error,
});

export const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const fetchPostByIdRequest = (id) => ({
  type: FETCH_POST_BY_ID_REQUEST,
  payload: id,
});

export const fetchPostByIdSuccess = (post) => ({
  type: FETCH_POST_BY_ID_SUCCESS,
  payload: post,
});

export const fetchPostByIdFailure = (error) => ({
  type: FETCH_POST_BY_ID_FAILURE,
  payload: error,
});

export const fetchCommentsByPostIdRequest = (postId) => ({
  type: FETCH_COMMENTS_BY_POST_ID_REQUEST,
  payload: postId,
});

export const fetchCommentsByPostIdSuccess = (comments) => ({
  type: FETCH_COMMENTS_BY_POST_ID_SUCCESS,
  payload: comments,
});

export const fetchCommentsByPostIdFailure = (error) => ({
  type: FETCH_COMMENTS_BY_POST_ID_FAILURE,
  payload: error,
});

// userActions.js
export const fetchUserByIdRequest = (userId) => ({
  type: FETCH_USER_BY_ID_REQUEST,
  payload: userId,
});

export const fetchUserByIdSuccess = (user) => ({
  type: FETCH_USER_BY_ID_SUCCESS,
  payload: user,
});

export const fetchUserByIdFailure = (error) => ({
  type: FETCH_USER_BY_ID_FAILURE,
  payload: error,
});

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
