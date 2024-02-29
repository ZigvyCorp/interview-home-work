import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../../features/counter/counterSlice";
import usersReducer from "../../features/users/usersSlice";
import commentsReducer from "../../features/comments/commentsSlice";
import postsReducer from "../../features/posts/postsSlice";

const rootReducer=combineReducers({
    counter:counterReducer,
    users:usersReducer,
    comments:commentsReducer,
    posts:postsReducer
})

export default rootReducer