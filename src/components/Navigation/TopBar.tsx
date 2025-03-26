// TopBar.tsx
import React from "react";
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

interface TopBarProps {
  isSidebarOpen: boolean;
}

const formatPathName = (path: string) => {
  return path
    .replace("/", "") // Remove the leading slash
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard"; // Capitalize first letter of each word
};
const TopBar: React.FC<TopBarProps> = () => {
  const location = useLocation();
  const pageTitle = formatPathName(location.pathname);
  return (
    <header
      className={`fixed top-0 left-0 bg-white z-40  md:left-64 w-full md:w-[calc(100%-16rem)]  h-16 text-gray-900 flex items-center justify-between px-6 shadow-md  transition-all`}
    >
      <h1 className="text-2xl ml-16 md:ml-0 font-bold mt-2"> {pageTitle} </h1>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="text-black rounded-full px-4 py-2 pl-10 border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button className="relative p-2 rounded-full hover:bg-gray-300">
          <FaBell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 w-3 h-3 rounded-full">  </span>
        </button>

        <Link to="/profile">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">U</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default TopBar;