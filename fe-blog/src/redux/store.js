import createSagaMiddleware from 'redux-saga';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootSaga from './sagas';
import postsReducer from "./postsSlice";


const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const reducer = {
    posts: postsReducer
}

const store = configureStore(
    {
    reducer,
    middleware,
}
);
sagaMiddleware.run(rootSaga);

export default store