import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
};

export const currentPage = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = currentPage.actions;

export default currentPage.reducer;
