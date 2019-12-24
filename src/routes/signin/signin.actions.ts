import {
  ACTION_FETCHED,
  ACTIION_FETCH_FAIL,
  ACTION_FETCH
} from "./signin.constant";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import { api } from "./signin.services";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = (payload: any) => ({
  type: ACTIION_FETCH_FAIL,
  payload
});

function* actionFetch(action: {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}) {
  try {
    yield delay(500);
    const { data } = yield call(api, action.payload);
    localStorage.setItem("access_token", data.access_token);
    yield put(actionFetched(data));
    window.location.href = "/";
  } catch (error) {
    yield put(actionFetchFail(error.response.data.error));
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_FETCH, actionFetch);
}

export default [watchFetch];
