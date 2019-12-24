import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH
} from "./templates.constant";
import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "./templates.services";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTIION_FETCH_FAIL
});

function* actionFetch() {
  try {
    const { data } = yield call(api);
    yield put(actionFetched(data));
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
