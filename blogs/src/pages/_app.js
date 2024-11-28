import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import AuthWrapper from "@components/Auth/AuthWrapper";

import "../scss/app.scss"

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
