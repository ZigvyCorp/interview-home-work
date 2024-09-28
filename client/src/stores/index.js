import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist configuration
const persistConfig = {
  key: 'root',   // Key to persist the root of the state
  storage,       // Using local storage by default
};

// Combine persistReducer with rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store and apply saga middleware
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga middleware
sagaMiddleware.run(rootSaga);

// Set up persistor for Redux-Persist
const persistor = persistStore(store);

export { store, persistor };