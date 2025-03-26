import React from 'react';
import { AtmCardList, AtmCardProps } from '../../pages/Users/AtmCardList';
import AddNewCard from '../../pages/credit-cards/AddNewCard';
import CardSettings from '../../pages/credit-cards/CardSettings';
import CardList from '../../pages/credit-cards/CardList';
import CardExpenseStatistics from '../../pages/credit-cards/CardExpenseStatistics';

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
  {
    id: "3",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    valid: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
];

const CreditCards = () => {
  return (
    <div className=" p-2 space-y-6">

      <div className="w-full">
        <AtmCardList data={atmCardData} view="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="w-fit md:w-full md:col-span-1">
         <CardExpenseStatistics />
        </div>
        
        <div className="md:col-span-2 ">
          <CardList />
        </div>
       
      </div>

      {/* Add New Card & Card Settings Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddNewCard />
        <CardSettings />
      </div> */}
      <div className='grid md:grid-cols-3 md:gap-10 gap-4' >     
      <div className='md:col-span-2 '  >
      <AddNewCard />
      </div>
      <div className='md:col-span-1 '  >
      <CardSettings />
      </div>
      </div>
    </div>
  );
};

export default CreditCards;
