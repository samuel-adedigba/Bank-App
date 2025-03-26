import React from "react";
import { AtmCardList, AtmCardProps } from "../../pages/Users/AtmCardList";
import Expense from "../../pages/Transaction/Expense";
import RecentTransactions from "../../pages/Transaction/RecentTransactions";

const atmCardData: AtmCardProps[] = [
  {
    id: "1",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    valid: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
  {
    id: "2",
    balance: "$8,420",
    cardHolder: "John Doe",
    valid: "06/24",
    cardNumber: "4123 **** **** 9876",
  },
];

const Transaction = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          <div>
             <AtmCardList data={atmCardData} />
          </div>
            <div className='w-full' >
                 <Expense />
            </div>
           
        </div> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
      <div className="col-span-2 w-full lg:w-fit">
      <AtmCardList data={atmCardData} view="See All" />
      </div>
      <div className="col-span-1">
      <Expense />
      </div>
    </div> */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-screen md:w-1/2 ">
          <AtmCardList data={atmCardData} view="See All" />
        </div>
        <div className="w-fit md:w-1/2">
          <Expense />
        </div>
      </div>
        <div className="">
           <RecentTransactions />
        </div>
     
    </div>
  );
};

export default Transaction;
