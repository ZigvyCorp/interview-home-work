import {
  GET_COMMENT_SUCCESS,
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
} from "./types";
const initalState = {
  users: [],
  posts: [],
  comments: [],
  totalCount: 0,
};

const myFirstReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, users: action.users };
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts.posts,
        totalCount: action.posts.totalCount,
      };
    case GET_COMMENT_SUCCESS:
      return { ...state, comments: action.comments };

    default:
      return state;
  }
};

export default myFirstReducer;
