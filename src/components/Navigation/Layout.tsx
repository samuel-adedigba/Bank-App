// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
// import navItems from "../../routes/navItems";
// import { useAppSelector } from "../../store/hook";

// const NavBar: React.FC = () => {
//   const role = useAppSelector((state) => state.auth.user?.role )
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 text-gray- p-2 rounded"
//         onClick={() => setOpen(!open)}
//       >
//         {open ? <CiMenuKebab size={30} /> : <CiMenuFries size={30} />}
//       </button>

//       {/* Sidebar Navigation */}
//       <nav
//         className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 transition-transform duration-300 z-40 
//         ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
//       >
//         <h1 className="text-xl font-bold mb-6">Bank Wallet</h1>

//         <ul>
//           {navItems
//             .filter((item) => item.roles.includes(role))
//             .map((item) => (
//               <li key={item.path} className="mb-4">
//                 <Link to={item.path} className="flex items-center p-2">
//                   <item.icon className="mr-2" />
//                   <span>{item.name}</span>
//                 </Link>

//                 {/* Submenu */}
//                 {item.subMenu && (
//                   <ul className="ml-4">
//                     {item.subMenu
//                       .filter((sub) => sub.roles.includes(role))
//                       .map((sub) => (
//                         <li key={sub.path} className="mb-2">
//                           <Link to={sub.path} className="flex items-center p-2">
//                             <sub.icon className="mr-2" />
//                             <span>{sub.name}</span>
//                           </Link>
//                         </li>
//                       ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//         </ul>
//       </nav>

//       {/* Overlay (Closes menu on mobile) */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default NavBar;

// src/components/Layout.tsx
import React, { useState } from "react";
import MobileToggle from "./MobileToggle";
import Sidebar from "./SideBar";
import Overlay from "./OverLay";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex">
      <MobileToggle isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />
      <Overlay isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <main
        className={`
          flex-grow transition-all duration-300
           -ml-52 md:ml-0
          p-4 bg-slate-100 h-full
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;


