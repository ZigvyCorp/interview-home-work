// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\redux\slices\postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        loading: false,
        error: null,
        hasMore: true,
        page: 1,
    },
    reducers: {
        fetchPostsRequest: (state, action) => {
            state.loading = true;
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload.reset ? action.payload.posts : [...state.items, ...action.payload.posts];
            state.hasMore = action.payload.hasMore;
        },
        fetchPostsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        createPostRequest: (state) => {
            state.loading = true;
        },
        createPostSuccess: (state, action) => {
            state.loading = false;
            state.items.unshift(action.payload);
        },
        createPostFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const {
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFailure,
    createPostRequest,
    createPostSuccess,
    createPostFailure,
    setPage
} = postsSlice.actions;
export default postsSlice.reducer;
