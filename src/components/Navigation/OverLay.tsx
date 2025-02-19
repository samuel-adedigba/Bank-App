import React from "react";

interface OverlayProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, closeSidebar }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      onClick={closeSidebar}
    />
  );
};

export default Overlay;
