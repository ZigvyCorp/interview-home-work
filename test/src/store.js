import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer/postReducer";
import commentReducer from "./reducer/commentReducer";


const store = configureStore({
    reducer:{
        posts: postReducer,
        comments: commentReducer,
    }
})
export default store;