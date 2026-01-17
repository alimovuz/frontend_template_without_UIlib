import { lazy } from "react";
import type { TypeRoutes } from "./type";
import { HomeIcon } from "lucide-react";
const SignIn = lazy(() => import("../pages/auth/login/login"));
const NotFound = lazy(() => import("../pages/auth/not-found/not-found"));
const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

const _routes: Array<TypeRoutes> = [
  {
    name: "Login",
    path: "/sign-in",
    component: SignIn,
    config: {
      permission: "*",
      structure: "nolayout",
      isMenu: false,
    },
  },
];

const sidebarRoutes: Array<TypeRoutes> = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    config: {
      permission: "*",
      structure: "layout",
      icon: HomeIcon,
      isMenu: true,
      allowed_roles: [],
    }
  },
  {
    name: "Not Found",
    path: "/not-found",
    component: NotFound,
    config: {
      permission: "*",
      structure: "layout",
      isMenu: false,
      allowed_roles: [],
    },
  },
];

export { _routes, sidebarRoutes };
