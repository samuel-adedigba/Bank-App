import React, { memo } from "react";
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

// const formatPathName = (path: string) => {
//   return (
//     path
//       .replace("/", "")
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard"
//   );
// };

interface TopBarProps {
  isSidebarOpen?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TopBar: React.FC<TopBarProps> = ({ isSidebarOpen }) => {
  // const location = useLocation();
  // const pageTitle = formatPathName(location.pathname);
  return (
    <header
    className="
      fixed top-0 left-0 z-40 
      w-full md:left-64 md:w-[calc(100%-16rem)] 
      h-16 bg-white shadow-md 
      flex items-center justify-between 
      px-4 md:px-6
      transition-all
    "
  >
    <div className="flex items-center space-x-4"> 
      <div className=" flex items-center bg-gray-200 rounded-full p-2  w-full">
        <AiOutlineSearch className="text-gray-400 mr-4" size={25} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-base focus:outline-none"
        />
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
        <FaBell size={25} className="text-gray-600" />

        <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full ring-1 ring-white" />
      </button>

      <Link to="/setting" className="block">

        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img src="/avatar.png" alt="" />
        </div>
      </Link>
    </div>
  </header>
  );
};

export default memo(TopBar);
