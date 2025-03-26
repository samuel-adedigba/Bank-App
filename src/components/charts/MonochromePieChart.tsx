import React from "react";
import Charts from "../../utilis/Charts";
import { data } from "../mock/data/chart";
import { COLORS } from "../config/chartColor";

const MonochromePieChart = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Expense Statistics</h1>
      <div className="py-6 bg-white shadow-lg rounded-2xl">
        <div className="flex justify-center">
          <Charts
            type="pie"
            series={data.pieChart.series}
            xAxis={data.pieChart.labels}
            customOptions={{
              colors: [...COLORS],
              stroke: {
                show: true,
                width: 8,
                colors: ["#fff"], // White stroke to separate slices
              },
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  colors: ["#fff"], // White text for better contrast
                },
                formatter: (val, { seriesIndex }) => {
                  return [`${data.pieChart.labels[seriesIndex]}`, `${val}%`];
                },
                dropShadow: {
                  enabled: false,
                },
              },
              legend: { show: false }, // Hide default legend
              plotOptions: {
                pie: {
                  customScale: 1, // Normal scale
                  expandOnClick: false, // Prevent slice expansion on click
                  dataLabels: {
                    offset: -30, // Moves labels on top of slices
                  },
                  donut: {
                    size: "100%", // Reduce center hole for better visibility
                  },
                },
              },
              states: {
                hover: {
                  // filter: {
                  //   type: "lighten", // Lighten effect on hover
                  //   value: 0.1,
                  // },
                  //  customScale: 0.95, // Moves the hovered slice backward
                },
              },
              grid: {
                // padding: { top: 5, bottom: 5 },
              },
            }}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default MonochromePieChart;
