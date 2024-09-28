import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import PostDetailPage from './pages/PostDetailPage'; 
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="*" element={<HomePage />} /> 
    </Routes>
  </div>
);

export default App;
