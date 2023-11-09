import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        deincrement: (state) => {
            state.value -= 1;
        },
        set: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, deincrement, set } = counterSlice.actions;

export default counterSlice.reducer;
