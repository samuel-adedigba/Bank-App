import React from "react";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";

interface MobileToggleProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const MobileToggle: React.FC<MobileToggleProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <button className="md:hidden fixed top-5 left-4 z-50 p-2 rounded" onClick={toggleSidebar}>
      {isOpen ? <CiMenuKebab size={30} className="text-black" /> : <CiMenuFries size={30} className="text-gray-700" />}
    </button>
  );
};

export default MobileToggle;
