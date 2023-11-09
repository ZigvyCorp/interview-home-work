import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/userSlice"
import loadingSlice from "./slice/loadingSlice"
import postSlice from "./slice/postSlice"
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'techshop/user',
    storage,
}

const userConfig = {
    ...persistConfig, whitelist: ['isLoggedIn', 'accessToken', "currentUser"]
}

export const store = configureStore({
    reducer: {
        loadingSlice,
        postSlice,
        userSlice: persistReducer(userConfig, userSlice),


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})

export const persistor = persistStore(store)