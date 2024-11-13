import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { store, persistor } from './redux/store'; 
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
