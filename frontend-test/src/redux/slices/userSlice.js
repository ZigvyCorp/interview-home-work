import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userServ } from "../../services/userService";
import { getDataFromLocal } from "../../utils/localStore";

export const getAllUserThunk = createAsyncThunk("user/getAllUser", async () => {
  const res = await userServ.getAllUser();
  return res.data;
});

const initialState = {
  name: getDataFromLocal("user"),
  users: [],
  infoUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setName: (state, action) => {

      if (state.name == null) {
        // useDispatch
        state.name = action.payload;
      }
    },
    getInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUserThunk.fulfilled, (state, action) => {
      // console.log(action);
      // console.log(state);
      state.users = action.payload;
    });
  },
});

export const { setName, getInfoUser } = userSlice.actions;
export default userSlice.reducer;
