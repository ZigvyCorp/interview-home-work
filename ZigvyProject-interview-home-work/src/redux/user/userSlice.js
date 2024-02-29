import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    userData: {
      name: "",
      userName: "",
      email: "",
    },
    error: null,
    accessToken: null,
  },
  reducers: {
    fetchUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
      // tim action.payload co ton tai trong totaldata = id => lay cai khong ton tai.
      state.userData = {
        ...state.userData,
        name: action.payload.userData.name,
        userName: action.payload.userData.userName,
        email: action.payload.userData.email,
      };
      state.accessToken = action.payload.accessToken;
      // console.log(action.payload);
    },
    fetchUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // login
    SetUserLoginStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    setUserLoginSuccess(state, action) {
      state.userData = action.payload;
      state.isAuthenticated = true;
      // localStorage.setItem("user", JSON.stringify(action.payload.accessToken));
    },
    setUserLoginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    resetUserData(state) {
      state.userData = {
        name: "",
        userName: "",
        email: "",
      };
      state.accessToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  SetUserLoginStart,
  setUserLoginSuccess,
  setUserLoginFailure,
  resetUserData,
} = userSlice.actions;

export default userSlice.reducer;
