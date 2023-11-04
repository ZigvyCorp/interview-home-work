import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create a Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// Start the Redux Saga middleware
sagaMiddleware.run(rootSaga);

// Create a persisted store
const persistor = persistStore(store);

export { store, persistor };
