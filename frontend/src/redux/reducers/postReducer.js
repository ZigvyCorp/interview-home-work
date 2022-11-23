import {
  COMMENT_FETCH_FAILED,
  COMMENT_FETCH_SUCCEED,
  CREATE_NEW_COMMENT_SUCCEED,
  CREATE_NEW_POST_FAILED,
  CREATE_NEW_POST_SUCCEED,
  POST_FETCH_FAILED,
  POST_FETCH_LOAD_MORE_FAILED,
  POST_FETCH_LOAD_MORE_SUCCEED,
  POST_FETCH_SUCCEED,
  POST_LOADING_OFF,
  POST_LOADING_ON,
} from "../types/postType";

const defaultPostState = {
  listPosts: [],
  currentPage: 0,
  loading: false,
  hasLoadMore: true,
  error: "",
};

function postReducer(state = defaultPostState, action) {
  switch (action.type) {
    case CREATE_NEW_COMMENT_SUCCEED:
      return {
        ...state,
        listPosts: state.listPosts.map((value) => {
          if (value._id === action.payload.postId) {
            return {
              ...value,
              comments: [...value.comments, action.payload.comment],
            };
          }
          return value;
        }),
        loading: false,
      };
    case CREATE_NEW_POST_SUCCEED:
      return {
        ...state,
        listPosts: [action.payload.post].concat([...state.listPosts]),
        loading: false,
      };
    case POST_FETCH_LOAD_MORE_SUCCEED:
      return {
        ...state,
        listPosts: state.listPosts.concat(action.payload.listPosts),
        loading: false,
        currentPage: action.payload.page,
        hasLoadMore: action.payload.hasLoadMore,
      };
    case POST_FETCH_LOAD_MORE_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case CREATE_NEW_POST_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case POST_FETCH_SUCCEED:
      return { ...state, listPosts: action.payload.listPosts, loading: false };
    case POST_FETCH_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case COMMENT_FETCH_SUCCEED:
      return {
        ...state,
        listPosts: state.listPosts.map((value) => {
          if (value._id === action.payload.postId) {
            return { ...value, comments: value.payload.comments };
          }
          return value;
        }),
        loading: false,
      };
    case COMMENT_FETCH_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case POST_LOADING_ON:
      return { ...state, loading: true };
    case POST_LOADING_OFF:
      return { ...state, loading: false };

    default:
      return state;
  }
}

export default postReducer;
