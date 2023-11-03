import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { findAllPostsService, findPostByPostIDService } from './postService';

export const findAllPosts = createAsyncThunk(
    'findAllPosts',
    async (page: number, { rejectWithValue }) => {
        try {
            const data = await findAllPostsService(page);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);

export const findPostByPostID = createAsyncThunk(
    'findPostByPostID',
    async (postID: number, { rejectWithValue }) => {
        try {
            const data = await findPostByPostIDService(postID);
            console.log('TEST');
            return data;
        } catch (error) {
            const err = error as AxiosError;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
