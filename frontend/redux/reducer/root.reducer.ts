import { FETCH_COMMENTS_SUCCESS } from "../action/comment.action";
import { FETCH_POSTS_SUCCESS } from "../action/post.action";
import { FETCH_USERS_SUCCESS } from "../action/user.action";

const initialState = {
  posts: [],
  comments: [],
  users: [],
};

const rootReducer = (state = initialState, action: any) => {
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
