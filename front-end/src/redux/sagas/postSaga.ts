import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

interface IData {
  userId: number,
  id: number,
  title: string,
  body: string
}

const apiCall = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

function loginCall() {
  console.log("Fetch");
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

const fetchData = function* async({ payload }: { payload: any }): Generator<any, any, IData[]> {
  try {
    let response = yield call(loginCall);
    yield put({ type: "GET_ALL_POST", payload: response });
  } catch (err) {
    console.log(err);

  }
};

export const watchFetchData = function* () {
  yield takeLatest<any>('LOGIN_REQUESTING', fetchData);
};