import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import { postsReducer } from "./posts/postsSlice";
import { commentsReducer } from "./comments/commentsSlice";
import rootSaga from "./saga";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});
const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    version: 1,
  },
  rootReducer
);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;
