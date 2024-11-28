
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataSlice from "../features/dataSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;
