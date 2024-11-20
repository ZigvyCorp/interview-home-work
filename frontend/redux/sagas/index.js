/*------- THIS IS THE MAIN SAGA COMPONENT -------*/

import { all } from "redux-saga/effects";

/* IMPORT ALL SAGA WATCHERS */
import watchPosts from "./postsSaga";

/* CREATE THE ROOT SAGA */
export default function* rootSaga() {
  yield all([watchPosts()]);
}