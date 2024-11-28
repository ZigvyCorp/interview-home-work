import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
