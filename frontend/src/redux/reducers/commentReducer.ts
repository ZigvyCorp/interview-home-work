import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Comment} from '../../types/commentType'


interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentSlice.actions;
export default commentSlice.reducer;
