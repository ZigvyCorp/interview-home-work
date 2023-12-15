import { put, call, takeEvery } from "redux-saga/effects";
import userApi from "services/userApi";
import { loginSuccess, loginFailure } from "../actions/userActions";
import { LOGIN } from "constants/actionRedux";

type LoginAction = {
    type: string
    payload: string
}

function* loginSaga(action: LoginAction): Generator<any, void, any> {
    try {
        const user = yield call(userApi.login, action.payload) 
        yield put(loginSuccess(user))
    } catch (error: any) {
        console.log(error)
        yield put(loginFailure())
    }
}

function* userSaga() {
    yield takeEvery(LOGIN, loginSaga);
}

export default userSaga;
