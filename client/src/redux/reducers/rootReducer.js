import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { commentReducer } from "./commentReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});
