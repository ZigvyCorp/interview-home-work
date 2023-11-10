import { APP_ROUTE } from '../constants/route.constants';
import VerticalLayout from '../layout';
import Page404 from './Page404';
import Page500 from './Page500';
import Posts from './Post';

export interface IRoute {
  path: string;
  element: JSX.Element;
  index?: boolean;
  children?: Array<IRoute>;
}

export const appRoute: IRoute[] = [
  {
    path: APP_ROUTE.POSTS,
    element: (
      <VerticalLayout>
        <Posts />
      </VerticalLayout>
    ),
  },
  {
    path: APP_ROUTE.MATCH_ALL,
    element: <Page404 />,
  },
];

export const allAppRoutes = () =>
  appRoute.map((e) => ({
    ...e,
    errorElement: <Page500 />,
  }));
