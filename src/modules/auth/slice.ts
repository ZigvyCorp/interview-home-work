import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";

import { IRootState } from "@/modules/shared";

import { AUTH_SLICE } from "./constants";
import { login } from "./thunk";

// import { getToken, removeToken, saveToken } from "@/services/storageService";

// import { globalAction } from "@/modules/notify";
// import { AUTH_API, ILOGIN_FORM, SLICE_INIT, ISLICE_INIT } from "@/modules/auth";
// import { IRootState } from "@/shared";
// import { RootState } from "@/modules/shared";

// import searchAPI from "./searchAPI";

// export const login = createAsyncThunk("auth/login", async (data: ILoginParams, { dispatch }) => {
//   try {
//     const response = await AUTH_SERVICE.login(data);
//     if (response.data) {
//       //   saveToken(response.data.token);
//       //   return response.data.success;
//       console.log("afsd", response);
//     }
//   } catch (err: any) {
//     // removeToken();
//     if (!err.response) {
//       throw err;
//     }
//     // dispatch(globalAction.openNotify({ message: err.response.data.message, format: "error" }));
//     throw err.response.data.message;
//   }
// });
// export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
//   try {
//     const response = await AUTH_API.logout();
//     if (response) {
//       removeToken();
//       return response.data.success;
//     }
//   } catch (err: any) {
//     // localStorage.removeItem(KEY_SETTINGS.token);
//     if (!err.response) {
//       throw err;
//     }
//     dispatch(globalAction.openNotify({ message: err.response.data.message, format: "error" }));
//     throw err.response.data.message;
//   }
// });

const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_SLICE,
  reducers: {
    // checkAuth: (state) => {
    //   const token = getToken();
    //   if (token && token !== null) {
    //     state.isAuth = true;
    //   } else {
    //     state.isAuth = false;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder

      // login
      .addCase(login.pending, (state) => {
        // state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        // state.loading = false;
        // state.isAuth = true;
        // state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("slcicee", action.error);

        // state.loading = false;
        // state.isAuth = false;
        // state.error = action.error.message;
      });
  },
});

// Actions

export const authAction = authSlice.actions;

// Selectors

export const selectAuth = (state: IRootState<any>) => state.auth;

// Reducer

export const authReducer = authSlice.reducer;
