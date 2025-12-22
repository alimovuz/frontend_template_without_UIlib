import { Suspense, useMemo, type ReactNode } from "react";
import type { TypeRoutes } from "./type";
import { _routes, sidebarRoutes } from ".";
import checkPermission from "../utils/check_permission";
import checkRole from "../utils/check_role";
import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Layout from "../components/layout";
import Loader from "@/components/loader";

const createComponent = (Component: React.ComponentType): ReactNode => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const collectRoutes = (route: TypeRoutes, permissions: string[], role: string | null): RouteObject[] => {
    const routes: RouteObject[] = [];
    if (route.submenu?.length && route.config.structure === "layout") {
        route.submenu.map((subRoute: TypeRoutes) => collectRoutes(subRoute, permissions, role))
    }

    if (checkPermission(route.config.permission, permissions) || checkRole(route.config.allowed_roles, role)) {
        routes.push({
            path: route.path,
            element: createComponent(route.component),
        });
    }
    return routes
}

const createRoutes = (isAuthenticated: boolean, permissions: string[], role: string | null): RouteObject[] => {
  if (isAuthenticated) {
    const authenticatedChildren = [
      ...sidebarRoutes.flatMap((route: TypeRoutes) => collectRoutes(route, permissions, role)),
      { path: "/", element: <Navigate to="/dashboard" replace /> },
      { path: "*", element: <Navigate to="/not-found" replace /> },
    ];

    return [
      {
        element: <Layout />,
        children: authenticatedChildren,
      },
    ];
  }

  return [
    ..._routes.map((route) => ({
      path: route.path,
      element: createComponent(route.component),
    })),
    { path: "*", element: <Navigate to="/sign-in" replace /> },
  ];
};

const RoutesMiddleware = () => {
  const { isAuthenticated, permissions, role } = useAuth();

  const router = useMemo(() => {
    return createBrowserRouter(createRoutes(isAuthenticated, permissions, role));
  }, [isAuthenticated]);

  return <RouterProvider router={router} />;
};

export default RoutesMiddleware