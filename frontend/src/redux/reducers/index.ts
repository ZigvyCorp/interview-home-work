import { combineReducers } from "redux";
import { posts } from "./postReducer";
import { comments } from "./commentReducer";
export default combineReducers({
	posts,
	comments,
});
