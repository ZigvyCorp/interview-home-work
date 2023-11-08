import {
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_USERS_SUCCESS,
} from "./actions";

const initialState = {
  posts: [],
  comments: [],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
