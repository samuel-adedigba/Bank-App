import React from "react";
import { DisplayItems, DisplayItemsProps } from "../../components/UI/DisplayItems";

const MyInvestmentData: DisplayItemsProps[] = [
  {
    id: 1,
    key: "apple",
    name: "Apple Store",
    description: "e-commerce, marketplace",
    description2: "Service",
    return_value: "return value",
    item2: "-2500",
    rate: +16,
  },
  {
    id: 2,
    key: "samsung",
    name: "Samsung Mobile",
    description: "e-commerce, marketplace",
    description2: "enlistment value",
    return_value: "return value",
    item2: "-2500",
    rate: +16,
  },
  {
    id: 3,
    key: "tesla",
    name: "Tesla Motors",
    description:"e-commerce, marketplace",
    description2: "Service",
    return_value: "return value",
    item2: "-2500",
    rate: +16,
  },
];

const MyInvestment = () => {
  return (
    <div className="-space-y-5 w-fit h-fit">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 "> My Investment </h2>
      {MyInvestmentData.map((investment) => (
        <DisplayItems key={investment.id} data={investment}   />
      ))}
    </div>
  );
};


export default MyInvestment;
