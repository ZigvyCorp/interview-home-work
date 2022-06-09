import createSagaMiddleware from "redux-saga";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootSagas from "./rootSagas";
import postSlice from "../features/post/postSlice";
import userSlice from "../features/user/userSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  post: postSlice,
  user: userSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(sagaMiddleware),
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, reducer);

sagaMiddleware.run(rootSagas);

export default store;
