import Home from "@/modules/Home";
import { IRouteItem, SITE_URL } from "@/modules/shared";

export const PAGES_SETTING: Array<IRouteItem> = [
  {
    path: SITE_URL.HOME,
    element: Home,
    isPrivate: true,
  },
  {
    path: SITE_URL.LOGIN,
    element: Home,
  },
];
