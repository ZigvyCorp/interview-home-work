import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, all } from "@redux-saga/core/effects";
// import { AxiosError, AxiosResponse } from "axios";

// import { authAction } from "./authSlice";

// import { connectWallet } from "hooks/walletAuthHooks";
// import { walletService } from "services/walletService";

export function* handleLogin() {
  //   try {
  //     const response: AxiosResponse<string> = yield call(connectWallet);
  //     if (response) {
  //       yield put(authAction.loginSucess(response));
  //     }
  //   } catch (error: any) {
  //     yield put(authAction.loginFailure(error));
  //   }
}

export function* handleAuth() {
  //   try {
  //     const response: Array<string> = yield call(walletService);
  //     console.log("fasdafsdasfdcadsasfdasdf", response);
  //     if (response && response.length > 0) {
  //       yield put(authAction.getAuthSuccess(response[0]));
  //     } else {
  //       yield put(authAction.getAuthError("No user found"));
  //     }
  //   } catch (error: any) {
  //     yield put(authAction.getAuthError(error));
  //   }
}

export default function* authSaga() {
  //   yield takeLatest(authAction.login.type, handleLogin);
  //   yield takeLatest(authAction.getAuth.type, handleAuth);
}
