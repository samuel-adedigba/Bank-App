import React from "react";
import Charts from "../../utilis/Charts";
import { apexLineChartDefaultOption } from "../../components/config/chart.config";
import { ApexOptions } from "apexcharts";
import { data } from "../../components/mock/data/chart";
import { COLORS } from "../../components/config/chartColor";


const MonthlyInvestmentChart = () => {
  const customOptions: ApexOptions = {
    ...apexLineChartDefaultOption,
    colors:  [COLORS[2]], 
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: data.yearlyInvestment.investmentCategories, 
      labels: {
        style: {
          colors: "#8590B5",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
        style: {
          colors: "#8590B5",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    grid: {
      borderColor: "#E0E5F2",
      strokeDashArray: 3,
      padding: { left: 10, right: 10, top: 5, bottom: 5 },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  return (
    <div>
      <h1 className="text-[#222F5D] text-lg font-bold mb-4">
       Monthly Revenue
      </h1>
      <div className="max-w-full mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <Charts series={data.yearlyInvestment.investmentSeries} customOptions={customOptions} type="line" height={320} />
      </div>
    </div>
  );
};

export default MonthlyInvestmentChart;
