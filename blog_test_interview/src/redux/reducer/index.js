import { combineReducers } from "redux";

import posts from "./posts";
import users from "./users";
import comments from "./comments";

const rootReducer = combineReducers({
  posts: posts,
  users: users,
  comments: comments,
});

export default rootReducer;
