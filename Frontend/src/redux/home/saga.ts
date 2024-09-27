import {
  call,
  put,
  takeLatest,
  type Effect,
  type ForkEffect,
} from 'redux-saga/effects';
import { type PayloadAction } from '@reduxjs/toolkit';
import { homeActions } from './slice';
import { getAllPost } from '../../api/post';

export function* getPostsSaga(
  action: PayloadAction<any>,
): Generator<Effect, void> {
  try {
    const { page, take, search } = action.payload;
    const data = yield call(getAllPost, page, take, search);
    yield put(homeActions.getPostsSuccess({ ...(data as object), search }));
  } catch (error) {
    yield put(homeActions.getPostsFailed(error));
  }
}

export function* watchHomeSagas(): Generator<ForkEffect, void> {
  yield takeLatest(homeActions.getPosts, getPostsSaga);
}

const homeSagas = watchHomeSagas;

export default homeSagas;
