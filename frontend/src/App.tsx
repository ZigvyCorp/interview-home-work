import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<PostList />} /> 
            <Route path="/posts/:_id" element={<PostDetail />} /> 
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
