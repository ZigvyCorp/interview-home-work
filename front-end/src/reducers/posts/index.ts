import * as ACTION_TYPE from "../../types/posts/actionTypes";
import * as TYPE from "../../types/posts";

const initialState: TYPE.PostsState = {
  pending: false,
  posts: [],
  error: null,
  size: 0,
};

export function postsReducer(
  state = initialState,
  action: TYPE.PostsActions
): TYPE.PostsState {
  switch (action.type) {
    case ACTION_TYPE.EDIT_POST_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.EDITED_POST: {
      return {
        ...state,
        pending: false,
        posts: state.posts.map((post) =>
          post._id === action.payload.post._id ? action.payload.post : post
        ),
      };
    }
    case ACTION_TYPE.ADD_POST_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.ADDED_POST: {
      const data = action.payload.post;

      return {
        ...state,
        pending: false,
        size: state.size + 1,
        posts: [data, ...state.posts],
      };
    }
    case ACTION_TYPE.DELETE_POST_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.DELETED_POST: {
      return {
        ...state,
        pending: false,
        size: state.size - 1,
        posts: state.posts.filter(
          (post) => post._id !== action.payload.post._id
        ),
      };
    }
    case ACTION_TYPE.GET_POSTS_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.GET_POSTS_SUCCESS: {
      return {
        ...state,
        pending: false,
        posts: [...state.posts, ...action.payload.posts],
        error: null,
        size: action.payload.size,
      };
    }
    case ACTION_TYPE.GET_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
