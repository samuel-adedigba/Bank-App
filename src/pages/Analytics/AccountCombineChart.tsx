// src/pages/Analytics/AccountCombineChart.tsx
import React from "react";
import Charts from "../../utilis/Charts";
import { COLORS } from "../../components/config/chartColor";
import { spendingAnalysisData } from "../../components/mock/data/usersAndAccounts";
import { useAppSelector } from "../../store/hook";
import type { SpendingAnalysis } from "../../types/SpendingAnalysis";

const AccountCombineChart: React.FC = () => {
  // 1. Grab current user’s analysis
  const userId = useAppSelector((s) => s.auth.user?.id) ?? "";
  const analysis: SpendingAnalysis =
    spendingAnalysisData.find((d) => d.userId === userId) ??
    spendingAnalysisData[0]!;

  if (!analysis) {
    return (
      <div className="p-4 w-full text-center text-red-500">
        No account data available.
      </div>
    );
  }

  // 2. Extract labels and series data
  const labels = analysis.byAccount.map((a) => a.bankName);
  const spentData  = analysis.byAccount.map((a) => a.spent);
  const incomeData = analysis.byAccount.map((a) => a.income);

  return (
    <div className="p-2 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#343C6A]">
        Account Breakdown (Spent vs. Income)
      </h2>
      <div className="bg-white shadow-md rounded-2xl p-2">
        <Charts
          // 3. Global type 'line' lets series.type override per series :contentReference[oaicite:0]{index=0}
          type="line"
          series={[
            {
              name: "Spent",
              type: "column",    // columns for spent :contentReference[oaicite:1]{index=1}
              data: spentData,
            },
            {
              name: "Income",
              type: "line",      // line for income :contentReference[oaicite:2]{index=2}
              data: incomeData,
            },
          ]}
          xAxis={labels}        // bank names on x-axis :contentReference[oaicite:3]{index=3}
          customOptions={{
            chart: {
              width: "100%",
              height: 300,
              stacked: false,     // separate axes :contentReference[oaicite:4]{index=4}
              zoom: {
                enabled: false
              },
            },

            // 4. Colors match series order :contentReference[oaicite:5]{index=5}
            colors: [COLORS[0], COLORS[4]],

            // 5. Smooth line & sharp columns :contentReference[oaicite:6]{index=6}
            stroke: {
              width: [0, 4],
              curve: "smooth",
            },
            // markers: {
            //     size: 4,
            //   },
            plotOptions: {
              bar: {
                columnWidth: "40%",
                borderRadius: 6,
              },
            },

            // 6. Legend atop, toggles series visibility :contentReference[oaicite:7]{index=7}
            legend: {
              show: true,
              position: "top",
              horizontalAlign: "center",
              onItemClick: { toggleDataSeries: true },
            },

            // 7. DataLabels off for clarity on mixed views :contentReference[oaicite:8]{index=8}
            dataLabels: { enabled: false },

            // 8. Rotate x labels to prevent overlap :contentReference[oaicite:9]{index=9}
            xaxis: {
                categories: [...labels],
              labels: {
                rotate: -45,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
                title: {
                  text: 'Amount (₦)',
                  style: { fontSize: "12px" },
                },
                labels: {
                  formatter: (val?: number) => {
                    if (val == null) return "";
                    return `₦${val.toLocaleString()}`;
                  },
                },
              },

            // 9. Currency formatting on hover :contentReference[oaicite:10]{index=10}
            // tooltip: {
            //   y: {
            //     formatter: (val?: number) => (val == null ? "" : `₦${val.toLocaleString()}`),
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


            // 10. Responsive tweaks :contentReference[oaicite:11]{index=11}
            // responsive: [
            //   {
            //     breakpoint: 768,
            //     options: {
            //       chart: { height: 250 },
            //       plotOptions: { bar: { columnWidth: "50%" } },
            //       xaxis: { labels: { rotate: -30 } },
            //     },
            //   },
            //   {
            //     breakpoint: 480,
            //     options: {
            //       chart: { height: 200 },
            //       plotOptions: { bar: { columnWidth: "60%" } },
            //       xaxis: { labels: { rotate: -90 } },
            //     },
            //   },
            // ],
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
              {
                breakpoint: 480,
                options: {
                  chart: { height: 180 },
                  plotOptions: { bar: { columnWidth: "70%" } },
                  xaxis: { labels: { rotate: -90 } },
                  dataLabels: {
                    offsetY: 0,
                    style: { fontSize: "10px", colors: ["#fff"] },
                  },
                },
              },
            ]
            
          }}
        />
      </div>
    </div>
  );
};

export default AccountCombineChart;
