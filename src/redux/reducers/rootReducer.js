import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import CommentReducer from './CommentReducer';

import {applyMiddleware, createStore, combineReducers } from 'redux';
import rootSaga from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    //reducer khai báo tại đây
    PostReducer,
    UserReducer,
    CommentReducer,
})

const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));


//gọi saga
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;