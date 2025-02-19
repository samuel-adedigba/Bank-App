import React from "react";
import List from "../../components/UI/List";

const UserDashboardRecentTransaction = () => {
  const recentTransaction = [
    {
      title: "Deposit from my Card",
      value: "-$632",
      date: "28 January 2021",
      icon: "../src/assets/money_icon.png",
    },
    {
      title: "Depsot Paypal",
      value: "$1,520",
      date: "25 January 2021",
      icon: "../src/assets/paypal_icon.png",
    },
    {
      title: "Jemi Wilson",
      value: "+$5,500",
      date: "21 January 2021",
      icon: "../src/assets/deposit_icon.png",
    },
  ];

  return (
    <div className="md:justify-self-end justify-self-auto p-2 ">
    <List
      title="Recent Transactions"
      data={recentTransaction}
      keyMap={{ icon: "icon", title: "title", date: "date", value: "value" }}
      renderItem={(item) => (
        <div className="flex items-center gap-4 w-full">
          <img src={item.icon} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 -ml-4" />
  
          <div className="flex-1 min-w-0">
            <h3 className="text-[#232323] font-medium text-sm sm:text-lg truncate">
              {item.title}
            </h3>
            <span className="text-[#718EBF] text-xs sm:text-sm font-medium">{item.date}</span>
          </div>
  
          <span className="font-semibold text-[#FF4B4A] text-sm sm:text-base">
            {item.value}
          </span>
        </div>
      )}
    />
  </div>
  );
};

export default UserDashboardRecentTransaction;
