import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_LIST_USERS } from "../Constant/Constant";
import { userServices } from "../../Services/UserServices";
import { getListUsers } from '../Reducers/UsersReducer';

function *getListUsersSaga() {
  try {
    let {data} = yield call(() => userServices.getUsers())
    yield put(getListUsers(data))
  } catch (error) {
    
  }
}

export function *listenGetListUsersSaga() {
  yield takeLatest(GET_LIST_USERS, getListUsersSaga)
}