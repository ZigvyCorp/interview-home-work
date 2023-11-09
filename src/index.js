import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from './pages/postDetails';
import PostPage from './pages/postPage';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/" element={<PostPage />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider >,
  document.getElementById('root')
);