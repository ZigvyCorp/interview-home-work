import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        totalPages: 0,
        currentPage: 1,
        isLoading: false
    },
    reducers: {
        getPostsFetch: (state) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.posts = action.payload.posts;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.page
            state.isLoading = false;
        },
        getPostsFailure: (state) => {
            state.isLoading = false;
        },
        nextPage: (state) => {
            if (state.currentPage >= state.totalPages) return;
            state.currentPage += 1;
        },
        previousPage: (state) => {
            if (state.currentPage <= 1) {
                state.currentPage = 1;
                return;
            }
            state.currentPage -= 1
        },
        changePage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const {
    getPostsFetch,
    getPostsSuccess,
    getPostsFailure,
    nextPage,
    previousPage,
    changePage
} = postsSlice.actions;

export default postsSlice.reducer;