import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetListCommentResponse, PaginationResponseDefault } from '../../types';

export interface CommentState {
  comments: Record<number, {
    data?: IGetListCommentResponse | undefined;
    loading: boolean;
  }>,
}

const initialState: CommentState = {
  comments: {}
};


export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchCommentSuccess: (state, action: PayloadAction<[number, IGetListCommentResponse]>) => {
      const [postId, payload] = action.payload;
      state.comments = {
        ...state.comments,
        [postId]: {
          loading: false,
          data: {
            meta: payload.meta,
            items:payload.items
          },
        }
      }

    },
    fetchCommentFailure: (state, action: PayloadAction<[number]>) => {
      const [postId] = action.payload;
      state.comments = {
        ...state.comments,
        [postId]: {
          loading: false,
        }
      }

    },
    fetchCommentPending: (state, action: PayloadAction<[number]>) => {
      const [postId] = action.payload;
      state.comments = {
        ...state.comments,
        [postId]: {
          loading: true,
        }
      }

    },
  },
});

export const {
  fetchCommentSuccess, fetchCommentFailure, fetchCommentPending
} = commentSlice.actions;

export default commentSlice.reducer;
