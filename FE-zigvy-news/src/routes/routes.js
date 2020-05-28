import React from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Logout from '../pages/Logout';
import Post from '../pages/PostDetail';
import Register from '../pages/Register';
import Profile from '../pages/Profile';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Dashboard />,
  },
  {
    path: '/profile',
    exact: false,
    component: () => <Profile />,
  },
  {
    path: '/post/:id',
    exact: false,
    component: () => <Post />,
  },
  {
    path: '/login',
    exact: false,
    component: () => <Login />,
  },
  {
    path: '/register',
    exact: false,
    component: () => <Register />,
  },
  {
    path: '/logout',
    exact: false,
    component: () => <Logout />,
  },
  {
    path: '',
    exact: false,
    component: () => <NotFound />,
  }
];

export default routes;
