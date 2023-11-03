import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk'

import rootReducer from './rootReducer';
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;

export const persistor = persistStore(store)
export default store;
