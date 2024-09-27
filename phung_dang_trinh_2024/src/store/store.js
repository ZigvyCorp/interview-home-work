import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './reducer';
import rootSaga from './saga';

// Khởi tạo middleware
const sagaMiddleware = createSagaMiddleware();

// Sử dụng compose để kết hợp middleware và Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Tạo store với middleware
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)) // Kết hợp middleware với DevTools
);

// Chạy root saga
sagaMiddleware.run(rootSaga);

// Xuất persistor và store
export const persistor = persistStore(store);
export default store;
