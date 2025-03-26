import { ElementType } from "react";
import { FaUser, FaWallet, FaChartBar, FaCogs, FaTools } from "react-icons/fa";
import { ROLES } from "./constants";
import { AiFillHome } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FcBullish } from "react-icons/fc";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { ChartNoAxesCombined } from "lucide-react";

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
    icon: AiFillHome ,
    roles:  [ROLES.USER],
  },
  {
    key: "Transactions",
    name: "Transactions",
    path: "/transaction",
    icon: MdCurrencyExchange  ,
    roles:  [ROLES.USER],
  },
  {
    key: "Accounts",
    name: "Accounts",
    path: "/accounts",
    icon: IoPersonSharp ,
    roles:  [ROLES.USER],
  },
  {
    key: "BankManager",
    name: "Dashboard",
    path: "/manager",
    icon: FaChartBar,
    roles:  [ROLES.BANK_MANAGER],
  },
  {
    key: "SuperAdminDashboard",
    name: "Dashboard",
    path: "/dashboard",
    icon: FaChartBar,
    roles:  [ROLES.SUPER_ADMIN],
  },
  {
    key: "investments",
    name: "Investments",
    path: "/investments",
    icon:  ChartNoAxesCombined  ,
    roles: [ROLES.USER],
  },
  {
    key: "credit-cards",
    name: "Credit cards",
    path: "/credit-cards",
    icon: FaCreditCard ,
    roles: [ROLES.USER],
  },
  {
    key: "loans",
    name: "Loans",
    path: "/loans",
    icon: GiReceiveMoney ,
    roles: [ROLES.USER],
  },
  {
    key: "services",
    name: "Services",
    path: "/services",
    icon: FaTools ,
    roles: [ROLES.USER],
  },
  {
    key: "setting",
    name: "Settings",
    path: "/setting",
    icon: IoIosSettings,
    roles: [ROLES.USER],
  },
  // {
  //   key: "users",
  //   name: "Users",
  //   path: "/users",
  //  icon: FaUser,
  //   roles: ["user"],
  // //  component: lazy(() => import("../pages/Users/UserDashboard")),
  //   subMenu: [
  //     {
  //       key: "userDetails",
  //       name: "User Details",
  //       path: "/users/:id",
  //      icon: FaUser,
  //   //   component: lazy(() => import("../pages/Users/UserDashboard")),
  //       roles: ["user"],
  //     },
  //   ],
  // },

];

export default navItems;
