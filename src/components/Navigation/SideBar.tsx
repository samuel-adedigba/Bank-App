import React from "react";
import { Link } from "react-router-dom";
import navItems, { NavItemType } from "../../routes/navItems";
import { useAppSelector } from "../../store/hook";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const role = useAppSelector((state) => state.auth.user?.role);

  return (
    <nav
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 
        transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0 
      `}
    >
      <div
      className="mt-20"
      >
      <h1 className="text-xl font-bold mb-6">Bank Wallet</h1>
      <ul>
        {navItems
          .filter((item: NavItemType) => item.roles.includes(role))
          .map((item: NavItemType) => (
            <li key={item.path} className="mb-4">
              <Link to={item.path} className="flex items-center p-2" onClick={toggleSidebar}>
                <item.icon className="mr-2" />
                <span>{item.name}</span>
              </Link>
              {item.subMenu && (
                <ul className="ml-4">
                  {item.subMenu
                    .filter((sub: NavItemType) => sub.roles.includes(role))
                    .map((sub: NavItemType) => (
                      <li key={sub.path} className="mb-2">
                        <Link to={sub.path} className="flex items-center p-2" onClick={toggleSidebar}>
                          <sub.icon className="mr-2" />
                          <span>{sub.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
