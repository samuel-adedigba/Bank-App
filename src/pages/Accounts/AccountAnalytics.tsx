import React from "react";
import Card from "../../components/UI/Atm-Card";
import { getCardStyles } from "../../components/UI/CardStyles";

const data = [
  { id: 1, label: "My Balance", value: "$12,750", key: "balance" },
  { id: 2, label: "Income", value: "$5,600", key: "income" },
  { id: 3, label: "Expense", value: "$3,460", key: "expense" },
  { id: 4, label: "Total Saving", value: "$7,920", key: "saving" },
];

const AccountAnalytics = () => {
  return (
    <div className="md:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-fit gap-4">
      {data.map((item) => {
        const { iconColor, logo } = getCardStyles(item.key);
        return (
          <Card
            key={item.id}
            className="bg-white flex items-center rounded-xl shadow-lg w-full min-w-fit "
          >
            <div className="flex items-center gap-3 w-full py-2">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${iconColor}`}
              >
                <img src={logo} alt={item.label} className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-gray-500 text-sm">
                  {item.label}
                </span>
                <span className="block text-lg font-bold text-gray-900">
                  {item.value}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AccountAnalytics;
