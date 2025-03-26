import React from "react";
import Charts from "../../utilis/Charts";
import { data } from "../../components/mock/data/chart";
import { COLORS } from "../../components/config/chartColor";

type ChartLegendProps = {
  label: string;
  value?: number;
  color?: string;
};

const ChartLegend = ({ label, value, color }: ChartLegendProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div>
        <h5 className="font-bold">{value?.toLocaleString()}</h5>
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};

const CreditOverview = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Debit & Credit Overview</h2>
      <div className="p-4 bg-white shadow-md rounded-2xl max-w-6xl min-w-fit w-full  ">
        <p className="text-left mx-10 text-gray-500 mb-4">
          <span className="font-semibold text-lg">$7,560</span> Debited &{" "}
          <span className="font-semibold text-lg">$5,420</span> Credited in this Week
        </p>

        {/* Legend */}
        <div className="flex justify-center flex-wrap gap-6 mt-2">
          {data.barChart.series.map((item, index) => (
            <ChartLegend
              key={index}
              label={item.name}
              color={COLORS[index]}
            />
          ))}
        </div>

        {/* Chart */}
        <div className="w-full overflow-x-auto min-w-[300px]">
          <Charts
            type="bar"
            series={data.barChart.series}
            xAxis={data.barChart.categories}
            customOptions={{
              colors: [COLORS[3], COLORS[1]],
              legend: { show: false },
              grid: { show: false },
              responsive: [
                {
                  breakpoint: 768,
                  options: {
                    plotOptions: {
                      bar: { columnWidth: "70%" }, // Adjust width on smaller screens
                    },
                  },
                },
              ],
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  borderRadiusApplication: "end",
                  columnWidth: "40%",
                },
              },
            }}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditOverview;
