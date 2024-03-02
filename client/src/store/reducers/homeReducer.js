import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_COMPLETE,
  LOAD_COMMENTS_FAILED,
  LOAD_POSTS,
  LOAD_POSTS_COMPLETE,
  LOAD_POSTS_FAILED,
  LOAD_USER,
  LOAD_USER_COMPLETE,
  LOAD_USER_FAILED,
} from "../actions/homeActions";
import _ from "lodash";

const initialState = {
  loading: false,
  posts: [],
  comments: [],
  user: [],
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
        comments: [
          ...state.comments,
          ..._.filter(
            actions.payload,
            (c) => !_.some(state.comments, (com) => com.id === c.id)
          ),
        ],
      };
    case LOAD_COMMENTS_FAILED:
      return {
        ...state,
      };

    case LOAD_USER:
      return {
        ...state,
      };
    case LOAD_USER_COMPLETE:
      return {
        ...state,
        user: actions.payload,
      };
    case LOAD_USER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { homeReducer };
