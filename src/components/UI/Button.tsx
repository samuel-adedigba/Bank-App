import { Button as HeadlessButton } from "@headlessui/react";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useFormikContext, FormikContextType } from "formik"; 
import Loading from "./Loading";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "dark";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  disableOnError?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  color = "primary",
  size = "medium",
  isLoading = false,
  type = "button",
  icon,
  disableOnError = false,
}) => {
  const colorClasses = {
    primary: "bg-blue-700 hover:bg-blue-600 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
    info: "bg-cyan-500 hover:bg-cyan-600 text-white",
    dark: "bg-gray-900 hover:bg-gray-800 text-white",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    // <HeadlessButton
    //   onClick={onClick}
    //   type={type}
    //   disabled={isDisabled}
    //   className={`flex items-center justify-center gap-2 rounded-md transition-all duration-300
    //     ${colorClasses[color]} ${sizeClasses[size]} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
    //     ${className}`}
    // >
    //   {isLoading ? <Loading /> : icon ? <>{icon} {title}</> : title}
    // </HeadlessButton>
    <button
      type={type}
      className={`flex items-center justify-center gap-2 rounded-md transition-all duration-300  ${
        colorClasses[color]
      }  ${className}
     ${disableOnError || isLoading ? "opacity-50 cursor-not-allowed" : ""}
    ${sizeClasses[size]} `}
      onClick={onClick}
      disabled={disableOnError || isLoading}
    >
      {isLoading ? (
        <Loading />
      ) : icon ? (
        <>
          {icon} {title}
        </>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
