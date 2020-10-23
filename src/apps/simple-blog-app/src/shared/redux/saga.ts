import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchBlog(skip: number) {
  return axios.get('/api/v1/posts/1.0?skip=' + skip);
}

type WorkerPayload = {
  skip: number,
}
function* workerSaga(...args: WorkerPayload[]) {
  try {
    const response = yield fetchBlog(args[ 0 ].skip);

    const data = response.data.posts;
    yield put({ type: 'API_CALL_SUCCESS', data });

  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}