import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //
import reducer from "./reducer.store";

import mySaga from "./saga.store";
import { AppState } from "./reducer.store";
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store: Store<AppState> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(mySaga);
export const persistor = persistStore(store);
export default store;
