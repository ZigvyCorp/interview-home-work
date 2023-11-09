import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPost: (state, action) => {
            return action.payload;
        },
    },
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
