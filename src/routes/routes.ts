import MainLayout from "@/layouts/MainLayout/MainLayout";
import { BlogDetailPage, HomePage } from "@/pages";

export interface IRoute {
  path: string;
  page: React.ComponentType;
  layout: React.ComponentType | null;
}

const PRIVATE_ROUTE: IRoute[] = [];
const PUBLIC_ROUTE: IRoute[] = [
  {
    path: "/",
    page: HomePage,
    layout: MainLayout,
  },
  {
    path: "/:blogId",
    page: BlogDetailPage,
    layout: MainLayout,
  },
];

export { PRIVATE_ROUTE, PUBLIC_ROUTE };
