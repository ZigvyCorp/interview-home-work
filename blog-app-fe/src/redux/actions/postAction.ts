import { IPost } from "../../types/api-response/post";
import { IPagination } from "../../types/common";
import { postsTypes } from "../action-types/postActionTypes";
import {
	ClearPosts,
	FetchPostsFailure,
	FetchPostsRequest,
	FetchPostsSuccess,
	PerformSearch,
} from "../types/post.type";

export const fetchPostsRequest = (payload: {
	limit: number;
	page: number;
	search?: string;
}): FetchPostsRequest => ({
	type: postsTypes.FETCH_POSTS_REQUEST,
	payload,
});

export const fetchPostSuccess = (payload: IPagination<IPost>): FetchPostsSuccess => ({
	type: postsTypes.FETCH_POSTS_SUCCESS,
	payload,
});

export const fetchPostFailure = (payload: { error: string }): FetchPostsFailure => ({
	type: postsTypes.FETCH_POSTS_FAILED,
	payload,
});

export const clearPosts = (): ClearPosts => ({
	type: postsTypes.CLEAR_POSTS,
});

export const performSearch = (): PerformSearch => ({
	type: postsTypes.PERFORM_SEARCH,
});
