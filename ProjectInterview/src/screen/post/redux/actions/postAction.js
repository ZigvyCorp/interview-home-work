export const types = {
    POSTS_REQUEST: 'POST_REQUEST',
    POSTS_RESPONSE: 'POST_RESPONSE',
    USERS_REQUEST: 'USERS_REQUEST',
    USERS_RESPONSE: 'USERS_RESPONSE',
    COMMENT_REQUEST: 'COMMENT_REQUEST',
    COMMENT_RESPONSE: 'COMMENT_RESPONSE',
    POSTS_REQUEST_DETAIL: 'POSTS_REQUEST_DETAIL',
    POSTS_REQUEST_DETAIL_RESPONSE: 'POSTS_REQUEST_DETAIL_RESPONSE',
    POSTS_COMMENT_DETAIL: 'POSTS_COMMENT_DETAIL',
    POSTS_COMMENT_DETAIL_RESPONSE: 'POSTS_COMMENT_DETAIL_RESPONSE',
  };

export const getPostsRequest = () => ({
  type: types.POSTS_REQUEST
});

export const getPostsRequestDetail = (idPost) => ({
  type: types.POSTS_REQUEST_DETAIL,
  payload: idPost
});

export const getCommentRequestDetail = (idPost) => ({
  type: types.POSTS_COMMENT_DETAIL,
  payload: idPost
});

export const getUserRequest = () => ({
  type: types.USERS_REQUEST
});

export const getCommentRequest = () => ({
  type: types.USERS_REQUEST
});

export const getPostsReponse = (items) =>({ type: types.POSTS_RESPONSE, payload: items });
export const getPostsDetailReponse = (items) =>({ type: types.POSTS_REQUEST_DETAIL_RESPONSE, payload: items });

export const getUsersReponse = (items) =>({ type: types.USERS_RESPONSE, payload: items });
export const getCommentsReponse = (items) =>({ type: types.COMMENT_RESPONSE, payload: items });
export const getCommentsDetailReponse = (items) =>({ type: types.POSTS_COMMENT_DETAIL_RESPONSE, payload: items });