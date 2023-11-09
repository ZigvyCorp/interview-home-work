// src/redux/store.tsx
import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import userReducer from "./reducers/userReducer";
import rootSaga from "./sagas/rootSaga";
const rootReducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
