import { lazy } from "react";
import type { TypeRoutes } from "./type";
import { HomeIcon } from "lucide-react";
const SignIn = lazy(() => import("../pages/auth/Login/SignIn"));
const NotFound = lazy(() => import("../pages/auth/NotFound/NotFound"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

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
