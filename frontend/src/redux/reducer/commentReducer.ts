import { createSlice, current,PayloadAction } from '@reduxjs/toolkit';
import { IGetListCommentResponse, PaginationResponseDefault } from '../../types';
import { notification } from 'antd';

export interface CommentState {
  comments: Record<number, {
    data: IGetListCommentResponse | undefined;
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
      const stateCurrent = current(state);
      const previousCmt = stateCurrent.comments[postId].data?.items || [];
      state.comments = {
        ...state.comments,
        [postId]: {
          loading: false,
          data: {
            ...payload,
            items: [...previousCmt, ...payload.items]
          },
        }
      };
    },
    fetchCommentFailure: (state, action: PayloadAction<[number, string]>) => {
      const [postId, description] = action.payload;
      state.comments = {
        ...state.comments,
        [postId]: {
          ...state.comments[postId],
          loading: false,
        }
      }
      notification.error({
        message:"Ohhh",
        description
      });

    },
    fetchCommentPending: (state, action: PayloadAction<[number]>) => {
      const [postId] = action.payload;
      state.comments = {
        ...state.comments,
        [postId]: {
          ...state.comments[postId],
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
