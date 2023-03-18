import axios from "axios";
import _ from "lodash";
import { put, takeLatest } from "redux-saga/effects";
import postAction from "../action/postAction";

function* getPost(data) {
  const { params } = data;
  const start = _.get(params, "start", 0);
  const limit = _.get(params, "limit", 10);
  const search = _.get(params, "search", "");

  const posts = yield axios
    .get(
      `http://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}&title_like=${search}`
    )
    .then((res) => {
      const posts = _.get(res, "data", []);
      return posts;
    })
    .catch(() => {
      return [];
    });
  yield put({
    type: postAction.GET_POST_SUCCESS,
    data: posts,
  });
}

export function* watchGetPost() {
  yield takeLatest(postAction.GET_POST, getPost);
}
