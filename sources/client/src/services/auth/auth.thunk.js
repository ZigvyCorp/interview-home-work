import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "./auth.api";

export const loginThunk = createAsyncThunk("auth/login", async (data) => {
    const response = await authAPI.login(data);
    return response.data;
});

export const verifyJwtThunk = createAsyncThunk("auth/verify-jwt", async () => {
    const response = await authAPI.verifyJwt();
    return response.data;
});
