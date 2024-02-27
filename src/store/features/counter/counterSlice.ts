import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { reducer: counterReducer } = counterSlice;
export const counterActions = counterSlice.actions;
