import { postTypes } from "../../actions-types/postTypes";
import { PostsState, PostsAction } from "../../types/types";

const initialState: PostsState = {
  loading: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        error: null,
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
