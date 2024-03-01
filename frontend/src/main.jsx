import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { AntdProvider } from "./providers";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
import { AppFallback } from "./components/AppFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<PersistGate loading={<AppFallback />} persistor={persistor}>
			<AntdProvider>
				<App />
			</AntdProvider>
		</PersistGate>
	</Provider>
);
