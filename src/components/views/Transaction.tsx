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
    <div className="p-" >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-screen md:w-1/2 ">
          <AtmCardList data={atmCardData} view="See All" />
        </div>
        <div className="w-fit md:w-1/2">
          <Expense />
        </div>
      </div>
       <div className="container">
           <RecentTransactions />
        </div>
     
    </div>
  );
};

export default Transaction;
