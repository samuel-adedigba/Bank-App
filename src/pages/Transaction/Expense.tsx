import React from "react";
import Charts from "../../utilis/Charts";
import { COLORS } from "../../components/config/chartColor";
import { data } from "../../components/mock/data/chart";

const Expense = () => {
  return (
    <div className="p-4 w-full ">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#343C6A]">
        My Expense
      </h2>

      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6">
        <Charts
          type="bar"
          series={data.expense.series}
          xAxis={data.expense.categories}
          customOptions={{
            colors: [COLORS[2]],
            legend: { show: false },
            yaxis: { show: false },
            grid: { show: false },
            plotOptions: {
              bar: {
                borderRadius: 8,
                borderRadiusApplication: "end",
                columnWidth: "50%", // Adjusts based on screen size
              },
            },
            responsive: [
              {
                breakpoint: 768, // Tablet
                options: {
                  plotOptions: {
                    bar: { columnWidth: "60%" },
                  },
                },
              },
              {
                breakpoint: 480, // Mobile
                options: {
                  plotOptions: {
                    bar: { columnWidth: "70%" },
                  },
                },
              },
            ],
          }}
          height="150"
        />
      </div>
    </div>
  );
};

export default Expense;
