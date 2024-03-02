import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./Reducer/reducers.ts";
import storage from "redux-persist/lib/storage";
import rootSaga from "./sagas.ts";
import { RootStore } from "../utils/type.ts";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["socketReducer", "blogReducer", "commentReducer"],
};
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistReducer(persistConfig, rootReducer as never),
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);
export const selectState = (state: RootStore) => state;
sagaMiddleware.run(rootSaga);
