import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, verifyJwtThunk } from "./auth.thunk";

const initialState = {
    data: [],
    isLogin: false,
    loading: true,
    error: null,
};

export default createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        // Todo login
        builder.addCase(loginThunk.pending, (state, action) => {
            state.loading = true;
            state.isLogin = false;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            localStorage.setItem("accessToken", action.payload.token);
            localStorage.setItem("userID", action.payload.user._id);
            state.data = action.payload;
            state.loading = false;
            state.isLogin = true;
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.isLogin = false;
        });

        // TODO Thunk Verify Jwt
        builder.addCase(verifyJwtThunk.pending, (state, action) => {
            state.loading = true;
            state.isLogin = false;
        });
        builder.addCase(verifyJwtThunk.fulfilled, (state, action) => {
            localStorage.setItem("accessToken", action.payload.token);
            localStorage.setItem("userID", action.payload.user._id);
            state.loading = false;
            state.error = null;
            state.isLogin = true;
            state.data = action.payload;
        });
        builder.addCase(verifyJwtThunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.isLogin = false;
        });
    },
});
