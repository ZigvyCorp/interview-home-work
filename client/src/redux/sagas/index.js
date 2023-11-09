import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts);
  yield put(actions.getPosts.getPostSuccess(posts.data));
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

//

export default mySaga;
