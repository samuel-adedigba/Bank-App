import React from "react";

interface OverlayProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, closeSidebar }) => {
  return isOpen ? <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeSidebar} /> : null;
};

export default Overlay;
