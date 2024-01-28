import { lazy } from "react";

const Profile = lazy(() => import("../pages/Profile"));
const Tables = lazy(() => import("../pages/Tables"));

const coreRoutes = [
  {
    path: "/profile",
    title: "Profile",
    component: Profile,
  },
  {
    path: "/tables",
    title: "Tables",
    component: Tables,
  },
];

const routes = [...coreRoutes];
export default routes;
