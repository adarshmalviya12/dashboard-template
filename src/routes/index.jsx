import { lazy } from "react";

const Profile = lazy(() => import("../pages/Profile"));
const Tables = lazy(() => import("../pages/Tables"));
const Settings = lazy(() => import("../pages/Settings"));
const TableElements = lazy(() => import("../pages/Form/FormElements"));

const coreRoutes = [
  {
    path: "/profile",
    title: "Profile",
    component: Profile,
  },
  {
    path: "/form-elements",
    title: "form-elements",
    component: TableElements,
  },
  {
    path: "/tables",
    title: "Tables",
    component: Tables,
  },
  {
    path: "/settings",
    title: "Settings",
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
