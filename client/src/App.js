import Loading from "common/Loader";
import React from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import RouterProvider from "router/RouterProvider";

export default function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <RouterProvider />
      </PersistGate>
    </Provider>
  );
}
