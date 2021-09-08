//Redux
import { createStore, applyMiddleware } from 'redux';
//Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//reducer
import reducer from './reducer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();

//config persist store
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['postReducer', 'userReducer', 'commentReducer']
}
const persistedReducer = persistReducer(persistConfig, reducer);

//init store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };