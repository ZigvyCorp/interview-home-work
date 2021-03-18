import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

const env = process.env.NODE_ENV || 'development';

let store = {};

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist
const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: ['posts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middlewares
const middlewares = [applyMiddleware(sagaMiddleware)];

if (env === 'development') {
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  middlewares.push(reduxDevTools)
}

// Create store
const composeMiddlewares = compose(...middlewares);
store = createStore(persistedReducer, composeMiddlewares);

// Create Persistor
const persistor = persistStore(store);

// Run Saga
sagaMiddleware.run(rootSaga);

export {
  store,
  persistor
};
