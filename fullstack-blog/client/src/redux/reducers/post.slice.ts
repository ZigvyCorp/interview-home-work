import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getPostById } from "../actions/post.action";
import { RootState } from "../store";

interface PostInitialState {
	listPost: {
		posts: IPost[];
		currentPage: number;
		totalPosts: number;
		totalPages: number;
	};
	detailPost: IPost | null;
}

const initialState: PostInitialState = {
	listPost: {
		posts: [],
		currentPage: 0,
		totalPosts: 0,
		totalPages: 0,
	},
	detailPost: null,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
			state.listPost.posts = payload.posts;
			state.listPost.totalPosts = payload.totalPosts;
			state.listPost.totalPages = payload.totalPages;
			state.listPost.currentPage = payload.currentPage;
		});
		builder.addCase(getPostById.fulfilled, (state, { payload }) => {
			console.log(payload);
			if (!state.detailPost) {
				state.detailPost = {} as IPost;
			}
			state.detailPost = payload;
		});
	},
});

export const {} = postSlice.actions;
export const selectPost = (state: RootState) => state.post;
export default postSlice.reducer;
