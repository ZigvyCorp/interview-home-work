import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_COMPLETE,
  LOAD_COMMENTS_FAILED,
  LOAD_POSTS,
  LOAD_POSTS_COMPLETE,
  LOAD_POSTS_FAILED,
} from "../actions/homeActions";

const initialState = {
  loading: false,
  posts: [],
  comments: [],
};

const homeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POSTS_COMPLETE:
      return {
        ...state,
        loading: false,
        posts: actions.payload,
      };
    case LOAD_POSTS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LOAD_COMMENTS:
      return {
        ...state,
      };
    case LOAD_COMMENTS_COMPLETE:
      return {
        ...state,
        comments: [...state.comments, ...actions.payload],
      };
    case LOAD_COMMENTS_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { homeReducer };
