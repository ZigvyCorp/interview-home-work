// store.js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; // Nếu bạn đang sử dụng Redux Saga
import rootReducer from "./reducers";
import rootSaga from "./sagas"; // Nếu bạn đang sử dụng Redux Saga
import { thunk } from "redux-thunk";

const sagaMiddleware = createSagaMiddleware(); // Nếu bạn đang sử dụng Redux Saga

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware) // Thêm thunk vào applyMiddleware
);

sagaMiddleware.run(rootSaga); // Nếu bạn đang sử dụng Redux Saga

export default store;
