import React from "react";

const CardSettings = () => {
  const settingsOptions = [
    {
      icon: "/block_card_icon.png",
      title: "Block Card",
      description: "Instantly block your card",
      bgColor: "bg-yellow-100",
    },
    {
      icon: "/lock_icon.png",
      title: "Change Pic Code",
      description: "Withdraw without any card",
      bgColor: "bg-blue-100",
    },
    {
      icon: "/google_pay_icon.png",
      title: "Add to Google Pay",
      description: "Withdraw without any card",
      bgColor: "bg-pink-100",
    },
    {
      icon: "/apple_pay_icon.png",
      title: "Add to Apple Pay",
      description: "Withdraw without any card",
      bgColor: "bg-green-100",
    },
    {
      icon: "/apple_store_icon.png",
      title: "Add to Apple Store",
      description: "Withdraw without any card",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="mx-auto px w-full" > 
    <h1 className="text-2xl font-semibold mb-4"> Card Settings </h1>    
    <div className="p-4 w-full max-w-xs  bg-white rounded-2xl shadow-sm">
      {settingsOptions.map((item, index) => (
        <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}>
            <img src={item.icon} alt={item.title} className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <h3 className="text-[#232323] font-medium text-base sm:text-lg">{item.title}</h3>
            <p className="text-[#718EBF] text-sm sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardSettings;
