import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "@/stores";

import LoadPage from "./components/loading/LoadPage.tsx";
import App from "./App.tsx";

import "./assets/style/style.css";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadPage />} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
      {/* <Router>
        <App />
      </Router> */}
    </Provider>
  </React.StrictMode>
);
