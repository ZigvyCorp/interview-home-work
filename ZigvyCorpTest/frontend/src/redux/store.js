import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducers/rootReducer';
import rootSaga from '../redux/sagas/rootSaga';
import storage from 'redux-persist/lib/storage'; // Sử dụng Local Storage làm nguồn lưu trữ
import { persistStore, persistReducer } from 'redux-persist';

// // Cấu hình Redux Persist
const persistConfig = {
    key: 'root', // Khóa để lưu trạng thái Redux
    storage, // Nguồn lưu trữ
};
// // Áp dụng Redux Persist vào rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
