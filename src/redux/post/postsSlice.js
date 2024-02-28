import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPostsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getPostsSucess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getPostsRequest, getPostsSucess, getPostsFailure } =
    postSlice.actions;

export default postSlice.reducer;
