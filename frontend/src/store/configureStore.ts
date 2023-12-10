import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../redux/reducer/rootReducer';
import rootSaga from '../redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware as Middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;