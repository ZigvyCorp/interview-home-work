import { GET_ALL_COMMENTS, GET_ALL_POSTS, GET_POSTS_SEARCH_ACTION, GET_POST_BY_USERID } from "../types/PostType";

const initialState = {
	posts: [],
	comments: [],
	allPosts: [],
};

export const PostReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			return { ...state, allPosts: action.allPosts };
		case GET_POST_BY_USERID:
			return { ...state, posts: action.posts };
		case GET_ALL_COMMENTS:
			return { ...state, comments: action.comments };
		case GET_POSTS_SEARCH_ACTION:
			let postsUpdate = [...state.posts];
			let allPostsUpdate = [...state.allPosts];
			postsUpdate = postsUpdate.filter((post) => post.title.search(action.value) !== -1);
			allPostsUpdate = allPostsUpdate.filter((post) => post.title.search(action.value) !== -1);
			return { ...state, posts: postsUpdate, allPosts: allPostsUpdate };

		default:
			return state;
	}
};
