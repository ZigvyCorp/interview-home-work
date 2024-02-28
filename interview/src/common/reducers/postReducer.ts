import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POSTS_REQUEST,
  GET_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_FAILED,
} from "../actions/post";
import { Post } from "../models/post";


const initPostState = {
  allPosts: [],
  post: {},
};

interface Action {
  type: string;
  payload: any;
}

export const PostReducer = (
  state: any = initPostState,
  action: Action
): Post => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return state;
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: action.payload,
      };
    case GET_POSTS_FAILED:
      return state;

    case GET_SINGLE_POST_REQUEST:
      return state;
    case GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case GET_SINGLE_POST_FAILED:
      return state;
    default:
      return state;
  }
};
export default PostReducer;
