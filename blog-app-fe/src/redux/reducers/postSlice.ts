import { postsTypes } from "../action-types/postActionTypes";
import { RootState } from "../store";
import { PostsActions, PostsStateType } from "../types/post.type";

const postsInitState: PostsStateType = {
	posts: [],
	total: 0,
	searchPerformed: false,
};

const postsReducer = (state = postsInitState, action: PostsActions) => {
	switch (action.type) {
		case postsTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: [...state.posts, ...action.payload.data],
				total: action.payload.total,
			};
		case postsTypes.FETCH_POSTS_FAILED:
			return state;
		case postsTypes.CLEAR_POSTS:
			return {
				posts: [],
				total: 0,
				searchPerformed: false,
			};
		case postsTypes.PERFORM_SEARCH:
			return {
				...state,
				searchPerformed: true,
			};
		default:
			return state;
	}
};

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectTotal = (state: RootState) => state.posts.total;
export const selectPost = (state: RootState, id: string) => state.posts.posts.find((p) => p.id === id);
export const selectSearchPerformed = (state: RootState) => state.posts.searchPerformed;

export default postsReducer;
