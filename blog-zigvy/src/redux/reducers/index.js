import { combineReducers } from "redux";
import commentReducers from "./CommentReducers";
import postReducers from "./PostReducers";

const rootReducers = combineReducers({
  posts: postReducers,
  comments: commentReducers,
});

export default rootReducers;
