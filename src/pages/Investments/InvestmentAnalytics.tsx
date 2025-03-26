import React from 'react'
import Card from '../../components/UI/Atm-Card';
import { getCardStyles } from '../../components/UI/CardStyles';

const data = [
    {
      id: 1,
      label: "Total Investment Amount ",
      value: "$150,00",
      key: "total_investment",
    },
    {
      id: 2,
      label: "Number of Investments",
      value: "1,270",
      key: "no_investment",
    },
    {
      id: 3,
      label: "Rate of Return",
      value: "+5.80%",
      key: "rate",
    },
  ];

const InvestmentAnalytics = () => {
    return (
        <div className="max-w-screen-l  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx gap-x- gap-y- gap-4 lg:gap-8 lg:mx-10  mt-5">
        {data.map((item) => {
          const { iconColor, logo } = getCardStyles(item.key);
          return (
            <Card key={item.id} className="bg-white py- px- p-4 rounded-2xl shadow-md w-full">
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

export default InvestmentAnalytics;
