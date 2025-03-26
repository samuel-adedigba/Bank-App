import React from "react";
import Card from "../../components/UI/Atm-Card";
import { getCardStyles } from "./CardStyles";
export interface DisplayItemsProps {
  id: number;
  key: string;
  name: string;
  description?: string;
  rate?: number;
  return_value?: string;
  item2?: string;
  description2?: string;
  item3?: string;
  description3?: string;
  item4?: string;
  description4?: string;
}

interface DisplayCardProps {
  data: DisplayItemsProps;
  action?: string;
 actionClassName?: string;
 className?: string;
onClick?: ()=> void;
}

export const DisplayItems: React.FC<DisplayCardProps> = ({ data, action, onClick, actionClassName, className }) => {
  const {
    name,
    key,
    description,
    item2,
    description2,
    item3,
    description3,
    item4,
    description4,
    rate,
    return_value,
  } = data;

  const { iconColor, logo } = getCardStyles(key);

  return (
    <Card className=" border-none">
      <div className={`flex bg-white rounded-xl  items-center p-3 space-x-4 w-full  justify-between ${className} `}>
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${iconColor}`}
        >
          <img src={logo} alt={name} className="w-6 h-6 " />
        </div>

        <div className="flex flex-col text-left">
          <h3 className="text-base font-semibold text-gray-900 capitalize">{name}</h3>
          <p className="text-sm text-gray-500 capitalize">
            {" "}
            {Array.isArray(description)
              ? description.join(", ")
              : description}{" "}
          </p>
        </div>
        {item2 && (
          <div className="flex flex-col text-left">
            <span className="text-base font-semibold text-gray-900 capitalize">
              {item2}
            </span>
            <span className="text-sm text-gray-500 capitalize">
              {" "}
              {Array.isArray(description2)
                ? description2.join(", ")
                : description2}{" "}
            </span>
          </div>
        )}
        {item3 && (
          <div className="flex flex-col text-left =">
            <span className="text-base font-semibold text-gray-900 capitalize">
              {item3}
            </span>
            <span className="text-sm text-gray-500 capitalize">
              {" "}
              {Array.isArray(description3)
                ? description3.join(", ")
                : description3}{" "}
            </span>
          </div>
        )}
        {item4 && (
          <div className="flex flex-col text-left">
            <span className="text-base font-semibold text-gray-900 capitalize">
              {item4}
            </span>
            <span className="text-sm text-gray-500 capitalize">
              {" "}
              {Array.isArray(description4)
                ? description4.join(", ")
                : description4}{" "}
            </span>
          </div>
        )}
        {rate && (
          <div className="flex flex-col text-left">
            <span
              className={`text-base font-semibold ${
                rate >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {rate > 0 ? `+${rate}%` : `${rate}%`}
            </span>
            <span className="text-base text-gray-500 capitalize">
              {return_value}
            </span>
          </div>
        )}

        {action && (
          <button className={` px-4 py-1 text-base   ${actionClassName} `}  onClick={onClick}  >
            {action}
          </button>
        )}
      </div>
    </Card>
  );
};
