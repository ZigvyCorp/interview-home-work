import { BlogDetailPage, BlogPage } from "@/modules/blogs";
import { IRouteItem, SITE_URL } from "@/modules/shared";

export const PAGES_SETTING: Array<IRouteItem> = [
  {
    path: SITE_URL.HOME,
    element: BlogPage,
    isPrivate: true,
  },
  {
    path: `${SITE_URL.HOME}/:id`,
    element: BlogDetailPage,
  },
];
