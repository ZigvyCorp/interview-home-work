import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import BlogComponent from './module/blog/BlogComponent';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import HomeComponent from './module/home/HomeComponent';
import BlogDetailComponent from './module/blog-detail/BlogDetailComponent';
import NotFound from './module/layout/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/blog",
    element: <BlogComponent />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailComponent />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorBoundary />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
