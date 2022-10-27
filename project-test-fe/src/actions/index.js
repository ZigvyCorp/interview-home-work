export const types = {
    GET_POSTS_REQUEST: 'GET_POST_REQUEST',
    GET_POSTS_SUCCESS: 'GET_POST_SUCCESS',
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_COMMENT_REQUEST: 'GET_COMMENT_REQUEST',
    GET_COMMENT_SUCCESS: 'GET_COMMENT_SUCCESS',
    GET_POSTS_REQUEST_DETAIL: 'GET_POSTS_REQUEST_DETAIL',
    GET_POSTS_REQUEST_DETAIL_SUCCESS: 'GET_POSTS_REQUEST_DETAIL_SUCCESS',
    GET_POSTS_COMMENT_DETAIL: 'GET_POSTS_COMMENT_DETAIL',
    GET_POSTS_COMMENT_DETAIL_SUCCESS: 'GET_POSTS_COMMENT_DETAIL_SUCCESS',
  };

export const getPostsRequest = () => ({
  type: types.GET_POSTS_REQUEST
});

export const getPostsRequestDetail = (idPost) => ({
  type: types.GET_POSTS_REQUEST_DETAIL,
  payload: idPost
});

export const getCommentRequestDetail = (idPost) => ({
  type: types.GET_POSTS_COMMENT_DETAIL,
  payload: idPost
});

export const getUserRequest = () => ({
  type: types.GET_USERS_REQUEST
});

export const getCommentRequest = () => ({
  type: types.GET_USERS_REQUEST
});

export const getPosts = (items) =>({ type: types.GET_POSTS_SUCCESS, payload: items });
export const getPostsDetail = (items) =>({ type: types.GET_POSTS_REQUEST_DETAIL_SUCCESS, payload: items });

export const getUsers = (items) =>({ type: types.GET_USERS_SUCCESS, payload: items });
export const getComments = (items) =>({ type: types.GET_COMMENT_SUCCESS, payload: items });
export const getCommentsDetail = (items) =>({ type: types.GET_POSTS_COMMENT_DETAIL_SUCCESS, payload: items });
