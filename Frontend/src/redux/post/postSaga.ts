import {
  call,
  put,
  takeLatest,
  type Effect,
  type ForkEffect,
} from 'redux-saga/effects';
import { type PayloadAction } from '@reduxjs/toolkit';
import { postActions } from './postSlice';
import { getPostById } from '../../api/post';

export function* getPostSaga(
  action: PayloadAction<any>,
): Generator<Effect, void> {
  try {
    const { id } = action.payload;

    const data = yield call(getPostById, id);

    yield put(postActions.getPostSuccess(data));
  } catch (error) {
    yield put(postActions.getPostFailed(error));
  }
}

export function* watchPostSagas(): Generator<ForkEffect, void> {
  yield takeLatest(postActions.getPost, getPostSaga);
}

const postSagas = watchPostSagas;

export default postSagas;
