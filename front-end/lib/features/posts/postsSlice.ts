import { createAppSlice } from "@/lib/createAppSlice";
import type { PostData } from "@/types";

export interface PostsSliceState {
	value: PostData[];
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
			(state, action: { type: string; payload: PostData[] }) => {
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
