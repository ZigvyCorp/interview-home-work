import createSagaMiddleware from "redux-saga";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootSagas from "./rootSagas";
import todoSlice from "../features/todo/todoSlice";
import { postSlice } from "../features/post/postSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todo: todoSlice,
  post: postSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export default store;
