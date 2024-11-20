import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAllCommentsByPostIDService } from './commentService';
import { AxiosError } from 'axios';

export const findAllCommentsByPostID = createAsyncThunk(
    'findAllCommentsByPostID',
    async ({ page, postID }: { page: number; postID: number }, { rejectWithValue }) => {
        try {
            const data = await findAllCommentsByPostIDService({ page, postID });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
