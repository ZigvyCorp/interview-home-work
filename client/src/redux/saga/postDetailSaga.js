import axios from "axios";
import { GET_POST_DETAIL, FETCH_POST_DETAIL_SUCCESS,FETCH_POST_DETAIL_FAILURE } from "../constants/index";
import { call, put, takeEvery  } from "redux-saga/effects";

function* getPostDetail(action) {
  try {
    const { id } = action.payload;
    const response = yield call(axios.get, `${process.env.REACT_APP_API}/post/post/${id}`)
    yield put({ type: FETCH_POST_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_POST_DETAIL_FAILURE, payload: error });
  }
}

function* watchGetPostDetail() {
  yield takeEvery(GET_POST_DETAIL, getPostDetail);
}

 function* getPostDetailSaga() {
  yield watchGetPostDetail();
}
export {
    getPostDetailSaga
}

