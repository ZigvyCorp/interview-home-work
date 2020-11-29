import { put, call } from "redux-saga/effects";
import _ from "lodash";
import {
  logInSucceedAction,
  signUpSucceedAction,
} from "../../actions/actionCreator";
import {
  logInUserService,
  signUpUserService,
} from "../services/authenticationServices";

export function* logInUser({ user }) {
  try {
    const response = yield call(logInUserService, user);
    yield put(logInSucceedAction(response));
  } catch (err) {}
}

export function* signUpUser({ user }) {
  try {
    const response = yield call(signUpUserService, user);
    yield put(signUpSucceedAction(response));
  } catch (err) {}
}
