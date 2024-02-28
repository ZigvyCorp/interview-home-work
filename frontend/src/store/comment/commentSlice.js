import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        fetchCommentList(state) {
            return state;
        },
        fetchCommentListSuccess(state, action) {
            state.list = action.payload;
        },
        fetchCommentListFailed(state) {
            return state;
        }
    }
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;