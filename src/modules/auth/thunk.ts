import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_SERVICE } from "./service";

import { ILoginParams } from "./interface";

export const login = createAsyncThunk("auth/login", async (data: ILoginParams, { rejectWithValue }) => {
  try {
    const response = await AUTH_SERVICE.login(data);
    if (response.data) {
      return response.data.data;
    }
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    rejectWithValue(err.response.data.error[0].message);
    throw err.response.data.error[0].message;
  }
});
