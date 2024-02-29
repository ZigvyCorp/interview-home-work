import { IUser } from "@/common/@types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authThunkLoginAction = createAsyncThunk(
  "auth/login",
  async ({ email, username }: Pick<IUser, "email" | "username">) => {}
);
