import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  userReducer,
});
