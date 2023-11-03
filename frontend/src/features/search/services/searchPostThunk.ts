import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchPostByKeywordService } from './searchPostService';
import { AxiosError } from 'axios';

export const searchPostByKeyword = createAsyncThunk(
    'searchPostByKeyword',
    async (keyword: string, { rejectWithValue }) => {
        try {
            const data = await searchPostByKeywordService(keyword);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
