import { put } from "redux-saga/effects";
import { get as _get } from 'lodash';

import axios from "../../axios";
import * as actions from "../actions/";

export function* checkMe(action) {
  try {
    yield put(actions.checkMeStart());
    const res = yield axios.get("/users/me", {
      validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 401; // default
      },
    });
    const userData = _get(res, "data.data.user", {});
    const token = _get(res, "data.token", '');
    yield put(actions.checkMeSuccess(userData, token));
  } catch (error) {
    yield put(actions.checkMeFail(error));
  }
}

export function* signUp(action) {
  const postData = {...action.userData};
  try {
    yield put(actions.signUpStart());
    const res = yield axios.post("/users/signup", postData);
    const userData = _get(res, "data.data.user", {});
    const token = _get(res, "data.token", '');
    yield put(actions.signUpSuccess(userData, token));
  } catch (error) {
    yield put(actions.signUpFail(error));
  }
}

export function* login(action) {
  const postData = {...action.userData};
  try {
    yield put(actions.loginStart());
    const res = yield axios.post("/users/login", postData);
    const userData = _get(res, "data.data.user", {});
    const token = _get(res, "data.token", '');
    yield put(actions.loginSuccess(userData, token));
  } catch (error) {
    yield put(actions.loginFail(error));
  }
}

export function* logout(action) {
  try {
    yield put(actions.logoutStart());
    yield axios.get("/users/logout");
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutFail(error));
  }
}
