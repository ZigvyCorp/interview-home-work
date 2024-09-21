import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetCurrent } from './../../apis/user';

export const getCurrentUser = createAsyncThunk(
    'user/current',
    async (data, { rejectWithValue }) => {
        const res = await apiGetCurrent()
        if (!res.success) return rejectWithValue(res)
        return res.rs

    }
)