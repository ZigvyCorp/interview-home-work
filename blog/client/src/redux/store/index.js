import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "../reducer/rootReducer";
import { rootSaga } from "../saga/rootSaga";
import storage from "redux-persist/lib/storage";
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    keyPrefix: "",
    storage: storage,
    blacklist: ["loading"],
    timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);