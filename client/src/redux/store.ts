import { rootReducer } from "./reducer/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { PostSaga } from "./saga/postSaga";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(PostSaga);

export { store };
