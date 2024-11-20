import createSagaMiddleware from "redux-saga";
import watcherSaga from "./saga/saga";
import postReducer from "./reducers/postReducer";
import userReducer from './reducers/userReducer'
import commentReducer from './reducers/commentReducer'
import { configureStore } from '@reduxjs/toolkit'


const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        postReducer,
        userReducer,
        commentReducer
    },
    middleware: [sageMiddleware]
});

sageMiddleware.run(watcherSaga);
