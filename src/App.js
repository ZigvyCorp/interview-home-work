import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './modules/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetails from './modules/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container pt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
