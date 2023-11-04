import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";


const commentSlice = createSlice({
    name: 'comment',
    initialState: {
      comments: [] as any[],
      isLoading: false
    },
    reducers: {
      fetchCommentData(state, action) {
        state.isLoading = true;
      },
      fetchCommentSuccess(state, action) {
        const savedCommentIndex = state.comments.findIndex(item => item.postId == action.payload.data.postId)
        if(savedCommentIndex >= 0) {
          state.comments[savedCommentIndex] = action.payload.data
        }
        else {
          state.comments = [...state.comments, action.payload.data]
        }
        state.isLoading = false;
      },
      fetchCommentFail(state) {
        state.isLoading = false;
      },
    }
  })

export const {fetchCommentData, fetchCommentSuccess, fetchCommentFail} = commentSlice.actions;

export default commentSlice.reducer;

export const selectCommentDataByPost= (state : RootState) => state.commentReducer.comments
export const selectFetchCommentState= (state : RootState) => state.commentReducer.isLoading;

