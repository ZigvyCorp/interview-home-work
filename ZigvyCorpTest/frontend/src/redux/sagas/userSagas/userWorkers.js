import { call, put } from "redux-saga/effects";
import { API } from "../../apis";
import { userActions } from "../../actions";

function* register(action) {
  try {
    const inforUserRegister = yield call(API.apiRegister, action.payload);
    console.log("inforUserRegister = ", inforUserRegister);
    yield put(userActions.registerActionSuccess(inforUserRegister));
  } catch (err) {
    yield put(userActions.registerActionFail(err));
  }
}

function* loginStudio(action) {
  try {
    const userInformation = yield call(API.apiLogin, action.payload);
    console.log("userInformation = ", userInformation);

    yield put(userActions.loginActionStudioSuccess(userInformation));
  } catch (error) {
    yield put(userActions.loginActionStudioFailure(error));
  }
}
export { register, loginStudio };
