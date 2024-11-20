import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './styles';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
