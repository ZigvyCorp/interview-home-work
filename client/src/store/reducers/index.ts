import { combineReducers } from "redux";
import post from "./post.reducer";
import user from "./user.reducer";


export const reducers = combineReducers({ post: post, user: user });
export type RootState = ReturnType<typeof reducers>;