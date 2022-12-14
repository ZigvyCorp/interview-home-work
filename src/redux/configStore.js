import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PostReducer } from "./reducers/PostReducer";

const rootReducer = combineReducers({
	PostReducer,
});
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWareSaga = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);

export const persistor = persistStore(store);
export default store;
