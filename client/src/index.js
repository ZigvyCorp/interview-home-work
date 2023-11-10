import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/configureStore';
import Post from './Post'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes path='' element={<App />}>
        <Route index element={< App />}></Route>
        <Route path='post' element={<Post />}>
          <Route path=':id' element={<Post />}></Route>
        </Route>
        <Route path='*' element={<Navigate to="" />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);

