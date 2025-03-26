import React from "react";

const transactions = [
  {
    icon: "/spotify_icon.png",
    bgColor: "bg-[#E7FAF5]",
    title: "Spotify Subscription",
    date: "25 Jan 2021",
    category: "Shopping",
    card: "1234 ****",
    status: "Pending",
    value: "-$150",
    valueColor: "text-[#FE5C73]",
  },
  {
    icon: "/settings_icon.png",
    bgColor: "bg-[#EEF4FF]",
    title: "Mobile Service",
    date: "25 Jan 2021",
    category: "Service",
    card: "1234 ****",
    status: "Completed",
    value: "-$340",
    valueColor: "text-[#FE5C73]",
  },
  {
    icon: "/profile_icon.png",
    bgColor: "bg-[#FDECEF]",
    title: "Emilly Wilson",
    date: "25 Jan 2021",
    category: "Transfer",
    card: "1234 ****",
    status: "Completed",
    value: "+$780",
    valueColor: "text-[#16DBAA]",
  },
];

const UserLastTransaction = () => {
  return (
    <div className="p-2 w-full min-w-fit  max-w-full">
      <h1 className="text-lg font-semibold text-[#232323] mb-4">Last Transaction</h1>

      <div className="p-3 w-full bg-white rounded-3xl shadow-md">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 py-2 px-2"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl`}>
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <div className="min-w-0 ">
                <h3 className="text-sm font-semibold text-[#232323] truncate">{item.title}</h3>
                <span className="text-xs text-[#718EBF]">{item.date}</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 justify-center text-sm text-[#718EBF]">{item.category}</div>
            <div className="hidden lg:flex flex-1 justify-center text-sm text-[#718EBF]">{item.card}</div>
            <div className="flex items-center gap-4 ">
              <span className="hidden lg:inline-block text-sm font-medium text-[#718EBF]">{item.status}</span>
              <span className={`text-sm font-semibold ${item.valueColor}`}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLastTransaction;
