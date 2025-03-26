import React from "react";
import Charts from "../../utilis/Charts";
import { apexLineChartDefaultOption } from "../../components/config/chart.config";
import { ApexOptions } from "apexcharts";
import { data } from "../../components/mock/data/chart";

const BalanceHistoryChart = () => {
  const customOptions: ApexOptions = {
    ...apexLineChartDefaultOption,
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    colors: ["#0026FF"], // Bright blue color
    stroke: {
      curve: "smooth",
      width: 4,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.1,
        colorStops: [
          { offset: 0, color: "#0026FF", opacity: 1 },
          { offset: 100, color: "#FFFFFF", opacity: 1 },
        ],
      },
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
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
        formatter: (val: number) => `${val}`,
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
        formatter: (val: number) => `${val}`,
      },
    },
  };

  return (
    <div>
      <h1 className="text-[#222F5D] text-lg font-bold my-4">
        Balance History
      </h1>
      <div className="max-w-full mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <Charts series={data.balanceHistory.series} customOptions={customOptions} type="line" height={320} />
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
