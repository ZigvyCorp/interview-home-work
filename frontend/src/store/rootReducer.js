import { combineReducers } from "@reduxjs/toolkit";

import postReducer from './post/postSlice';
import userReducer from './user/userSlice';
import commentReducer from './comment/commentSlice';

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    comment: commentReducer
});

export default rootReducer;