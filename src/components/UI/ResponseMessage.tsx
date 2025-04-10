import { useEffect } from "react";
import DialogBox from "./DialogBox";

interface Props {
  response: "success" | "error";
  message: string;
  isOpen: boolean;
  onClose: () => void; // Fix: Ensure parent controls this
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

const ResponseMessage: React.FC<Props> = ({
  response,
  message,
  isOpen,
  onClose,
  icon,
  title = "",
  className = "",
}) => {
  
  // Auto close modal after 2 seconds
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup function
    }
  }, [isOpen, onClose]);

  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center gap-4 text-center p-4">
        {/* Render icon (if it's an image, use `img`; if SVG/component, just render it) */}
        {typeof icon === "string" ? <img src={icon} alt="" className="w-12 h-12" /> : icon}

        <p
          className={`${className} px-4 py-2 rounded-lg text-white ${
            response === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </p>
      </div>
    </DialogBox>
  );
};

export default ResponseMessage;
