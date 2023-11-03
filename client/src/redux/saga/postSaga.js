import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  GET_POSTS,
} from "../constants/index";

function* getPosts(action) {
  const { title, page,perpage } = action.payload;
  
  try {
    const response = yield axios.get(`${process.env.REACT_APP_API}/post/post`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        title: title,
        page: page,
        perpage: perpage,
      },
    });
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error });
  }
}

function* watchGetPosts() {
  yield takeEvery(GET_POSTS, getPosts);
}

function* getPostsSaga() {
  yield watchGetPosts();
}

export { getPostsSaga };
