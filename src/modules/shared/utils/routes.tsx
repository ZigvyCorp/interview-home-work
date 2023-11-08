import { RouteObject } from "react-router";

import { IRouteItem } from "@/modules/shared";

import { AuthRoute, PrivateRoute } from "@/routes";

import { AdminLayout } from "@/modules/layouts";

export const configPages = (arr: Array<IRouteItem>): Array<RouteObject> => {
  return arr.map((item) => {
    return {
      path: item.path,
      element: item.isPrivate ? (
        <PrivateRoute>
          <AdminLayout>
            <item.element />
          </AdminLayout>
        </PrivateRoute>
      ) : (
        <AuthRoute>
          {/* <AuthLayout> */}
          <item.element />
          {/* </AuthLayout> */}
        </AuthRoute>
      ),
    } as RouteObject;
  });
};
