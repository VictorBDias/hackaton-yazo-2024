// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";

import { HomeIcon, StatsIcon } from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Marketing",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
];
export default dashRoutes;
