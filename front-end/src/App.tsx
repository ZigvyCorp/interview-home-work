import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PostList } from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <PostList />
        },
        {
            path: '/:id',
            element: <PostDetail />
        }
    ]);
    return (
        <div className="bg-[#18191a]">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
