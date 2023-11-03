/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../posts/models/post';
import { searchPostByKeyword } from './services/searchPostThunk';
import { AxiosError } from 'axios';

type SearchStatus = 'loading' | 'success' | 'error';

type SearchState = {
    selectedPost: Post;
    searchStatus: SearchStatus;
    searchError: string;
};

const initialState: SearchState = {
    searchError: '',
    searchStatus: 'loading',
    selectedPost: null as any,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetSelectedPost: (state) => {
            state.selectedPost = null as any;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPostByKeyword.pending, (state) => {
                state.searchStatus = 'loading';
                state.searchError = '';
            })
            .addCase(searchPostByKeyword.fulfilled, (state, action) => {
                state.searchStatus = 'success';
                state.selectedPost = action.payload.content;
            })
            .addCase(searchPostByKeyword.rejected, (state, action) => {
                state.searchStatus = 'error';
                state.searchError = (action.payload as AxiosError)
                    ? (action.payload as AxiosError).message
                    : action.error.message!;
            });
    },
});

export const { resetSelectedPost } = searchSlice.actions;

export default searchSlice.reducer;
