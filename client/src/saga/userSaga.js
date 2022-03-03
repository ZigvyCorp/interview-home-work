import { fork, call, put, takeLatest} from "redux-saga/effects";
import userApi from '../api/UserApi';
import {getUsersSuccess} from '../actions/userActions';
import {GET_ALL_USERS} from '../actions/actionCreator';

function *getAllUsers(action) {
    try {
        const response = yield call(userApi.getAllUsers, action.payload);
        yield put(getUsersSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function *watchGetUsers() {
    yield takeLatest(
        GET_ALL_USERS,
        getAllUsers
    )
}
const userSaga = [
    fork(watchGetUsers),
];
export default userSaga;