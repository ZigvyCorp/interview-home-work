import { userApi } from "@/apis/user.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// sign up
export const signUp = createAsyncThunk("user/signUp", async (data: ISignUp, thunkApi) => {
	try {
		const user = await userApi.signUp(data);
		return user.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});

// sign up
export const signIn = createAsyncThunk("user/signIn", async (data: ISignIn, thunkApi) => {
	try {
		const user = await userApi.signIn(data);
		return user.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});

// get profile
export const getProfile = createAsyncThunk("user/getProfile", async (_data, thunkApi) => {
	try {
		const user = await userApi.getProfile();
		return user.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});

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
