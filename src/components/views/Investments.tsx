import React from "react"; 
import InvestmentAnalytics from "../../pages/Investments/InvestmentAnalytics";
import TrendingStocks from "../../pages/Investments/TrendingStocks";
import MyInvestment from "../../pages/Investments/MyInvestment";
import YearlyInvestmentChart from "../../pages/Investments/YearlyInvestmentChart";
import MonthlyInvestmentChart from "../../pages/Investments/MonthlyInvestmentChart";

const Investments = () => {
  return (
    <div className="container mx-aut px- py-">
      
      {/* Investment Analytics Section (Top Stats) */}
      <div className=" mb-6">
        <InvestmentAnalytics />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className=" p-4">
         <YearlyInvestmentChart />
        </div>
        <div className=" p-4">
          <MonthlyInvestmentChart />
        </div>
      </div>

      {/* Investment & Trending Stocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" p-4">
          <MyInvestment />
        </div>
        <div className=" p-4">
          <TrendingStocks />
        </div>
      </div>

    </div>
  );
};

export default Investments;
