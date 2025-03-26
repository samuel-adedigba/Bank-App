import React from "react";
import UserDashboardRecentTransaction from "../../pages/Users/UserDashboardRecentTransaction";
import BarChartComponent from "../charts/BarChartComponent";
import MonochromePieChart from "../charts/MonochromePieChart";
import QuickTransfer from "../../pages/Users/QuickTransfer";
import { AtmCardList, AtmCardProps } from "../../pages/Users/AtmCardList";
import BalanceHistoryChart from "../../pages/Users/BalanceHistoryChart";

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

const UserDashboard = () => {
  return (
    <div className="p-4 space-y-6">
      {/* ATM Cards & Recent Transactions */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AtmCardList data={atmCardData} view="See All" />
        <UserDashboardRecentTransaction />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-2 w-fit">
          <AtmCardList data={atmCardData} view="See All" />
        </div>
        <div className="lg:col-span-1 ">
          <UserDashboardRecentTransaction />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 ">
          <BarChartComponent />
        </div>
        <div className="lg:col-span-1">
          <MonochromePieChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickTransfer />
        <BalanceHistoryChart />
      </div>
    </div>
  );
};

export default UserDashboard;
