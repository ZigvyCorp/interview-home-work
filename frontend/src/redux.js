import rootReducer from "./store/reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};
const reduxStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);

    return { store, persistor }
}

export default reduxStore;