import { useRoutes, Navigate } from 'react-router-dom';
import PostListPage from '../pages/post/list';
import AppLayout from '../layouts';
import PostDetailPage from '../pages/post/detail';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <AppLayout />,
      children: [
        { path: '', element: <Navigate to={'home'} /> },
        { path: 'home', element: <PostListPage /> },
        { path: 'posts/:id', element: <PostDetailPage /> },
      ],
    }
  ])
}
