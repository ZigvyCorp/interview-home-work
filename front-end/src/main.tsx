import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import './global.css';
import { persistor, store } from './libs/redux/store';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
