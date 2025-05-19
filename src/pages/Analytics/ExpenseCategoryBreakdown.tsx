import React from "react";
import Charts from "../../utilis/Charts";
import { COLORS } from "../../components/config/chartColor";
import { spendingAnalysisData } from "../../components/mock/data/usersAndAccounts";
import { useAppSelector } from "../../store/hook";

// Extend CategoryItem to include a budget for demo
// type CategoryItem = {
//   categoryName: string;
//   spent: number;
//   budget: number;     // new field for illustration
//   pctOfTotal: number;
// };

const ExpenseCategoryBreakdown = () => {
  const userId = useAppSelector((state) => state.auth.user?.id);
  const analysis =
    spendingAnalysisData.find((a) => a.userId === userId) ??
    spendingAnalysisData[0]!;

  // Prepare two series: Spent vs. Budget
  const labels = analysis.byCategory.map((c) => c.categoryName);
  const spentData = analysis.byCategory.map((c) => c.spent);
  // For demo, set budget 20% above spent
  const budgetData = analysis.byCategory.map((c) =>
    Math.round(c.spent * 1.2)
  );

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#343C6A]">
        Expense & Budget Breakdown
      </h2>
      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6">
        <Charts
          type="bar"
          series={[
            { name: "Spent", data: spentData },
            { name: "Budget", data: budgetData },
          ]}
          xAxis={labels}
          customOptions={{
            chart: {
              width: "100%",
              height: 200,
            },
            colors: [COLORS[0], COLORS[2]],

            // 1) Show legend atop, color-coded per series :contentReference[oaicite:0]{index=0}
            legend: {
              show: true,
              position: "top",
              horizontalAlign: "center",
              // markers: {
              //  width: 12,
              //  height: 12,
              //  radius: 2,
              // },
              // 2) Allow clicks to toggle each series :contentReference[oaicite:1]{index=1}
              onItemClick: {
                toggleDataSeries: true,
              },
            },

            plotOptions: {
              bar: {
                borderRadius: 8,
                borderRadiusApplication: "end",
                columnWidth: "50%",
              },
            },

            // dataLabels: {
            //   enabled: true,
            //   formatter: (val) => `₦${val.toLocaleString()}`,
            //   offsetY: -16,
            //   style: { fontSize: "14px", fontWeight: "bold",  colors: ["#000", "#000"], },
            //   background: {
            //     enabled: false,   
            //     foreColor: "#fff",
            //     padding: 6,
            //     borderRadius: 3,
            //     borderColor: COLORS[1],
            //     borderWidth: 1,
            //     opacity: 0.6,
            //   },
            // },
            tooltip: {
              enabled: true,
              y: {
                formatter: (val?: number) => {
                  if (val == null) return "";
                  return `₦${val.toLocaleString()}`;
                },
              },
            },


            responsive: [
              // 2XL screens (≥1536px)
              {
                breakpoint: 1536,
                options: {
                  chart: { height: 360 },
                  plotOptions: { bar: { columnWidth: "35%" } },
                  xaxis: { labels: { rotate: 0 } },
                },
              },
              // XL screens (≥1280px)
              {
                breakpoint: 1280,
                options: {
                  chart: { height: 320 },
                  plotOptions: { bar: { columnWidth: "38%" } },
                  xaxis: { labels: { rotate: 0 } },
                },
              },
              // LG screens (≥1024px)
              {
                breakpoint: 1024,
                options: {
                  chart: { height: 300 },
                  plotOptions: { bar: { columnWidth: "42%" } },
                  xaxis: { labels: { rotate: -15 } },
                },
              },
              // MD screens (≥768px)
              {
                breakpoint: 768,
                options: {
                  chart: { height: 260 },
                  plotOptions: { bar: { columnWidth: "50%" } },
                  xaxis: { labels: { rotate: -30 } },
                },
              },
              // SM screens (≥640px)
              {
                breakpoint: 640,
                options: {
                  chart: { height: 220 },
                  plotOptions: { bar: { columnWidth: "60%" } },
                  xaxis: { labels: { rotate: -45 } },
                },
              },
              // XS screens (<640px)
              // {
              //   breakpoint: 480,
              //   options: {
              //     chart: { height: 180 },
              //     plotOptions: { bar: { columnWidth: "70%" } },
              //     xaxis: { labels: { rotate: -90 } },
              //     dataLabels: {
              //       offsetY: 0,
              //       style: { fontSize: "10px", colors: ["#fff"] },
              //     },
              //   },
              // },
            ]            
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseCategoryBreakdown;
