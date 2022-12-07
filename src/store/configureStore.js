import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
