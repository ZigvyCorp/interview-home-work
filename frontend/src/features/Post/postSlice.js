const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
  name: "postState",
  initialState: [],
  reducers: {
    persistData(state, { payload }) {
      return payload;
    },
  },
});

const { actions, reducer } = postSlice;
export const { persistData } = actions;
export default reducer;
