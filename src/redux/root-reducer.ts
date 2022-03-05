import { combineReducers } from "redux"
import { postReducer } from "./post/post.reducer"
import { AppStates } from "./type"

export const rootReducer = combineReducers<AppStates>({
	postState: postReducer,
})
