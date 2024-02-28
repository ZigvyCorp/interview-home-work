import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  comment: [],
  user: [],
};

export const commonSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.value = action.payload?.posts;
      state.comment = action.payload?.comments;
      state.user = action.payload?.users;
      return state;
    },
  },
});

export const { fetchData } = commonSlice.actions;

export default commonSlice.reducer;
