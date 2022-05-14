import React from "react";

import Posts from '../../pages/Posts'
import PostDetail from '../../pages/PostDetail'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import NotFound from '../../pages/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    auth: 0,
    redirect: null,
    component: <Posts />,
  },
  {
    path: '/posts/*',
    exact: true,
    auth: 0,
    redirect: null,
    component: <PostDetail />,
  },
  {
    path: '/login',
    exact: true,
    auth: -1,
    redirect: null,
    component: <Login />,
  },
  {
    path: '/register',
    exact: true,
    auth: -1,
    redirect: null,
    component: <Register />,
  },
  {
    path: '*',
    exact: false,
    auth: 0,
    redirect: null,
    component: <NotFound />,
  },
]

export default routes;