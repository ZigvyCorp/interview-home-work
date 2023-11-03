import { applyMiddleware, createStore, combineReducers } from "redux";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import postDetailReducer from "./postDetailReducer";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postReducer: postReducer,
  commentReducer: commentReducer,
  postDetailReducer:postDetailReducer
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
