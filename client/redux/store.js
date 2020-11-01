/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from './localstore'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from './reducers';
let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('../modules/App/components/DevTools').default;
}

const persistConfig = {
  key: 'root',
  storage,
}


export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    applyMiddleware(sagaMiddleware),
  ];

  const persistedReducer = persistReducer(persistConfig, rootReducer)


  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  const store = createStore(persistedReducer, initialState, compose(...enhancers));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga)

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return { store, persistor};
}
