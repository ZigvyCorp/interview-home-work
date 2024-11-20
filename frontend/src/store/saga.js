import { put, takeLatest, call, all } from 'redux-saga/effects';
import { fetchDataSuccessAction, fetchDataFailureAction, FETCH_DATA, fetchUserSuccessAction, fetchUserFailureAction, FETCH_USER, FETCH_COMMENTS, fetchCommentsSuccessAction, fetchCommentsFailureAction  } from './actions';
import {fetchData} from "../api/api"

function* fetchDataSaga() {
  try {
    const data = yield call(fetchData, "posts");
    yield put(fetchDataSuccessAction(data));
  } catch (error) {
    yield put(fetchDataFailureAction(error));
  }
}

function* fetchOneUser() {
  try {
    const data = yield call(fetchData, "users?userId=1");
    yield put(fetchUserSuccessAction(data));
  } catch (error) {
    yield put(fetchUserFailureAction(error));
  }
}

function* fetchComments(action) {
  try {
    const postId = action.payload
    const data = yield call(fetchData, "comments?postId=" + postId);
    yield put(fetchCommentsSuccessAction(data));
  } catch (error) {
    yield put(fetchCommentsFailureAction (error));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(FETCH_DATA, fetchDataSaga),
    takeLatest(FETCH_USER, fetchOneUser),
    takeLatest(FETCH_COMMENTS, fetchComments)
  ]);
}

export default rootSaga;
