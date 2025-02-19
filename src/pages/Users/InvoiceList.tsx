import React from "react";
import List from "../../components/UI/List";

const InvoiceList = () => {
  const lastTransactions = [
    {
      icon: "../src/assets/spotify_icon.png",
      title: "Apple store",
      date: "Jan 12, 2024",
      value: "$50.00",
    },
    {
      icon: "../src/assets/settings_icon.png",
      title: "Micheal",
      date: "Jan 10, 2024",
      value: "$25.75",
    },
    {
      icon: "../src/assets/profile_icon.png",
      title: "Play store",
      date: "Jan 5, 2024",
      value: "$1000.00",
    },
    {
        icon: "../src/assets/profile_icon.png",
        title: "William",
        date: "Jan 5, 2024",
        value: "$1000.00",
      },
  ];

  return (
    <div className="p-2 w-full place-items-end">
      <List
        title="Invoice Sent"
        data={lastTransactions}
        keyMap={{
          icon: "icon",
          title: "title",
          date: "date",
          value: "value",
          status: "status",
        }}
        renderItem={(item) => (
          <div className="flex items-center gap-4 w-full">
            <img
              src={item.icon}
              alt="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 -ml-4"
            />

            <div className="flex-1 min-w-0 mr-6">
              <h3 className="text-[#232323] font-medium text-sm sm:text-lg truncate">
                {item.title}
              </h3>
              <span className="text-[#718EBF] text-xs sm:text-sm font-medium ">
                {item.date}
              </span>
            </div>

            <span className="font-semibold text-[#718EBF] text-sm mr-auto sm:text-base">
              {item.value}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default InvoiceList;
