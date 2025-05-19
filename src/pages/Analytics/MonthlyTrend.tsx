// src/pages/Analytics/MonthlyTrend.tsx
import React from "react";
import Charts from "../../utilis/Charts";
import { COLORS } from "../../components/config/chartColor";
import { spendingAnalysisData } from "../../components/mock/data/usersAndAccounts";
import { useAppSelector } from "../../store/hook";
import type { SpendingAnalysis } from "../../types/SpendingAnalysis";

type TrendItem = {
  month: string;
  spent: number;
  income: number;
};

const MonthlyTrend: React.FC = () => {
  // 1. Select current user’s data
  const userId = useAppSelector((state) => state.auth.user?.id) ?? "";
  const analysis: SpendingAnalysis =
    spendingAnalysisData.find((d) => d.userId === userId) ??
    spendingAnalysisData[0]!;

  if (!analysis) {
    return (
      <div className="p-4 w-full text-center text-red-500">
        No trend data available.
      </div>
    );
  }

  // 2. Extract months, spent, and income
  const trend = analysis.monthlyTrend as TrendItem[];
  const months    = trend.map((t) => t.month);
  const spentData = trend.map((t) => t.spent);
  const incomeData= trend.map((t) => t.income);

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#343C6A]">
        Monthly Trend
      </h2>

      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6">
        <Charts
          type="line"
          series={[
            { name: "Spent",  data: spentData },
            { name: "Income", data: incomeData },
          ]}
          xAxis={months}
          customOptions={{
            chart: {
              width: "100%",
              height: 300,
              dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.5
              },
              zoom: {
                enabled: false
              },
            },

            // colors for each series
            colors: [COLORS[4], COLORS[3]],

            // smooth curves & markers :contentReference[oaicite:0]{index=0}
            stroke: {
              width: 3,
              curve: "smooth",
            },
            markers: {
              size: 4,
            },

            // legend at top-center, click toggles series :contentReference[oaicite:1]{index=1}
            legend: {
              show: true,
              position: "top",
              horizontalAlign: "center",
              onItemClick: {
                toggleDataSeries: true,
              },
            },

            // disable inline dataLabels for clarity
            dataLabels: {
              enabled: true,
            },

            // rotate x-axis labels to avoid overlap
            xaxis: {
                categories: [...months],
              labels: {
                rotate: -45,
                style: { fontSize: "12px" },
              },
              title: {
                text: 'Month'
              } 
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
            grid: {
                borderColor: '#e7e7e7',
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },

            // currency formatting in tooltip
            tooltip: {
                enabled: true,
                y: {
                  formatter: (val?: number) => {
                    if (val == null) return "";
                    return `₦${val.toLocaleString()}`;
                  },
                },
              },  

            // responsive tweaks for smaller screens
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

export default MonthlyTrend;
