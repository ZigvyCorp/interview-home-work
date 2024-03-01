import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import dataReducer from "./dataSlice"
import userReducer from "./userSlice"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLoggedIn', 'user', 'token']
}

export const store = configureStore({
    reducer: {
        user: persistReducer(persistConfig, userReducer),
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)
