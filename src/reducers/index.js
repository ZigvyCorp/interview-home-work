import postReducer from "../reducers/postReducer";
import commentReducer from "../reducers/commentReducer";
import userReducer from "../reducers/userReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    postList: postReducer,
    commentList: commentReducer,
    userList: userReducer
}) 
export default rootReducer;
