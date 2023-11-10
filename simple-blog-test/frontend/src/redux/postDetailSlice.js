import { createSlice } from "@reduxjs/toolkit";

export const postDetailSlice = createSlice({
    name: "postDetail",
    initialState: {
        postDetail: {
            post: null,
            comments: []
        },
        isLoading: false,
    },
    reducers: {
        getPostDetailFetch: (state) => {
            state.isLoading = true;
        },
        getPostDetailSuccess: (state, action) => {
            state.postDetail.post = action.payload.post;
            state.postDetail.comments = action.payload.comments
            state.isLoading = false;
        }
    }
});

export const { getPostDetailFetch, getPostDetailSuccess } = postDetailSlice.actions;

export default postDetailSlice.reducer;