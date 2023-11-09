import { combineReducers } from "redux";
import counterReducer from "./count";
import postReducer from "./post";

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postReducer,
});

export default rootReducer;
