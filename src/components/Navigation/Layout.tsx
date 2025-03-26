import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import Overlay from "./OverLay";
import TopBar from "./TopBar";
import MobileToggle from "./MobileToggle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    closeSidebar(); // Close sidebar on route change
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />
      <MobileToggle isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-0 md:ml-60"}`}>
        <TopBar isSidebarOpen={isSidebarOpen} />
        <main className="p-6 mt-12 w-full h-full overflow-auto bg-[#F1F7FF] scrollbar-hide">{children}</main>
      </div>
      <Overlay isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Layout;