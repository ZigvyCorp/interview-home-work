import { CombinedState, combineReducers } from "redux";
import { postReducer } from "./post.reducer";
import { userReducer } from "./user.reducer";
import { commentReducer } from "./comment.reducer";

export const appReducer = combineReducers({  
  posts: postReducer,
  users: userReducer,
  comments: commentReducer,
});

export const rootReducer = (state:CombinedState<any>, action:CombinedState<any>) => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof appReducer>;
