import { lazy } from "react";
import { ROLES } from "./constants";
export const privateRoutes =[
    {
        key: 'dashboard',
        path: "/support",
        component: lazy(() => import("../pages/AdminSupport/AdminSupportDashboard")),
        allowedRoles: [ROLES.ADMIN_Support],
    },
    {
        key: 'userDashboard',
        path: '/user',
       // component: UserDashboard,
       component: lazy(() => import("../pages/Users/UserDashboard")),
        allowedRoles: [ROLES.USER],
    },
    {
        key: 'superAdminDashboard',
        path: "/dashboard",
        // component: SuperAdminDashboard,
        component: lazy(() => import("../pages/SuperAdmin/SuperAdminDashboard")),
        allowedRoles: [ROLES.SUPER_ADMIN]
    },
    {
      key: 'bankManagerDashboard',
      path: "/manager",
     // component: BankManager,
     component: lazy(() => import("../pages/Manager/BankManager")),
      allowedRoles: [ ROLES.BANK_MANAGER]
  },
  
]