import { combineReducers } from "redux";
import posts from "./post";
import users from "./user";
import comments from "./comment";

const appReducers = combineReducers({
  posts,
  users,
  comments
});

export default appReducers;
