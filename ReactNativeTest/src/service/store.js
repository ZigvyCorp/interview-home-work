import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';
import {rootReducer} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

store.subscribe(() => {
  console.log('STORE', store.getState());
});

sagaMiddleware.run(rootSaga);
