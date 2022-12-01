import * as Types from "../types/postType";

const initialPostState = {
  listPosts: [],
  loading: false,
  error: null,
  perPage: 2,
  currentPage: 1,
};

function postReducer(state = initialPostState, { type, payload }) {
  switch (type) {
    case Types.POST_FETCH:
      return { ...state, loading: true };
    case Types.POST_FETCH_SUCCESS:
      return { ...state, listPosts: payload.posts, loading: false };
    case Types.POST_FETCH_FAILED:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
}

export default postReducer;
