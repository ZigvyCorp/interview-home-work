import React from 'react';

import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import CreateBlog from './pages/CreateBlog';
import Product from './pages/Product';
import Blogs from './pages/Blogs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createblog' element={<CreateBlog />} />
          <Route path='/product' element={<Product />} />
          <Route path='/blogs' element={<Blogs />} />


          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
