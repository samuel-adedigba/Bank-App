import React from "react";
import Charts from "../../utilis/Charts";
import { data } from "../mock/data/chart";
import { COLORS } from "../config/chartColor";

type ChartLegendProps = {
  label: string;
  value?: number;
  color?: string;
};

const ChartLegend = ({ label, value, color }: ChartLegendProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <div>
        <h5 className="font-bold text-sm md:text-base">{value}</h5>
        <p className="text-xs md:text-sm">{label}</p>
      </div>
    </div>
  );
};

const BarChartComponent = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 ">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#343C6A]">
        Weekly Activity
      </h2>

      <div className="p-4 bg-white shadow-md rounded-2xl">
        {/* Legends - Now Responsive */}
        <div className="flex flex-wrap justify-end gap-4 mt-2">
          {data.barChart.series.map((item, index) => (
            <ChartLegend key={index} label={item.name} 
            color={COLORS[index]}
             />
          ))}
        </div>

        {/* Bar Chart */}
        <Charts
          type="bar"
          series={data.barChart.series}
          xAxis={data.barChart.categories}
          customOptions={{
            colors: data.barChart.series.map((_, index) => [COLORS[index]]),
            legend: { show: false },
            grid: { show: false },
            plotOptions: {
              bar: {
                borderRadius: 8,
                borderRadiusApplication: "end",
                columnWidth: "50%", // Default for larger screens
              },
            },
            responsive: [
              {
                breakpoint: 1024, // Tablets
                options: {
                  plotOptions: {
                    bar: { columnWidth: "60%" },
                  },
                },
              },
              {
                breakpoint: 768, // Smaller Tablets
                options: {
                  plotOptions: {
                    bar: { columnWidth: "80%" },
                  },
                },
              },
              {
                breakpoint: 480, // Mobile
                options: {
                  plotOptions: {
                    bar: { columnWidth: "90%" },
                  },
                },
              },
            ],
          }}
          height={300}
        />
      </div>
    </div>
  );
};

export default BarChartComponent;
