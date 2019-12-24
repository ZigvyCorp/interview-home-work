import { all } from "redux-saga/effects";
import postsSagas from "src/routes/posts/posts.actions";
import postSagas from "src/routes/post/post.actions";
import signinSagas from "src/routes/signin/signin.actions";
import authSagas from "src/auth/auth.actions";
import commentsSagas from "src/routes/post/childs/comments/comments.actions";
import commentSagas from "src/routes/comment/comment.actions";
import createPostSagas from "src/routes/createPost/createPost.actions";
import profileSagas from "src/routes/profile/profile.actions";
import updatePostSagas from "src/routes/updatePost/updatePost.actions";

function* rootSaga() {
  yield all([
    ...postsSagas.map((saga: any) => saga()),
    ...postSagas.map((saga: any) => saga()),
    ...signinSagas.map((saga: any) => saga()),
    ...authSagas.map((saga: any) => saga()),
    ...commentsSagas.map((saga: any) => saga()),
    ...commentSagas.map((saga: any) => saga()),
    ...createPostSagas.map((saga: any) => saga()),
    ...profileSagas.map((saga: any) => saga()),
    ...updatePostSagas.map((saga: any) => saga())
  ]);
}

export default rootSaga;
