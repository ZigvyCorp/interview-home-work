import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PostList } from './components/PostList';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <PostList />
        }
    ]);
    return (
        <div className="bg-[#18191a]">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
