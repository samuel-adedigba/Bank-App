import React, { useState, useCallback, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import MobileToggle from "./MobileToggle";
import TopBar from "./TopBar";
import Overlay from "./OverLay";
import MobileNavbar from "./MobileNavbar";
import { useAppSelector } from "../../store/hook";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const userRole = useAppSelector((state) => state.auth.user?.role);

  const isMobileRole = userRole?.includes("user") || userRole?.includes("support");

  const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />

      {!isMobileRole && (
        <MobileToggle isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-60" : "ml-0 md:ml-60"
        }`}
      >
        <TopBar isSidebarOpen={isSidebarOpen} />
        <main className="p-2 mt-12 w-full h-full overflow-auto bg-[#F1F7FF] scrollbar-hide pb-20">
          {children} 
        </main>
      </div>


      <Overlay isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {isMobileRole && (
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      )}
    </div>
  );
};

export default memo(Layout);