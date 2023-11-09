import { createSlice } from '@reduxjs/toolkit'
import * as actions from "../asyncAction"

const initialState = {
    posts: [],
    isLoading: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    // Code logic xử lý async action
    extraReducers: (builder) => {
        builder.addCase(actions.getAllPosts.pending, (state) => {
            // Bật trạng thái loading
            state.isLoading = true;
        });

        builder.addCase(actions.getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });

        builder.addCase(actions.getAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
});

export const { } = postSlice.actions

export default postSlice.reducer