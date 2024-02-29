import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import CreatePost from './pages/create-post/CreatePost';
import LoginPage from './pages/auth/LoginPage';
import PrivateRoutes from './layout/PrivateRoutes';
import SearchResultPage from './pages/search/SearchResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/search" element={<SearchResultPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
