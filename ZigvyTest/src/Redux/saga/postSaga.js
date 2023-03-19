import AsyncStorage from "@react-native-async-storage/async-storage";
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
    .then(async (res) => {
      const posts = _.get(res, "data", []);
      const promise = posts?.map(async (post) => {
        const comments = await axios.get(
          `http://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        const user = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        return {
          comments: _.get(comments, "data", []),
          user: _.get(user, "data", null),
          post,
        };
      });

      const result = await Promise.all(promise);
      return result;
    })
    .catch(() => {
      return [];
    });
  yield put({
    type: postAction.GET_POST_SUCCESS,
    data: posts,
  });
}

function* reactPost(params) {
  const postID = _.get(params, "postID", null);
  const dataStoreJSON = yield AsyncStorage.getItem("persist:postState");
  const dataStore = JSON.parse(dataStoreJSON);
  const react = JSON.parse(_.get(dataStore, "postReact", ""));

  let data = react;
  const postData = [postID];
  if (react.includes(postID)) {
    data = react.filter((x) => x !== postID);
  } else {
    data = postData.concat(react);
  }

  yield put({
    type: postAction.REACT_POST_SUCCESS,
    data,
  });
}

export function* watchGetPost() {
  yield takeLatest(postAction.GET_POST, getPost);
}

export function* watchReactPost() {
  yield takeLatest(postAction.REACT_POST, reactPost);
}
