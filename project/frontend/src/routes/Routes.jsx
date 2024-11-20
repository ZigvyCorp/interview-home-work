import { useRoutes } from 'react-router-dom';
import { DefaultLayout } from '../components/Layout';
import NotFound from '../pages/NotFound';
import { publishRoutes } from './PublishRoutes';

const Routes = () => {
    const routes = [
        {
            path: '/',
            element: <DefaultLayout />,
            children: [...publishRoutes, { path: '*', element: <NotFound title="Not found" /> }],
        },
    ];
    return useRoutes(routes);
};

export default Routes;
