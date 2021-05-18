import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const urlUser = `https://jsonplaceholder.typicode.com/users`;

// const dispatch = useDispatch();

const getUsersData = async() => { 
  return await axios({
    method: "get",
    url: urlUser
  }).then(result => result.data);
}

function* axiosUser() {
  try {
    const users = yield call(getUsersData);
    yield put({type: 'GET_USERS_SUCCESS', payload: users});
  } catch (e) {
    yield put({type: 'GET_USERS_FAILED', message: e.message});
  }
}

function* usersSaga() {
  yield takeEvery('GET_USERS_REQUEST', axiosUser);
}

export default usersSaga;