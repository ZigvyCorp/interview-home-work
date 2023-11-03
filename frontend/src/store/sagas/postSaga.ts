// postsSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slices/postSlice";

function* fetchPosts(): Generator<any, void, any> {
  try {
    const response = yield call(() =>
      axios.get("http://localhost:3000/posts", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
    ); // Replace with your API endpoint

    yield put(fetchDataSuccess(response));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

const postSaga = [takeLatest(fetchData.type, fetchPosts)];

export default postSaga;
