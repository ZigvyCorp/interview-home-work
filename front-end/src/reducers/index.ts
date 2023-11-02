import { combineReducers } from "redux";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  post: postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
