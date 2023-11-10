import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchPosts } from "../../lib/fetchData";

const initialState = {
    posts: [],
    searchRes: [],
    isFetching: false,
    isSearched: false,
}
export const searchPostThunk = createAsyncThunk('post/searchPost', async (param) => {
    const response = await searchPosts(param);
    return response;
});

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsSuccess: (state, action) => {
            state.posts = action.payload
            state.isFetching = false
        },
        getPostsFetch: (state) => {
            state.isFetching = true
        },
    },
    extraReducers(b) {
        b.addCase(searchPostThunk.fulfilled, (state, { payload }) => {
            state.isSearched = true
            state.searchRes = payload
        })
        .addCase(searchPostThunk.rejected, (state)=>{
            state.isSearching = false
            state.searchRes = []
        })
        .addCase(searchPostThunk.pending, (state) => {
            state.isSearching = false
        })
    }

})


export const { getPostsSuccess, getPostsFetch, getSearchSucess, getPostSearch } = postSlice.actions
export default postSlice.reducer
