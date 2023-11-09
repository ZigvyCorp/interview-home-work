import { RouteObject } from "react-router";

import { IRouteItem } from "@/shared";

import { AdminLayout } from "@/modules/layouts";

export const configPages = (arr: Array<IRouteItem>): Array<RouteObject> => {
  return arr.map((item) => {
    return {
      path: item.path,
      element: (
        <AdminLayout>
          <item.element />
        </AdminLayout>
      ),
    };
  });
};
