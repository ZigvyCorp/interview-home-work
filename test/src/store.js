import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer/postReducer";
import commentReducer from "./reducer/commentReducer";
import userReducer from "./reducer/userReducer";

const store = configureStore({
    reducer:{
        posts: postReducer,
        comments: commentReducer,
        users: userReducer,
    }
})
export default store;