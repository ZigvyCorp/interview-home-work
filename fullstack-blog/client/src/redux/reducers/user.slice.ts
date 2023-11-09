import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserById } from "../actions/user.action";
import { RootState } from "../store";

interface PostInitialState {
	users: IUser[];
	currentPage: number;
	totalUsers: number;
	totalPages: number;
}

const initialState: PostInitialState = {
	users: [],
	currentPage: 0,
	totalUsers: 0,
	totalPages: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.users = payload.users;
			state.totalUsers = payload.totalUsers;
			state.totalPages = payload.totalPages;
			state.currentPage = payload.currentPost;
		});
		builder.addCase(getUserById.fulfilled, (state, { payload }) => {
			console.log(payload);
			state.users[0] = payload.users;
		});
	},
});

export const {} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
