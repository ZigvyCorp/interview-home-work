import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
import { IS_DEBUG } from "../../core/utils/enviroments";
import storage from "redux-persist/lib/storage";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();
// create logger middleware
const loggerMiddleware = (createLogger)();

const persistConfig = {
    key: "root",
    keyPrefix: "",
    storage: storage,
    blacklist: ["loading"],
    timeout: null,
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Run logger middleware in debug mode only
const middleware = IS_DEBUG
  ? applyMiddleware(loggerMiddleware, sagaMiddleware)
  : applyMiddleware(sagaMiddleware);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);

// Use to hydrate state from storage
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
