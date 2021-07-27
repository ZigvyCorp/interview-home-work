import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "antd/dist/antd.css";

import "./scss/index.scss";
import App from "./App";
import { persistor, store } from "./store/store";
import { Spin } from "antd";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spin />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("app"),
);
