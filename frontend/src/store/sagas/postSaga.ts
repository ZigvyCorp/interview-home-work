// postsSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slices/postSlice";
import posts from './../../data/posts.json';

function* fetchPosts(): Generator<any, void, any> {
  try {
    // const response = yield call(() =>
    //   axios.get("https://jsonplaceholder.typicode.com/posts")
    // ); // Replace with your API endpoint
    
    yield put(fetchDataSuccess(posts));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

const postSaga = [takeLatest(fetchData.type, fetchPosts)];

export default postSaga;
