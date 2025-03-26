import React from "react";
import { DisplayItems, DisplayItemsProps } from "../../components/UI/DisplayItems";

const CardData: DisplayItemsProps[]  = [
  { id: 1,  key:"credi-card1", name: "Card Type", description: "secondary",  item2: "Bank" , description2: "DBL Bank", item3: "Card Number" , description3: "**** ***** **** 5560", item4: "Namain Card" , description4: "William",  },
     { id: 2,  key:"credi-card3", name: "Samsung Mobile", description: "marketplace" , item2: "enlistment value", description2: "return value", item3: "Card Number" , description3: "**** ***** **** 5560", item4: "Namain Card" , description4: "Michel",  },
     {  id: 3, key:"credi-card3", name: "Tesla Motors", description: "e-commerce", item2: "Service", description2: "return value", item3: "Card Number" , description3: "**** ***** **** 5560", item4: "Namain Card" , description4: "Edward", },
];

const CardList = () => {
  return (
    <div className="-space-y-5 w-fit lg:w-full h-fit">
        <h2 className="text-xl font-semibold text-gray-900 mb-4"> Card List</h2>
      {CardData.map((investment) => (
        <DisplayItems key={investment.id}   className="w-full"
        //key={investment.id} 
        data={{
          ...investment,
          item3: (
            <span className="hidden lg:block">{investment.item3}</span>
          ),
          description3: (
            <span className="hidden lg:block">{investment.description3}</span>
          ),
          item4: (
            <span className="hidden lg:block">{investment.item4}</span>
          ),
          description4: (
            <span className="hidden lg:block">{investment.description4}</span>
          ),
        }} action="View Details" actionClassName="text-[#1814F3]  px-4 py-1 font-semibold  "  />
      ))}
    </div>
  );
};


export default CardList;
