import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import postsReducer from "./postsSlice";
import searchReducer from "./searchSlice";
import postDetailReducer from "./postDetailSlice";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postsReducer,
        search: searchReducer,
        postDetail: postDetailReducer
    },
    middleware: [saga]
});

saga.run(rootSaga);

export default store;