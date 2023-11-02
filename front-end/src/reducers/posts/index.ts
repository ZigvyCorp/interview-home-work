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
