import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "../feature/blogSlice"

export const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})