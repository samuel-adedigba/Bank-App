import React, { memo } from "react";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";

interface MobileToggleProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const MobileToggle: React.FC<MobileToggleProps> = ({ isOpen, toggleSidebar }) => {
  return (
    // <button
    //   onClick={toggleSidebar}
    //   className="md:hidden fixed top-5 left-4 z-50 p-2 rounded focus:outline-none focus:ring"
    // >
    //   {isOpen ? (
    //     <CiMenuKebab size={30} className="text-black" />
    //   ) : (
    //     <CiMenuFries size={30} className="text-gray-700" />
    //   )}
    // </button>
    // MobileToggle.tsx
<button
  onClick={toggleSidebar}
  className="fixed top-5 left-4 z-50 p-2 rounded md:hidden focus:outline-none focus:ring"
>
  {isOpen ? (
    <CiMenuKebab size={30} className="text-black" />
  ) : (
    <CiMenuFries size={30} className="text-gray-700" />
  )}
</button>

  );
};

export default memo(MobileToggle);
