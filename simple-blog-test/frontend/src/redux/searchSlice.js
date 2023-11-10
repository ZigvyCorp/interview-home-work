import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: {
            post: null,
            comments: []
        },
        isLoading: false,
    },
    reducers: {
        searchFetch: (state) => {
            state.isLoading = true;
        },
        getSearchResultSuccess: (state, action) => {
            state.searchResult.post = action.payload.post;
            state.searchResult.comments = action.payload.comments
            state.isLoading = false;
        }
    }
});

export const { searchFetch, getSearchResultSuccess } = searchSlice.actions;

export default searchSlice.reducer;