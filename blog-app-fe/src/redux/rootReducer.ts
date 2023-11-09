import { PostsStateType } from "./types/post.type";
import postsReducer from "./reducers/postSlice";
import { combineReducers } from "redux";

export type StateType = {
	posts: PostsStateType;
};

const rootReducers = combineReducers({
	posts: postsReducer,
});

export default rootReducers;
