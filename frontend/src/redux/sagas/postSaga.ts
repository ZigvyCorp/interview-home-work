import { call, put, takeLatest } from 'redux-saga/effects';
import { setPosts, addPosts , setTotalPosts} from '../reducers/postReducer';
import { fetchPosts } from '../../apis/postApi';
import { Post, FilterPost, PostState } from '../../types/postType';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchPostsSaga(action: PayloadAction<FilterPost>) {
    try {
        const { limit, skip, query } = action.payload;
        const postState: PostState = yield call(fetchPosts, limit, skip, query);
        yield put(setPosts(postState.posts));
        yield put(setTotalPosts(postState.totalPosts));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function* fetchMorePostsSaga(action: PayloadAction<FilterPost>) {
    try {
        const { limit, skip, query } = action.payload;
        const postState: PostState = yield call(fetchPosts, limit, skip, query);
        yield put(addPosts(postState.posts)); 
    } catch (error) {
        console.error('Error fetching more posts:', error);
    }
}

export function* watchFetchPosts() {
    yield takeLatest('FETCH_POSTS', fetchPostsSaga);
    yield takeLatest('FETCH_MORE_POSTS', fetchMorePostsSaga);
}
