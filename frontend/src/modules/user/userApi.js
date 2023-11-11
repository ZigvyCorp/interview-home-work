import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios';
import { getUsers, postUser, setUsers } from './userSlice';

function apiFetchUser() {
    return axios.get(process.env.REACT_APP_API_URL + '/user')
}

function* fetchUser(action) {
    const user = yield call(apiFetchUser)
    yield put(setUsers(user.data.data))
    
}

function apiPostUser(value) {
   return axios.post(process.env.REACT_APP_API_URL + '/user', value)
}

function* postUserData(action) {
    yield call(apiPostUser, action.payload)
    yield put(getUsers())
    
}

function* userSaga() {
  yield takeLatest(getUsers.type, fetchUser)
  yield takeLatest(postUser.type, postUserData)
}

export default userSaga