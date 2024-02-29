import { combineReducers } from "redux";
import postReducer from "./reducer/post";
import commentReducer from "./reducer/comment";
import userReducer from "./reducer/user";
import appReducer from "./reducer/app";

const reducers = combineReducers({
  app: appReducer,
  post: postReducer,
  comment: commentReducer,
  user: userReducer,
});

export default reducers;
