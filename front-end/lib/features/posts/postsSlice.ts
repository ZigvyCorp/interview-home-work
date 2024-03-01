import { createAppSlice } from "@/lib/createAppSlice";
import { fetchPosts } from "./postAPI";

export interface Post {
	_id: string;
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface PostsSliceState {
	value: Post[];
	status: "idle" | "loading" | "failed";
}

const initialState: PostsSliceState = {
	value: [],
	status: "idle",
};

export const postsSlice = createAppSlice({
	name: "posts",
	initialState,
	reducers: (create) => ({
		loadMoreAsync: create.asyncThunk(
			async () => {
				const response = await fetchPosts();
				return response;
			},
			{
				pending: (state) => {
					state.status = "loading";
				},
				fulfilled: (state, action) => {
					console.log(action);
					state.status = "idle";
					state.value = state.value.concat(action.payload);
				},
				rejected: (state) => {
					state.status = "failed";
				},
			}
		),
	}),
	selectors: {
		selectPosts: (posts) => posts.value,
		selectStatus: (posts) => posts.status,
	},
});

export const { loadMoreAsync } = postsSlice.actions;

export const { selectPosts, selectStatus } = postsSlice.selectors;
