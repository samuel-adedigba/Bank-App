import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import navItems, { NavItemType } from "../../routes/navItems";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const role = useAppSelector((state) => state.auth.user?.role);
  const location = useLocation();

  return (
    <nav
      className={`
        fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg
        transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0
      `}
    >
      {/* Logo & Title */}
      <div className="mt-14 mb-8 flex gap-2 items-center ">
        <span>
             <img src="/app_logo.png" alt="" width={40} />
        </span>
        <h1 className="text-2xl font-bold ">Bank Wallet</h1>
      </div>

      {/* Navigation List */}
      <ul className="overflow-y-auto max-h-[70vh] scrollbar-hide">
        {navItems
          .filter((item: NavItemType) => item.roles.includes(role))
          .map((item: NavItemType) => (
            <li key={item.path} className="mb-4">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md transition-colors 
                ${location.pathname === item.path ? " border-l-8 border-blue-700 text-blue-700" : "hover:bg-gray-100"}`}
                onClick={toggleSidebar}
              >
                <item.icon className="mr-3 text-3xl font-semibold" />
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
                          className={`flex items-center p-2 rounded-md transition-colors 
                          ${location.pathname === sub.path ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                          onClick={toggleSidebar}
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
        <button className="text-base bg-red-500 text-white py-2 px-4 rounded-md w-full">
          Logout
        </button>
        <div className="mt-4 text-sm text-gray-400 text-center">
          <h2>POWERED BY</h2>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
