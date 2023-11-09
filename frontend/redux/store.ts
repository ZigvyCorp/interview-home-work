import { applyMiddleware, configureStore, createStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStoreHook, useStore } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga";
import rootReducer from "./reducer/root.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
