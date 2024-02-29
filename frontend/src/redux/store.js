import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducer';
import rootSaga from '../redux/rootSaga';

// Cấu hình Redux Persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Tạo Redux Store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// Kích hoạt Redux Saga
sagaMiddleware.run(rootSaga);

// Tạo Persistor để lưu trữ Redux Store
const persistor = persistStore(store);

export { store, persistor };