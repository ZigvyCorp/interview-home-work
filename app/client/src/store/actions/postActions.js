export const ActionTypes = {
  FETCH_POSTS_REQUEST: "FETCH_POSTS_REQUEST",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
};

export const fetchPostsRequest = (pageSize = 10, pageIndex = 1, search = "") => ({
  type: ActionTypes.FETCH_POSTS_REQUEST,
  payload: {
    pageSize,
    pageIndex,
    search,
  },
});

export const fetchPostsSuccess = (posts) => ({
  type: ActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: ActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});
