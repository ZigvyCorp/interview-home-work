// routes.js
import { createBrowserRouter } from 'react-router-dom';
import HomePage from "@/pages/home";
import BlogPage from "@/pages/blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/blog/:slug',
        element: <BlogPage />,
    },
]);

export default router;