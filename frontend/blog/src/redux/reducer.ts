import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE,
  FETCH_BLOG_DETAIL_REQUEST,
  FETCH_BLOG_DETAIL_SUCCESS,
  FETCH_BLOG_DETAIL_FAILURE,
  BlogActionTypes,
  BlogDetailActionTypes
} from './actions';
import { FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE, CommentActionTypes } from './actions';

interface BlogState {
  data: any[]; 
  loading: boolean;
  error: Error | null;
}

const initialState: BlogState = {
  data: [],
  loading: false,
  error: null,
};
export const blogReducer = (state = initialState, action: BlogActionTypes | BlogDetailActionTypes): BlogState => {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_BLOG_DETAIL_REQUEST:
      return {
        ...state, 
        loading: true,
        error: null,
      };

    case FETCH_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload, 
      };

    case FETCH_BLOG_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

interface CommentState {
  data: any[]; 
  loading: boolean;
  error: Error | null;
}

const initialStateComment: CommentState = {
  data: [],
  loading: false,
  error: null,
};

export const commentReducer = (state = initialStateComment, action: CommentActionTypes): CommentState => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

