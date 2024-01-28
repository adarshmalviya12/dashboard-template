import { lazy } from "react";

const Profile = lazy(() => import("../pages/Profile"));
const Tables = lazy(() => import("../pages/Tables"));
const Settings = lazy(() => import("../pages/Settings"));
const Chart = lazy(() => import("../pages/Chart"));
const TableElements = lazy(() => import("../pages/Form/FormElements"));
const TableLayout = lazy(() => import("../pages/Form/FormLayout"));
const Alerts = lazy(() => import("../pages/UiElements/Alerts"));
const Buttons = lazy(() => import("../pages/UiElements/Buttons"));

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
    path: "/form-layout",
    title: "form-layout",
    component: TableLayout,
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
  {
    path: "/chart",
    title: "Chart",
    component: Chart,
  },
  {
    path: "/ui/alerts",
    title: "Alerts",
    component: Alerts,
  },
  {
    path: "/ui/buttons",
    title: "Buttons",
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
