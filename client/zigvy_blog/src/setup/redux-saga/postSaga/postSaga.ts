import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionType, DataResponse } from "../../../libs/commonTypes";
import {
  GET_POST_DATA_API,
  GET_POST_DATA_REDUX,
  GET_POST_DATA_REDUX_FAILED,
  GET_POST_DETAIL_API,
  GET_POST_DETAIL_DATA_REDUX,
  GET_POST_DETAIL_DATA_REDUX_FAILED,
  MAX_RETRIES,
  SEARCH_POST_API,
  SEARCH_POST_SUCCESS_REDUX,
  SEARCH_POST_SUCCESS_REDUX_EMPTY,
} from "../../constants";
import { PostDataType } from "../../../pages/posts/model";
import { postServices } from "../../services/postServices";

// export function* getPost() {
//   let retryCount = 0;

//   while (retryCount < MAX_RETRIES) {
//     try {
//       const response: DataResponse<PostDataType[]> = yield call(
//         postServices.getAllServices
//       );

//       if (response.data.status === 200) {
//         yield put({
//           type: GET_POST_DATA_REDUX,
//           payload: response.data.data,
//         });
//         return;
//       } else {
//         yield put({
//           type: GET_POST_DATA_REDUX_FAILED,
//           payload: null,
//         });
//         return;
//       }
//     } catch (error) {
//       // Calculate exponential backoff delay
//       const delayTime = Math.pow(2, retryCount) * 1000;
//       yield delay(delayTime);
//       retryCount++;
//     }
//   }
//   console.error("Failed to get post data after maximum retries");
//   yield put({
//     type: GET_POST_DATA_REDUX_FAILED,
//     payload: null,
//   });
// }

export function* getPost(action: ActionType<{ page: number }>) {
  const { page } = action.payload;
  let retryCount = 0;

  while (retryCount < MAX_RETRIES) {
    try {
      const response: DataResponse<PostDataType[]> = yield call(
        postServices.getAllServices,
        page // Pass page to the service function
      );

      if (response.data.status === 200) {
        yield put({
          type: GET_POST_DATA_REDUX,
          payload: response.data.data,
        });
        return;
      } else {
        yield put({
          type: GET_POST_DATA_REDUX_FAILED,
          payload: null,
        });
        return;
      }
    } catch (error) {
      // Calculate exponential backoff delay
      const delayTime = Math.pow(2, retryCount) * 1000;
      yield delay(delayTime);
      retryCount++;
    }
  }
  console.error("Failed to get post data after maximum retries");
  yield put({
    type: GET_POST_DATA_REDUX_FAILED,
    payload: null,
  });
}
export function* getPostDetail(action: ActionType<string>) {
  let retryCount = 0;
  while (retryCount < MAX_RETRIES) {
    try {
      const response: DataResponse<PostDataType[]> = yield call(
        postServices.getPostById,
        action.payload
      );
      if (response.data.status === 200) {
        yield put({
          type: GET_POST_DETAIL_DATA_REDUX,
          payload: response.data.data,
        });
        return;
      }
      if (response.data.status === 400) {
        yield put({
          type: GET_POST_DETAIL_DATA_REDUX_FAILED,
          payload: null,
        });
        return;
      }
    } catch (error) {
      const timeDealy = Math.pow(2, retryCount) * 1000;
      yield delay(timeDealy);
      retryCount++;
    }
  }
  console.error("Failed to get post data after maximum retries");
  yield put({
    type: GET_POST_DETAIL_DATA_REDUX_FAILED,
    payload: null,
  });
}

export function* searchPost(action: ActionType<string>) {
  try {
    if (action.payload !== "") {
      const response: DataResponse<PostDataType[]> = yield call(
        postServices.searchPost,
        action.payload
      );
      if (response.data.status === 200) {
        yield put({
          type: SEARCH_POST_SUCCESS_REDUX,
          payload: response.data.data,
        });
      } else {
        yield put({
          type: GET_POST_DATA_REDUX_FAILED,
          payload: null,
        });
      }
    } else {
      const response: DataResponse<PostDataType[]> = yield call(
        postServices.getAllServices,
        1
      );

      if (response.data.status === 200) {
        yield put({
          type: SEARCH_POST_SUCCESS_REDUX_EMPTY,
          payload: response.data.data,
        });
      } else {
        yield put({
          type: GET_POST_DATA_REDUX_FAILED,
          payload: null,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export function* lookUpPostSaga() {
  yield takeEvery(GET_POST_DATA_API, getPost);
  yield takeEvery(GET_POST_DETAIL_API, getPostDetail);
  yield takeLatest(SEARCH_POST_API, searchPost);
}
