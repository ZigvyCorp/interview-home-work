import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { postDetailReducer } from "./postDetailReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  postDetail: postDetailReducer
});