import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/es/storage"
import createSagaMiddleware from "redux-saga"
import { rootReducer } from "./root-reducer"
import rootSaga from "./root-saga"
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

// Config persist
const persistConfig: any = {
	key: "root",
	keyPrefix: "",
	storage: storage,
	whitelist: ["postState"],
	timeout: null,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(middleware))

// Use to hydrate state from storage
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
