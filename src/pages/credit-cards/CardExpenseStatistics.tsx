import React from "react";
import Charts from "../../utilis/Charts";
import { data } from "../../components/mock/data/chart";
import { COLORS } from "../../components/config/chartColor";

const CardExpenseStatistics = () => {
  return (
    <div className="w-full max-w-full mx-auto">
      <h1 className="text-lg md:text-xl font-bold text-[#222F5D] mb-4 tracking-wide ">
        Card Expense Statistics
      </h1>
      <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6">
        <div className="flex justify-center">
          <Charts
            type="donut"
            series={data.expensePieChart.series}
            customOptions={{
              colors: [...COLORS],
              stroke: {
                show: true,
                width: 4, // Slightly thinner ring for a clean look
                colors: ["#fff"],
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "50%", // Adjusted donut hole size for balance
                    background: "transparent",
                  },
                  expandOnClick: true, // Expands slightly on click
                  offsetX: 0,
                  offsetY: 0,
                  customScale: 1, // Ensures consistent sizing
                },
              },
              dataLabels: {
                enabled: false, // Hide labels inside the chart
              },
              legend: {
                position: "bottom",
                horizontalAlign: "center",
                fontSize: "12px",
                markers: {
                  width: 10,
                  height: 10,
                  radius: 5, // Rounded markers
                },
                labels: {
                  colors: "#8590B5",
                  useSeriesColors: false,
                },
                itemMargin: {
                  horizontal: 8, // Optimized spacing
                  vertical: 4,
                },
              },
              tooltip: {
                enabled: true,
                y: {
                  formatter: function (val) {
                    return val + "%"; // Format tooltip values
                  },
                },
              },
              labels: data.expensePieChart.labels, // Ensure legends match labels
              responsive: [
                {
                  breakpoint: 768,
                  options: {
                    chart: {
                      width: 300, // Adjust size for tablets
                    },
                    legend: {
                      fontSize: "10px",
                      itemMargin: { horizontal: 5, vertical: 3 },
                    },
                  },
                },
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 250, // Adjust size for mobile
                    },
                    legend: {
                      show: true,
                      fontSize: "10px",
                      itemMargin: { horizontal: 3, vertical: 2 },
                    },
                  },
                },
              ],
              states: {
                hover: {
                  filter: {
                    type: "lighten", // Lighten effect on hover
                    value: 0.2, // Increased for better visibility
                  },
                },
                active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                    type: "none", // No blur effect when selected
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardExpenseStatistics;
