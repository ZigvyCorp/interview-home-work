import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import modal from "./modal";
import user from "./user";

export default combineReducers({
  posts,
  modal,
  comments,
  user,
});
