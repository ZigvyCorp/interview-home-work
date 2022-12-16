import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Redux/rootSaga";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import dataSlice from "./Redux/dataSlice";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['searchData']
};

const persistedReducer = persistReducer(persistConfig, dataSlice);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);
export default store;