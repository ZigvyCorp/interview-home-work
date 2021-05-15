import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";


const rootReducer = combineReducers({
    postsReducer,
    postReducer,
});

export default rootReducer;