import React from "react";
import List from "../../components/UI/List";

const UserLastTransaction = () => {
  const lastTransactions = [
    {
      icon: "../src/assets/spotify_icon.png",
      title: "Amazon Purchase",
      date: "Jan 12, 2024",
      value: "$50.00",
      status: "Completed",
      atm: "123*********",
      remark: "Shopping",
    },
    {
      icon: "../src/assets/settings_icon.png",
      title: "Uber Eats",
      date: "Jan 10, 2024",
      value: "$25.75",
      status: "Pending",
      atm: "123*********",
      remark: "Service",
    },
    {
      icon: "../src/assets/profile_icon.png",
      title: "Bank Transfer",
      date: "Jan 5, 2024",
      value: "$1000.00",
      status: "Failed",
      atm: "123*********",
      remark: "Transfer",
    },
  ];

  return (
    <div className="p-2 w-full">
      <List
        title="Last Transactions"
        data={lastTransactions}
        keyMap={{
          icon: "icon",
          title: "title",
          date: "date",
          value: "value",
          status: "status",
          remark: "remark",
          atm: "atm",
        }}
        renderItem={(item) => (
          <div className="flex items-center  gap-4 w-full">
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

            <span className="text-[#718EBF] text-sm sm:text-base font-semibold mr-4">
              {item.remark}
            </span>
            <span className="text-[#718EBF] text-sm sm:text-base font-semibold mr-4">
              {item.atm}
            </span>
            <span className="font-semibold text-[#718EBF] text-sm sm:text-base mr-4">
              {item.value}
            </span>

            <span
              className={`px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default UserLastTransaction;
