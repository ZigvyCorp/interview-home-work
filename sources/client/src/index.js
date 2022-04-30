import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import store from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>
);
