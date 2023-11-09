import { IPost } from "../../types/api-response/post";
import { IPagination } from "../../types/common";
import { postsTypes } from "../action-types/postActionTypes";

export type PostsStateType = {
	posts: IPost[];
	total: number;
	searchPerformed: boolean;
};

export interface FetchPostsRequest {
	type: typeof postsTypes.FETCH_POSTS_REQUEST;
	payload: {
		limit: number;
		page: number;
		search?: string;
	};
}

export interface FetchPostsSuccess {
	type: typeof postsTypes.FETCH_POSTS_SUCCESS;
	payload: IPagination<IPost>;
}

export interface FetchPostsFailure {
	type: typeof postsTypes.FETCH_POSTS_FAILED;
	payload: {
		error: string;
	};
}

export interface ClearPosts {
	type: typeof postsTypes.CLEAR_POSTS;
}

export interface PerformSearch {
	type: typeof postsTypes.PERFORM_SEARCH;
}

export type PostsActions =
	| FetchPostsRequest
	| FetchPostsSuccess
	| FetchPostsFailure
	| ClearPosts
	| PerformSearch;
