import React from 'react'
import Card from '../../components/UI/Atm-Card';
import { getCardStyles } from '../../components/UI/CardStyles';

const data = [
    {
      id: 1,
      label: "Life Insurance ",
      value: "unlimited protection",
      key: "insurance",
    },
    {
      id: 2,
      label: "Shopping",
      value: "buy,think,grow",
      key: "shopping",
    },
    {
      id: 3,
      label: "Safety",
      value: "we are your allies",
      key: "safety",
    },
    
  ];

const ServiceAnalytics = () => {
    return (
        <div className="max-w-screen-lg  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 mx-auto gap-x- gap-y- gap-4 lg:gap-8 lg:mx-10  mt-2">
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

export default ServiceAnalytics;
