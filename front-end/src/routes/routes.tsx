import Page500 from '../components/Page500';
import { ROUTE_PATH } from '../constants/route.constants';
import MainLayout from '../layouts';
import Detail from '../pages/Detail';
import HomePage from '../pages/Home';

export interface IRoute {
  path: string;
  element: JSX.Element;
  index?: boolean;
  children?: Array<IRoute>;
}
export const routes: IRoute[] = [
  {
    path: ROUTE_PATH.HOME,
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATH.BLOG_DETAIL,
    element: (
      <MainLayout>
        <Detail />
      </MainLayout>
    ),
  },
];

export const allRoutes = () =>
  routes.map((e) => ({
    ...e,
    errorElement: <Page500 />,
  }));
