import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ErrorBoundary from './pages/ErrorBoundary';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/post/:id',
        lazy: () => import('./pages/Post'),
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout/>,
  //   errorElement: <ErrorBoundary />,
  //   children: []
  // }
  { path: '*' },
]);

export default router;
