import React from "react";


const transactions = [
  {
    icon: "/apple_icon.png",
    title: "Apple Store",
    date: "5h ago",
    value: "$450",
    bgColor: "bg-[#EFFFF6]",
    textColor: "text-[#97A3B6]",
    priceColor: "text-[#97A3B6]",
  },
  {
    icon: "/user_icon.png",
    title: "Michael",
    date: "2 days ago",
    value: "$160",
    bgColor: "bg-[#FFF7E6]",
    textColor: "text-[#97A3B6]",
    priceColor: "text-[#97A3B6]",
  },
  {
    icon: "/playstation_icon.png",
    title: "Playstation",
    date: "5 days ago",
    value: "$1085",
    bgColor: "bg-[#F0F3FF]",
    textColor: "text-[#97A3B6]",
    priceColor: "text-[#97A3B6]",
  },
  {
    icon: "/user_icon.png",
    title: "William",
    date: "10 days ago",
    value: "$90",
    bgColor: "bg-[#FFEFF4]",
    textColor: "text-[#97A3B6]",
    priceColor: "text-[#97A3B6]",
  },
];

const InvoiceList = () => {
  return (
    <div className="max-w-full min-w-fit px-4">
      <h2 className="text-2xl font-semibold text-[#2F365F] mb-4">Invoices Sent</h2>
      <div className="p-6 bg-white shadow-md rounded-2xl">
        {transactions.map((item, index) => (
          <div key={index} className="flex items-center justify-around py-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bgColor}`}>
              <img src={item.icon} alt={item.title} width={28} height={28} />
            </div>

            <div className="flex-1 min-w-0 mx-auto">
              <h3 className="text-gray-700 font-medium text-sm">{item.title}</h3>
              <span className={`${item.textColor} text-xs`}>{item.date}</span>
            </div>

            <span className={`${item.priceColor} font-semibold text-sm`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
