import { lazy } from "react";
import type { TypeRoutes } from "./type";
import { HomeIcon } from "lucide-react";
const SignIn = lazy(() => import("../pages/auth/login"));
const NotFound = lazy(() => import("../pages/auth/not-found"));
const Dashboard = lazy(() => import("../pages/dashboard"));

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
    name: "Dashboard 1",
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
    name: "Dashboard 2",
    path: "/dashboard2",
    component: Dashboard,
    config: {
      permission: "*",
      structure: "layout",
      isMenu: true,
      allowed_roles: [],
    },
  }, 
  {
    name: "Dashboard 3",
    path: "/dashboard3",
    component: Dashboard,
    config: {
      permission: "*",
      structure: "layout",
      isMenu: true,
      allowed_roles: [],
    },
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
