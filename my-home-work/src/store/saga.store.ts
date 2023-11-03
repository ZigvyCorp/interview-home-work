import { all } from "redux-saga/effects";

import watchLoadPosts from "./modules/posts/posts.saga";
import watchLoadUsers from "./modules/users/users.saga";
export default function* root() {
  yield all([watchLoadPosts(), watchLoadUsers()]);
}
