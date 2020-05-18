import { takeLatest, all } from 'redux-saga/effects';

import UserActions, {
  UserSelectors,
  UserTypes,
} from './containers/App/reducer';

import { login, signup } from './containers/App/saga';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.LOGIN_REQUEST, login),
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
  ]);
}
