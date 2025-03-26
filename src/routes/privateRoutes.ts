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
       component: lazy(() => import("../components/views/UserDashboard")),
        allowedRoles: [ROLES.USER],
    },
    {
        key: 'transaction',
        path: '/transaction',
       // component: UserDashboard,
       component: lazy(() => import("../components/views/Transaction")),
        allowedRoles: [ROLES.USER],
    },
    {
        key: 'Accounts',
        path: "/accounts",
        // component: SuperAdminDashboard,
        component: lazy(() =>import("../components/views/Accounts")),
        allowedRoles:[ROLES.USER],
    },
    {
      key: 'Investments',
      path: "/investments",
     // component: BankManager,
     component: lazy(() => import("../components/views/Investments")),
      allowedRoles: [ROLES.USER],
  },
  {
    key: 'credit-cards',
    path: "/credit-cards",
   // component: BankManager,
   component: lazy(() => import("../components/views/Credit-Cards")),
    allowedRoles: [ROLES.USER],
},
{
    key: 'loans',
    path: "/loans",
   // component: BankManager,
   component: lazy(() => import("../components/views/Loans")),
    allowedRoles: [ROLES.USER],
},
{
    key: 'service',
    path: "/services",
   // component: BankManager,
   component: lazy(() => import("../components/views/Service")),
    allowedRoles: [ROLES.USER],
},
{
    key: 'setting',
    path: "/setting",
   // component: BankManager,
   component: lazy(() => import("../components/views/Settings")),
    allowedRoles: [ROLES.USER],
},
  
]