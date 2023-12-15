import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";
import rootSaga from "../saga";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, rootReducer.user);
const persistedPostListReducer = persistReducer(
  persistConfig,
  rootReducer.postList
);

const persistedRootReducer = combineReducers({
  user: persistedUserReducer,
  postList: persistedPostListReducer,
  post: rootReducer.post,
});

const sagaMiddleware: any = createSagaMiddleware();
const store = createStore(
  persistedRootReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
