import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from './models/post';
import { findAllPosts, findPostByPostID } from './services/postThunk';
import { AxiosError } from 'axios';

type PostStatus = 'loading' | 'success' | 'error';

type PostState = {
    postList: Post[];
    postStatus: PostStatus;
    hasNextPage: boolean;
    postError: string;
    selectedPost: Post;
    isNewPostList: boolean;
};

const initialState: PostState = {
    postList: [],
    postStatus: 'loading',
    postError: '',
    hasNextPage: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedPost: null as any,
    isNewPostList: false,
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        toggleIsNewPostList: (state, action: PayloadAction<boolean>) => {
            state.isNewPostList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(findAllPosts.pending, (state) => {
                state.postStatus = 'loading';
                state.postError = '';
            })
            .addCase(findAllPosts.fulfilled, (state, action) => {
                state.postStatus = 'success';
                state.hasNextPage = Boolean(action.payload.content.length);
                if (state.isNewPostList) {
                    state.postList = action.payload.content;
                } else {
                    state.postList = [...state.postList, ...action.payload.content];
                }
            })
            .addCase(findAllPosts.rejected, (state, action) => {
                state.postStatus = 'error';
                state.postError = (action.payload as AxiosError)
                    ? (action.payload as AxiosError).message
                    : action.error.message!;
            })
            .addCase(findPostByPostID.pending, (state) => {
                state.postStatus = 'loading';
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                state.selectedPost = null as any;
                state.postError = '';
            })
            .addCase(findPostByPostID.fulfilled, (state, action) => {
                state.postStatus = 'success';
                state.selectedPost = action.payload.content;
            })
            .addCase(findPostByPostID.rejected, (state, action) => {
                state.postStatus = 'error';
                state.postError = (action.payload as AxiosError)
                    ? (action.payload as AxiosError).message
                    : action.error.message!;
            });
    },
});

export const { toggleIsNewPostList } = postSlice.actions;

export default postSlice.reducer;
