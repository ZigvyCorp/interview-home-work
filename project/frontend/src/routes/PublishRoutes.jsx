import Home from '../pages/Home/Home';
import PostDetail from '../pages/PostDetail';

export const publishRoutes = [
    {
        index: true,
        element: <Home title="Blog" />,
    },
    {
        path: 'postdetail/:id',
        element: <PostDetail title="Blog PostDetal" />,
    },
];
