import {
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_USERS_SUCCESS,
} from "./actions";

const initState = {
  posts: [],
  comments: [],
  users: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case GET_ALL_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
