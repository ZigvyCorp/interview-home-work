import { PayloadAction } from '@reduxjs/toolkit';
import {
	getPostListAsync,
	searchPostListAsync,
	getDetailPostAsync,
} from '../../api/postList';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
	ListPostPagination,
	Post,
	postActions,
} from '../../features/PostList/postListSlice';

function* getPostList(action: PayloadAction<number>) {
	try {
		const param: ListPostPagination = {
			_page: action.payload,
			_limit: 10,
			_embed: 'comments',
		};
		const posts: Post[] = yield call(getPostListAsync, param);
		yield put(postActions.setPostList({ posts, pagination: param }));
	} catch (error) {
		yield put(postActions.fetchPostListFailed(error));
	}
}

function* getDetailPost(action: PayloadAction<string>) {
	try {
		const post: Post = yield call(getDetailPostAsync, action.payload);
		yield put(postActions.setPostDetail(post));
	} catch (error) {
		yield put(postActions.fetchPostListFailed(error));
	}
}

function* searchPostListByKeyword(
	action: PayloadAction<{ page: number; q: string }>
) {
	try {
		const posts: Post[] = yield call(searchPostListAsync, action.payload);
		yield put(postActions.setPostList({ posts }));
	} catch (error) {
		yield put(postActions.fetchPostListFailed(error));
	}
}

export default function* postListSaga() {
	yield takeEvery(postActions.fetchPostList.type, getPostList);
	yield takeEvery(postActions.fetchDetailPost.type, getDetailPost);
	yield takeLatest(
		postActions.fetchSearchPostList.type,
		searchPostListByKeyword
	);
}
