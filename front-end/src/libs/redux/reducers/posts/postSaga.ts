import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import postAPI from '../../../../api/postApi';
import { ListParams, ListResponse } from '../../../../types/common';
import { Post } from '../../../../types/models/post';
import { postActions } from './postsReducer';

function* fetchPostList(action: PayloadAction<ListParams>) {
  try {
    const res: ListResponse<Post> = yield call(postAPI.getAll, action.payload);
    yield put(postActions.fetchPostListSuccess(res));
  } catch (error) {
    console.log('Failed to fetch post list', error);
    yield put(postActions.fetchPostListFailed());
  }
}

export default function* postSaga() {
  yield takeLatest(postActions.fetchPostList, fetchPostList);
}
