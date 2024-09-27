import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { postsReducer } from "./posts/postsSlice";
import { commentsReducer } from "./comments/commentsSlice";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments:commentsReducer
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
