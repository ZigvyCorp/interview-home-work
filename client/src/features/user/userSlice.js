import { createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";

export const getUserAsync = createAction("user/getUserAsync");
export const getAllUsersAsync = createAction("user/getAllUsersAsync");

function* getUserSaga({ payload: { q, value } }) {
  try {
    yield put(loading());
    const data = yield call(userApi.getUser, q, value);
    yield put(getUser(data));
  } catch (error) {
    console.log(error);
  }
}
function* getAllUsersSaga() {
  try {
    yield put(loading());
    const data = yield call(userApi.getAllUsers);
    yield put(getAllUsers(data));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield all([
    takeEvery(getUserAsync, getUserSaga),
    takeLatest(getAllUsersAsync, getAllUsersSaga),
  ]);
}

const initialState = {
  user: [],
  isLoading: false,
  allUsers: [],
};

export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    getUser: (state, action) => {
      state.isLoading = false;
      state.user = [...action.payload];
    },
    getAllUsers: (state, action) => {
      state.isLoading = false;
      state.allUsers = [...action.payload];
    },
  },
});

export const { loading, getUser, getAllUsers } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
