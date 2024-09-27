import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import posts from './data/posts';
import PostDetail from './components/postDetail';
import PostList from './components/postList';

function App() {
  
  return (
  
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail/>} />
      </Routes>
   
  );
}

export default App;
