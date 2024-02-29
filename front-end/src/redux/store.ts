import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import postSlice from './slice/postSlice';

// Redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux persist 
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducers = combineReducers({
    // Add another reducer here...
    post: postSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Redux toolkit - store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(sagaMiddleware)

});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
