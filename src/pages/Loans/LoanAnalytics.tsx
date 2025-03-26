import React from 'react'
import Card from '../../components/UI/Atm-Card';
import { getCardStyles } from '../../components/UI/CardStyles';

const data = [
    {
      id: 1,
      label: "Personal Loans ",
      value: "$50,00",
      key: "personal_loans",
    },
    {
      id: 2,
      label: "Corporate Loans",
      value: "$100,00",
      key: "corporate_loans",
    },
    {
      id: 3,
      label: "Business Loans",
      value: "$500,00",
      key: "business_loans",
    },
    {
      id: 4,
      label: "Custom Loans",
      value: "Choose Money",
      key: "custom_loans",
    },
  ];

const LoanAnalytics = () => {
    return (
        <div className="max-w-screen-l  grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 mx gap-x- gap-y- gap-4 lg:gap-8 lg:mx-10  mt-2">
        {data.map((item) => {
          const { iconColor, logo } = getCardStyles(item.key);
          return (
            <Card key={item.id} className="bg-white py- px- p- rounded-2xl shadow-md w-full">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconColor}`}>
                  <img src={logo} alt={item.label} className="w-6 h-6" />
                </div>
      
                <div>
                  <span className="block text-gray-500 text-base font-bold">{item.label}</span>
                  <span className="block text-xl font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      );
}

export default LoanAnalytics;
