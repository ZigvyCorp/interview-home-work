import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import commonSlice from "./commonSlice";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = configureStore({
  reducer: {
    counter: commonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
