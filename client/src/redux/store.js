import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga.js';

const sagaMiddle = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  timeout: 500,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddle))
);

sagaMiddle.run(rootSaga);

export default store;
