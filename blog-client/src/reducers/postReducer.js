import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [],
		page: 1,
		size: 10,
		total: 0,
		search: "",
		isLoading: false,
	},
	reducers: {
		startLoadPosts: (state) => {
			state.isLoading = true;
		},
		loadPostsSuccess: (state, action) => {
			const { posts, page, size, total, search } = action.payload;
			state.posts = posts;
			state.page = page;
			state.size = size;
			state.total = total;
			state.search = search;
			state.isLoading = false;
		},
		loadPostsFailed: (state) => {
			state.isLoading = false;
		},
		changePage: (state, action) => {
			state.page = action.payload;
		},
		changeSearch: (state, action) => {
			state.search = action.payload;
			state.page = 1;
		}
	},
});

export const { startLoadPosts, loadPostsSuccess, loadPostsFailed, changePage, changeSearch } =
	postSlice.actions;

export default postSlice.reducer;
