import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage mặc định
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers'; // reducer chính
import rootSaga from './sagas'; // saga chính

// Cấu hình persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts'], // Chỉ lưu posts trong redux persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo middleware của saga
const sagaMiddleware = createSagaMiddleware();

// Tạo store với saga middleware
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Kích hoạt saga
sagaMiddleware.run(rootSaga);

// Tạo persisted store
const persistor = persistStore(store);

export { store, persistor };
