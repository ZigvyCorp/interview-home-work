import { userApi } from "@/apis/user.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all user
export const getAllUsers = createAsyncThunk("user/getAllUsers", async (_data, thunkApi) => {
	try {
		const res = await userApi.getAllUsers();
		return res.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});

// Get user by id
export const getUserById = createAsyncThunk("user/getUserById", async (id: string, thunkApi) => {
	try {
		const res = await userApi.getUserById(id);
		return res.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});
