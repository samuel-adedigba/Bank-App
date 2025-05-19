// components/MobileNavbar.tsx
import React, { memo } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Home, Wallet, Plus, User } from "lucide-react";
import { IoStatsChartSharp } from "react-icons/io5";
import { useAppSelector } from "../../store/hook"; 
import { Link } from "react-router-dom";

const MobileNavbar: React.FC = () => {

  const userRole = useAppSelector((state) => state.auth.user?.role);

  if (!userRole?.includes("user") && !userRole?.includes("support")) {
    return null;
  }

  return (
    <nav className="fixed z-50 w-full h-16 max-w-sm -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-[#150C36] dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
       
        <Link
          to="/home"
          data-tooltip-id="tooltip-home"
          data-tooltip-content="Home"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-[#002F3B] group"
        >
          <Home
            size={20}
            className="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="sr-only">Home</span>
        </Link>
        <Tooltip id="tooltip-home" />

        <Link
          to="/transfer"
          data-tooltip-id="tooltip-wallet"
          data-tooltip-content="Wallet"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-[#002F3B] group"
        >
          <Wallet
            size={20}
            className="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="sr-only">Wallet</span>
        </Link>
        <Tooltip id="tooltip-wallet" />


        <div className="flex items-center justify-center">
          <Link
            to="/messages"
            data-tooltip-id="tooltip-messsage"
            data-tooltip-content="Messsage"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <Plus size={16} className="text-white" />
            <span className="sr-only">Messsages</span>
          </Link>
        </div>
        <Tooltip id="tooltip-messsage" />

        <Link
          to="/analytics"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-[#002F3B] group"
          data-tooltip-id="tooltip-analytics"
          data-tooltip-content="Analytics"
        >
          <IoStatsChartSharp
            size={20}
            className="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="sr-only">Analytics</span>
        </Link>

        <Tooltip id="tooltip-analytics" />


        <Link
          to="/accounts-card"
          data-tooltip-id="tooltip-accounts-card"
          data-tooltip-content="Accounts"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-[#002F3B] group"
        >
          <User
            size={20}
            className="mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span className="sr-only">Account</span>
        </Link>
        <Tooltip id="tooltip-accounts-card" />
      </div>
    </nav>
  );
};

export default memo(MobileNavbar);
