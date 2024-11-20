import {
  call,
  delay,
  put,
  select,
  take,
  takeEvery,
  takeLeading,
  all,
} from "redux-saga/effects";
import * as ActionTypes from "../actionTypes";
import postApi from "../../apis/PostApi";

export function* PostWatcher() {
  yield takeLeading(ActionTypes.GET_ALL_POSTS, workerGetAllPosts);
  yield takeLeading(ActionTypes.GET_TOTAL_POSTS, workerGetTotalPosts);
  yield takeLeading(ActionTypes.UPDATE_POST, workerUpdatePosts);
}

function* workerGetAllPosts(action) {
  try {
    const data = yield call(async () => {
      return await postApi.getAllPosts(action.data);
    });

    yield put({
      type: ActionTypes.GET_ALL_POSTS_SUCCESS,
      data: {
        posts: data,
      },
    });
  } catch (error) {
    console.log("err: ", error);
  }
}

function* workerGetTotalPosts() {
  try {
    const data = yield call(async () => {
      return await postApi.getAllPosts();
    });

    yield put({
      type: ActionTypes.GET_TOTAL_POSTS_SUCCESS,
      data: {
        total: data.length,
      },
    });
  } catch (error) {
    console.log("err: ", error);
  }
}

function* workerUpdatePosts(action) {
  try {
    yield put({
      type: ActionTypes.UPDATE_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log("err: ", error);
  }
}
