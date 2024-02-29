import GlobalLoading from '../common/GlobalLoading';
import Layout from '../layout';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from 'page/homePage';

export default function RouterProvider() {
  const getElement = (path) => {
    switch (path) {
      case '/home':
        return <HomePage />;
      default:
        return <Navigate replace to="/home" />;
    }
  };
  const getSwitchAndRoutes = () => (
    <Routes>
      <Route path="/" element={getElement('/home')} />
    </Routes>
  );

  return (
    <Router>
      <GlobalLoading />
      <Layout>{getSwitchAndRoutes()}</Layout>
    </Router>
  );
}
