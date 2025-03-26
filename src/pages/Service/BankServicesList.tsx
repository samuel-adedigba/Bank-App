import React from "react";
import { DisplayItems } from "../../components/UI/DisplayItems";

// Dummy data for services
const bankServices = [
  {
    id: 1,
    name: "Business loans",
    description: "It is a long established",
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
    key: "business_loans"  ,
  },
  {
    id: 2,
    name: "Checking accounts",
    description: "It is a long established",
    key: "shopping"  ,
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
  },
  {
    id: 3,
    name: "Savings accounts",
    description: "It is a long established",
    key: "saving"  ,
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
  },
  {
    id: 4,
    name: "Debit and credit cards",
    description: "It is a long established",
    key: "personal_loans",
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
  },
  {
    id: 5,
    name: "Life Insurance",
    description: "It is a long established",
    key: "insurance",
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
  },
  {
    id: 6,
    name: "Business loans",
    description: "It is a long established",
    item2: "Lorem Ipsum",
    description2: "Many publishing",
    item3: "Lorem Ipsum",
    description3: "Many publishing",
    item4: "Lorem Ipsum",
    description4: "Many publishing",
    key: "business_loans"  ,
  },
];


const BankServicesList = () => {
  return (
    <div className="-space-y-5 w-full p-4">
       <h2 className="text-xl font-semibold text-gray-900 mb-4">Bank Services List </h2>
      {bankServices.map((service) => (
        <DisplayItems key={service.id} data={service} action="View Details" actionClassName="  hover:text-blue-800 hover:border-blue-800  focus:text-[#1814F3] focus:border-[#1814F3] active:border-[#1814F3] text-[#718EBF] border-[#718EBF] border-[#718EBF]  px-6 py-2 font-semibold border rounded-3xl text-base  "   />
      ))}
    </div>
  );
};

export default BankServicesList;
