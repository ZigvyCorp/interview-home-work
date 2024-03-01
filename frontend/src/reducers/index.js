import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import * as reduxThunk from 'redux-thunk';
import dataReducer from "./dataReducer";
import { getComments, getPosts, login, createComment, signup, createPost } from "../services/saga";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({
    data: dataReducer,
})

// Khởi tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist cấu hình
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['global'],
};

// Kết hợp rootReducer với Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Sử dụng compose để kết hợp các middleware và Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Tạo store với rootReducer, middleware saga, Redux Thunk và Redux DevTools
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(reduxThunk.thunk, sagaMiddleware))
);

// Tạo root Saga
function* rootSaga() {
    yield all([
        getPosts(),
        getComments(),
        createComment(),
        createPost(),
        login(),
        signup()
        // Add other sagas here if needed
    ]);
}
// Chạy root saga
sagaMiddleware.run(rootSaga);

// Tạo persisted store để sử dụng cho Redux Persist
const persistedStore = persistStore(store);

export { store, persistedStore };
