import {
  ACTION_POSTS_FETCHED,
  ACTION_POSTS_FETCH_FAIL,
  ACTION_POSTS_FETCH,
  ACTION_REMOVE_POST,
  ACTION_REMOVE_POST_FETCHED
} from "./profile.constant";
import { call, takeEvery, put } from "redux-saga/effects";
import { api, apiRemovePost } from "./profile.services";
import { getAccessToken } from "src/shared/utils";

export const actionFetched = (payload: any) => ({
  type: ACTION_POSTS_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTION_POSTS_FETCH_FAIL
});

function* actionFetch() {
  try {
    const { data } = yield call(api, getAccessToken());
    yield put(actionFetched(data));
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetch() {
  yield takeEvery(ACTION_POSTS_FETCH, actionFetch);
}

//remove post
export const actionRemovePostFetched = (payload: any[]) => ({
  type: ACTION_REMOVE_POST_FETCHED,
  payload
});
export const actionRemovePostFail = (payload: any) => ({
  type: ACTION_REMOVE_POST_FETCHED,
  payload
});

function* actionRemovePost(action: { type: string; payload: string }) {
  try {
    console.log(action);
    const { data } = yield call(
      apiRemovePost,
      getAccessToken(),
      action.payload
    );
    console.log("data", data);
    yield put(actionRemovePostFetched(data));
  } catch (error) {
    console.log(error);
    yield put(actionRemovePostFail(error));
  }
}

function* watchRemovePost() {
  yield takeEvery(ACTION_REMOVE_POST, actionRemovePost);
}

export default [watchFetch, watchRemovePost];
