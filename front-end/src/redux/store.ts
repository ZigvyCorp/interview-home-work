import { applyMiddleware, legacy_createStore  as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Chọn nơi lưu trữ (local storage)
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store
export { persistor }
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

