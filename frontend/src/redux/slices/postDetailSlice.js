// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\slices\postDetailSlice.js
import {createSlice} from '@reduxjs/toolkit';

const postDetailSlice = createSlice({
    name: 'postDetail',
    initialState: {
        post: null,
        comments: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchPostDetailRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostDetailSuccess: (state, action) => {
            state.loading = false;
            state.post = action.payload.post;
            state.comments = action.payload.comments;
        },
        fetchPostDetailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addCommentRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        addCommentSuccess: (state, action) => {
            state.loading = false;
            state.comments.push(action.payload);
        },
        addCommentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchPostDetailRequest,
    fetchPostDetailSuccess,
    fetchPostDetailFailure,
    addCommentRequest,
    addCommentSuccess,
    addCommentFailure,
} = postDetailSlice.actions;

export default postDetailSlice.reducer;
