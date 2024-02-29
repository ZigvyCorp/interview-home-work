import { call, put, takeEvery } from "redux-saga/effects";
import blogService from "../services/blogService";
import {
  getBlogsFailure,
  getBlogsSuccess,
} from "../store/reducers/blogReducer";

function* watchGetBlogs() {
  try {
    const res = yield call(async () => blogService.getBlogs());
    if (res.data) {
      const blogs = res.data || [];
      yield put(getBlogsSuccess(blogs));
    }
  } catch (error) {
    yield put(getBlogsFailure());
  }
}

function* blogSaga() {
  yield takeEvery("blogs/getBlogsFetch", watchGetBlogs);
}

export default blogSaga;
