import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Comment } from './models/comment';
import { findAllCommentsByPostID } from './services/commentThunk';
import { AxiosError } from 'axios';

type CommentStatus = 'loading' | 'success' | 'error';

type CommentState = {
    commentList: Comment[];
    commentStatus: CommentStatus;
    commentError: string;
    isNewList: boolean;
    hasNextPage: boolean;
};

const initialState: CommentState = {
    commentList: [],
    commentError: '',
    commentStatus: 'loading',
    isNewList: true,
    hasNextPage: true,
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        toggleIsNewCommentList: (state, action: PayloadAction<boolean>) => {
            state.isNewList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(findAllCommentsByPostID.pending, (state) => {
                state.commentError = '';
                state.commentStatus = 'loading';
            })
            .addCase(findAllCommentsByPostID.fulfilled, (state, action) => {
                state.commentStatus = 'success';
                state.hasNextPage = Boolean(action.payload.content.length);

                if (state.isNewList) {
                    state.commentList = action.payload.content;
                } else {
                    state.commentList = [...state.commentList, ...action.payload.content];
                }
            })
            .addCase(findAllCommentsByPostID.rejected, (state, action) => {
                state.commentStatus = 'error';
                state.commentError = (action.payload as AxiosError)
                    ? (action.payload as AxiosError).message
                    : action.error.message!;
            });
    },
});

export const { toggleIsNewCommentList } = commentSlice.actions;

export default commentSlice.reducer;
