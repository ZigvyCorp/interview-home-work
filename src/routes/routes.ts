import { ROUTES_PATH } from "@/common/enum/routes.enum";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { BlogDetailPage, HomePage, UserInfoPage } from "@/pages";

export interface IRoute {
  path: string;
  page: React.ComponentType;
  layout: React.ComponentType | null;
}

const PRIVATE_ROUTE: IRoute[] = [];
const PUBLIC_ROUTE: IRoute[] = [
  {
    path: ROUTES_PATH.HOME,
    page: HomePage,
    layout: MainLayout,
  },
  {
    path: ROUTES_PATH.POST_DETAIL,
    page: BlogDetailPage,
    layout: MainLayout,
  },
  {
    path: ROUTES_PATH.USER,
    page: UserInfoPage,
    layout: MainLayout,
  },
];

export { PRIVATE_ROUTE, PUBLIC_ROUTE };
