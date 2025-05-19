import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import navItems, { NavItemType } from "../../routes/navItems";
import classNames from "classnames";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const role = useAppSelector((state) => state.auth.user?.role?.[0] || "user");

  const location = useLocation();

  return (
    <nav
      className={classNames(
        "fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg transition-transform duration-300 z-50",
        { "-translate-x-64": !isOpen, "translate-x-0": isOpen, "md:translate-x-0": true }
      )}
    >
      {/* Logo & Title */}
      <div className="mt-14 mb-8 flex items-center gap-2">
        <img src="/app_logo.png" alt="App Logo" width={40} />
        <h1 className="text-2xl font-bold text-blue-600">Bank Wallet</h1>
      </div>

      {/* Navigation List */}
      <ul className="overflow-y-auto max-h-[70vh] scrollbar-hide">
        {navItems
          .filter((item: NavItemType) => item.roles.includes(role))
          .map((item: NavItemType) => (
            <li key={item.path} className="mb-4">
              <Link
                to={item.path}
                onClick={toggleSidebar}
                className={classNames(
                  "flex items-center gap-3 p-3 rounded-md transition",
                  location.pathname === item.path
                    ? "border-l-8 border-blue-700 text-blue-700"
                    : "hover:bg-gray-100"
                )}
              >
                <item.icon className="mr-3 text-3xl" />
                <span>{item.name}</span>
              </Link>

              {/* SubMenu */}
              {item.subMenu && (
                <ul className="ml-5">
                  {item.subMenu
                    .filter((sub: NavItemType) => sub.roles.includes(role))
                    .map((sub: NavItemType) => (
                      <li key={sub.path} className="mb-2">
                        <Link
                          to={sub.path}
                          onClick={toggleSidebar}
                          className={classNames(
                            "flex items-center p-2 rounded-md transition",
                            location.pathname === sub.path
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100"
                          )}
                        >
                          <sub.icon className="mr-3" />
                          <span>{sub.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>

      {/* Logout Section */}
      <div className="absolute bottom-6 left-4">
        <button className="w-full py-2 px-4 rounded-md bg-red-500 text-white">
          Logout
        </button>
        <div className="mt-4 text-sm text-gray-400 text-center">
          <h2>POWERED BY</h2>
        </div>
      </div>
    </nav>
  );
};

export default memo(Sidebar);
