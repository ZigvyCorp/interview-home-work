import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import userSlice from './user/userSlice';
const commonConfig = {
    storage
}

const userConfig = {
    ...commonConfig,
    key: 'app/user',
    whitelist: ['isLoggedIn', 'token', 'current']
}


export const store = configureStore({
    reducer: {
        user: persistReducer(userConfig, userSlice)
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store)