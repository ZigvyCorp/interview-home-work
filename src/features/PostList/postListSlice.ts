import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fakeBody,
	randomDate,
	randomName,
	randomTag,
} from '../../utils/fakeData';
import { RootState } from '../../app/store';

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
	comments: Comment[];
};

export type Comment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
	createdAt: string;
};
export type FakePost = Post & {
	author: string;
	createdAt: string;
	tags: string[];
};

export type ListPostPagination = {
	_page: number;
	_limit: number;
  _embed?: string
};

export interface ListPostResponse {
	postList: Post[];
	pagination: any;
}

export interface PostListState {
	loadingPostList: boolean;
	loadingDetailPost: boolean;
	postList: FakePost[];
	postDetail: FakePost | null;
	error: string;
	pagination: ListPostPagination;
}

const initialState: PostListState = {
	loadingPostList: false,
	loadingDetailPost: false,
	postList: [],
	postDetail: null,
	error: '',
	pagination: {
		_page: 1,
		_limit: 10,
	},
};

const postSlice = createSlice({
	name: 'postList',
	initialState,
	reducers: {
		setPostList(
			state,
			action: PayloadAction<{posts:Post[], pagination?: ListPostPagination}>
		) {
			//Fake data
			const fakePost = action.payload.posts.map((post) => {
				const commentsWithCreatedAt = post.comments.map((comment) => {
					return {
						...comment,
						createdAt: randomDate(),
					};
				});
				return {
					...post,
					createdAt: randomDate(),
					author: randomName(),
					tags: randomTag(),
					comments: [...commentsWithCreatedAt],
				};
			});
			state.postList = fakePost;
			state.pagination = action.payload.pagination || state.pagination
			state.loadingPostList = false;
		},
		setPostDetail(state, action: PayloadAction<Post>) {
			const commentsWithCreatedAt = action.payload.comments.map((comment) => {
				return {
					...comment,
					createdAt: randomDate(),
				};
			});
			const fakePost = {
				...action.payload,
				body: fakeBody(),
				createdAt: randomDate(),
				author: randomName(),
				tags: [...new Set(randomTag())],
				comments: [...commentsWithCreatedAt],
			};
			state.postDetail = fakePost;
			state.loadingDetailPost = false;
		},
		fetchDetailPost(state, action: PayloadAction<string>) {
			state.loadingDetailPost = true;
		},
		fetchPostList(state,action) {
			state.loadingPostList = true;
		},
		fetchPostListFailed(state, action) {
			state.loadingPostList = false;
		},
		fetchSearchPostList(state, action) {
			state.loadingPostList = true;
		},
	},
});

// Actions
export const postActions = postSlice.actions;

// Selectors
export const selectPostList = (state: RootState) => state.postList.postList;

export const selectDetailPost = (state: RootState) => state.postList.postDetail;

export const selectLoadingDetailPost = (state: RootState) =>
	state.postList.loadingDetailPost;

	export const selectLoadingPostList = (state: RootState) =>
	state.postList.loadingPostList;

export const selectPostListPage = (state: RootState) => state.postList.pagination._page
export default postSlice.reducer;
