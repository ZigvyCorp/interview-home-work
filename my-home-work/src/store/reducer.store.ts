import { combineReducers } from "redux";

import postReducer from "./modules/posts/posts.reducer";
import userReducer from "./modules/users/users.reducer";
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
