import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
import postReducer from "./postsSlice/slice.js"

export default configureStore({
    reducer: {
        posts: postReducer
    }
    ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
