import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
    name: 'post',
    initialState: {value: []},
    reducers: {
        get_post: (state, action) => {
            state.value = action.payload
        }
    }
})

export const state = (state) => state.post.value
export default BlogSlice.reducer