import { lazy } from "react";
import { ElementType } from "react";
import { FaUser, FaWallet, FaChartBar, FaCogs } from "react-icons/fa";
import { ROLES } from "./constants";

export type NavItemType = {
    key: string;
    name: string;
    path: string;
    icon: ElementType ;
  //  component: React.LazyExoticComponent<React.FC>;
    roles: string[]; // Controls visibility based on user role
    subMenu?: NavItemType[]; // Supports nested menus
};

const navItems: NavItemType[] = [
  {
    key: "UserDashboard",
    name: "Dashboard",
    path: "/user",
    icon: FaChartBar,
    roles:  [ROLES.USER],
  //   component: lazy(() => import("../pages/Users/UserDashboard")),
  },
  {
    key: "AdminSupportDashboard",
    name: "Dashboard",
    path: "/support",
    icon: FaChartBar,
    roles:  [ROLES.ADMIN_Support],
 //    component: lazy(() => import("../pages/AdminSupport/AdminSupportDashboard")),
  },
  {
    key: "BankManager",
    name: "Dashboard",
    path: "/manager",
    icon: FaChartBar,
    roles:  [ROLES.BANK_MANAGER],
 //    component: lazy(() => import("../pages/Manager/BankManager")),
  },
  {
    key: "SuperAdminDashboard",
    name: "Dashboard",
    path: "/dashboard",
    icon: FaChartBar,
    roles:  [ROLES.SUPER_ADMIN],
  //   component: lazy(() => import("../pages/SuperAdmin/SuperAdminDashboard")),
  },
  {
    key: "wallet",
    name: "Wallet",
    path: "/wallet",
    icon: FaWallet ,
    roles: ["support", "user"],
  //  component: lazy(() => import("../pages/Users/UserDashboard")),
  },
  {
    key: "users",
    name: "Users",
    path: "/users",
   icon: FaUser,
    roles: ["user"],
  //  component: lazy(() => import("../pages/Users/UserDashboard")),
    subMenu: [
      {
        key: "userDetails",
        name: "User Details",
        path: "/users/:id",
       icon: FaUser,
    //   component: lazy(() => import("../pages/Users/UserDashboard")),
        roles: ["user"],
      },
    ],
  },
  {
    key: "settings",
    name: "Settings",
    path: "/settings",
   icon: FaCogs,
    roles: ["support", "user"],
  //  component: lazy(() => import("../pages/Users/UserDashboard")),
  },
];

export default navItems;
