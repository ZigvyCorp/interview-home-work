import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getProfile, getUserById, signIn, signUp } from "../actions/user.action";
import { RootState } from "../store";

interface PostInitialState {
	listUser: {
		users: IUser[];
		currentPage: number;
		totalUsers: number;
		totalPages: number;
	};
	detailUser: IUser | null;
	me: IUser | null;
}

const initialState: PostInitialState = {
	listUser: {
		users: [],
		currentPage: 0,
		totalUsers: 0,
		totalPages: 0,
	},
	me: null,
	detailUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		resetUser: () => {
			localStorage.removeItem("token");
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.listUser.users = payload.users;
			state.listUser.totalUsers = payload.totalUsers;
			state.listUser.totalPages = payload.totalPages;
			state.listUser.currentPage = payload.currentPost;
		});
		builder.addCase(getUserById.fulfilled, (state, { payload }) => {
			console.log(payload);
			state.detailUser = payload.users;
		});
		builder.addCase(signUp.fulfilled, (state, { payload }) => {
			const { newUser, token } = payload;
			if (!state.me) state.me = {} as IUser;
			state.me._id = newUser._id;
			state.me.email = newUser.email;
			state.me.image = newUser.image;
			state.me.name = newUser.name;
			state.me.username = newUser.username;
			localStorage.setItem("token", token);
		});
		builder.addCase(signIn.fulfilled, (state, { payload }) => {
			const { user, token } = payload;
			if (!state.me) state.me = {} as IUser;
			state.me._id = user._id;
			state.me.email = user.email;
			state.me.image = user.image;
			state.me.name = user.name;
			state.me.username = user.username;
			localStorage.setItem("token", token);
		});
		builder.addCase(getProfile.fulfilled, (state, { payload }) => {
			if (!state.me) state.me = {} as IUser;
			state.me._id = payload.id;
			state.me.email = payload.email;
			state.me.image = payload.image;
			state.me.name = payload.name;
			state.me.username = payload.username;
		});
	},
});

export const { resetUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
