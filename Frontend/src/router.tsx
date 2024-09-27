import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import C404 from './components/404';
import Home from './pages/Home';
import DetailPost from './pages/DetailPost';

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'post/:id',
      element: <DetailPost />,
    },
    { path: '*', element: <C404 /> },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);
