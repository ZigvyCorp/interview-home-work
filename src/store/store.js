// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { userSaga } from './sagas/userSaga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootSaga } from '../service/saga';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)  


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
    );
export const persistor = persistStore(store);
// const store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
//     );

sagaMiddleware.run(rootSaga);
export default store;
