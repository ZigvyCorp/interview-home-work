
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';
import { rootReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';

const storage = localForage;

const persistConfig = {
  key: 'root',
  storage,
};

// Wrap the rootReducer with the persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
