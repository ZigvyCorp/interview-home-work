import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./routes";
import store, { persistor } from "./store/store";
import { setupInterceptors } from "./services/httpService";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";

setupInterceptors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
