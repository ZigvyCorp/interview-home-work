import { combineReducers } from "redux";
import { loadingReducer } from "../loading/loading.reducer"
import {postsReducer} from "../posts/posts.reducer"

export const rootReducer = combineReducers({
    loading: loadingReducer,
    posts: postsReducer
});