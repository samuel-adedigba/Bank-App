import React from "react";
import UserLastTransaction from "../../pages/Users/UserLastTransaction";
import CreditOverview from "../../pages/Accounts/CreditOverview";
import InvoiceList from "../../pages/Users/InvoiceList";
import AccountAnalytics from "../../pages/Accounts/AccountAnalytics";
import { AtmCardList, AtmCardProps } from "../../pages/Users/AtmCardList";

const atmCardData: AtmCardProps[] = [
  {
    id: "1",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    valid: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
];

const Accounts = () => {
  return (
    <div className="p- md:p-">
      {/* Top Analytics Section */}
      <div className="mb-6  ">
        <AccountAnalytics />
      </div>

      {/* Transactions & ATM Card Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 sm:mt-10"> */}
        {/* <div className="col-span-2">
          
        </div> */}
        <div className="flex flex-col md:flex-row gap-6 ">
          <div  className="w-fit md:w-full">
              <UserLastTransaction />
          </div>
        
          <div className="md:w-1/2  w-screen" >
              <AtmCardList data={atmCardData} view="See All" />
          </div>
        
        </div>
      {/* </div> */}

      {/* Credit Overview & Invoice List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 sm:mt-10 w-full px-4">
        <div className="w-full col-span-2 ">
          <CreditOverview />
        </div>
        <div className="w-full">
          <InvoiceList />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
