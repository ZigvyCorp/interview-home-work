import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./Reducers/PostsReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./Saga/rootSaga";

const middleWareSaga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    PostsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWareSaga)
})

middleWareSaga.run(rootSaga)

export default store