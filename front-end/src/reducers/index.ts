import { combineReducers } from "redux";
import { postsReducer } from "./posts";
import { userReducer } from "./users";
import { commentsReducer } from "./comments";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  comments: commentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
