import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        fetchPostList(state) {
            state.loading = true;
        },
        fetchPostListSuccess(state, action) {
            state.loading = false;
            state.list = action.payload;
        },
        fetchPostListFailed(state, action) {
            state.loading = false;
        },
    },
});
export const postActions = postSlice.actions;
//Selections
export const selectPostList = (state) => state.post.list;
export const selectPostLoading = (state) => state.post.loading;

//Reducer
const postReducer = postSlice.reducer;
export default postReducer;
