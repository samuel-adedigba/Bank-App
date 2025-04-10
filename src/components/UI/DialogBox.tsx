import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { IoClose } from "react-icons/io5"; // Close icon

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actionButton?: {
    text: string;
    onClick: () => void;
    className?: string;
  };
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, title, children, actionButton }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        {/* Prevents closing when clicking outside */}
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
              {/* Close Button (X) at Top Right */}
              <button 
                onClick={onClose} 
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
              >
                <IoClose className="text-2xl" />
              </button>

              {/* Title */}
              {title && (
                <DialogTitle className="text-lg font-semibold text-gray-900 mb-4">
                  {title}
                </DialogTitle>
              )}

              {/* Dialog Content */}
              <div className="mb-4">{children}</div>

              {/* Action Button (Optional) */}
              {actionButton && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={actionButton.onClick}
                    className={`px-4 py-2 text-white rounded-md ${actionButton.className || "bg-blue-500 hover:bg-blue-600"}`}
                  >
                    {actionButton.text}
                  </button>
                </div>
              )}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogBox;
