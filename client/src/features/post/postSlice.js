import { createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import postApi from "../../apis/postApi";

export const getPostAsync = createAction("post/getPostAsync");
export const getCommentsOfPostAsync = createAction(
  "post/getCommentsOfPostAsync"
);

function* getPostSaga() {
  try {
    const data = yield call(postApi.getPosts);
    yield put(getPosts(data));
  } catch (error) {
    console.log(error);
  }
}

function* getCommentsOfPostSaga(postId) {
  try {
    const data = yield call(postApi.getCommentsOfPost, postId);
    yield put(getCommentsOfPost(data));
  } catch (error) {
    console.log(error);
  }
}

export function* postSaga() {
  yield all([
    takeLatest(getPostAsync, getPostSaga),
    takeLatest(getCommentsOfPostAsync, getCommentsOfPostSaga),
  ]);
}

const initialState = {
  posts: [],
  totalComment: 0,
  status: "idle",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      console.log(`here`);
      state.posts = [...action.payload];
    },
    getCommentsOfPost: (state, action) => {
      console.log(`here`);
      state.totalComment = action.payload.length;
    },
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    // removeTodo: (state, action) => {
    //   const index = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.todos.splice(index, 1);
    //   }
    // },
  },
});

export const { getPosts, getCommentsOfPost } = postSlice.actions;

export const selectPost = (state) => state.post;

export default postSlice.reducer;
