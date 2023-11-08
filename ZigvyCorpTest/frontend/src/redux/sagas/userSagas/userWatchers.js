import { takeLatest, fork, all, take } from "redux-saga/effects";

import { userConsts } from "../../constants";
import * as userWorkers from "./userWorkers";

export function* registerSaga() {
  yield takeLatest(userConsts.REGISTER_REQUEST, userWorkers.register);
}

export function* loginStudioSaga() {
  yield takeLatest(userConsts.LOGIN_STUDIO_REQUEST, userWorkers.loginStudio);
}

const userWatchers = [all([registerSaga()]), all([loginStudioSaga()])];
export default userWatchers;
