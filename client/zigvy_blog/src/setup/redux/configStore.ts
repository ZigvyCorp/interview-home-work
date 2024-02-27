//This file is used for create and initialize configuration of reducers and saga
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "../redux-saga/rootSaga";
import PostReducer from "./postReducer/postReducer";
import PostDetailReducer from "./postReducer/postDetailReducer";

const middleSaga = createMiddleWareSaga();
const allReducer = combineReducers({
  PostReducer,
  PostDetailReducer
});
export type RootState = ReturnType<typeof allReducer>;
const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleSaga
    );
  },
});

middleSaga.run(rootSaga);

export default store;
