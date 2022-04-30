import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./post.thunk";

const initialState = {
    data: [],
    loading: true,
    error: null,
};

export default createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // TODO Get all blogs
        builder.addCase(getPostsThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPostsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload.posts;
        });
        builder.addCase(getPostsThunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
});
