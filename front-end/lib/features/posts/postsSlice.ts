import { createAppSlice } from "@/lib/createAppSlice";

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
		loadMorePost: create.reducer(
			(state, action: { type: string; payload: Post[] }) => {
				state.status = "idle";
				state.value = state.value.concat(action.payload);
			}
		),
	}),
	selectors: {
		selectPosts: (posts) => posts.value,
		selectStatus: (posts) => posts.status,
	},
});

export const { loadMorePost } = postsSlice.actions;

export const { selectPosts, selectStatus } = postsSlice.selectors;
