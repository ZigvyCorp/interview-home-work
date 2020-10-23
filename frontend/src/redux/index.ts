import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { postReducer, PostState } from "./post/reducer";
import { saga } from "./saga";

export interface AppState {
  posts: PostState;
}

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  posts: postReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(saga);

export { store, persistor };
