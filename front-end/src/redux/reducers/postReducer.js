import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_POST_BY_ID_SUCCESS,
  FETCH_POST_BY_ID_FAILURE,
  FETCH_COMMENTS_BY_POST_ID_SUCCESS,
  FETCH_COMMENTS_BY_POST_ID_FAILURE,
  FETCH_POSTS_BY_KEYWORD_SUCCESS,
  FETCH_POSTS_BY_KEYWORD_FAILURE,
} from '../actions/actions';

const initialState = {
  posts: [],
  comments: [],
  post: {},
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_POSTS_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case FETCH_POSTS_BY_KEYWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: null,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        post: action.payload,
        error: null,
      };
    case FETCH_POST_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_COMMENTS_BY_POST_ID_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: null,
      };
    case FETCH_COMMENTS_BY_POST_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
