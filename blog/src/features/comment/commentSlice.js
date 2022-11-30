import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        fetchCommentList(state) {
            state.loading = true;
        },
        fetchCommentListSuccess(state, action) {
            state.loading = false;
            state.list = action.payload;
        },
        fetchCommentListFailed(state, action) {
            state.loading = false;
        },
    },
});
export const commentActions = commentSlice.actions;
//Selections
export const selectCommentList = (state) => state.comment.list;
//Reducer
const commentReducer = commentSlice.reducer;
export default commentReducer;
