import { createSlice } from '@reduxjs/toolkit';

type PostState = {
    value: number;
};

const initialState: PostState = {
    value: 0,
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
});

export default postSlice.reducer;
