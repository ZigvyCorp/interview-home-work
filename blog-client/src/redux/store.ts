import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux/reducers";
import rootSaga from "../redux/sagas";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
