import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchPosts } from "./action";

const initialState = {
    posts: [],
    hasDataSearch: false,
    isLoadingSearch: false,
}

const { actions, reducer: postsReducer } = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updateStateSearch: (state, action: PayloadAction<boolean>) => {
            state.hasDataSearch = action.payload;
        },
        clear() {
            return { ...initialState }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoadingSearch = false;
        });
        builder.addCase(fetchSearchPosts.rejected, (state) => {
            state.posts = [];
            state.isLoadingSearch = false;
        });
    }
})

const postsActions = { ...actions, fetchSearchPosts }
export { postsReducer, postsActions }