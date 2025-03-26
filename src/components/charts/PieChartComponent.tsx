import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface PieChartProps {
  data?: { name: string; value: number; color: string }[];
  title?: string;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, title }) => {
  const total = data?.reduce((sum, item) => sum + item?.value, 0);

  return (
    <div className="relative flex flex-col items-center p-6 rounded-xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold ">{title}</h2>

      {/* Pie Chart Container */}
      <div className="relative w-[400px] h-[250px] flex items-center justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={85} // Makes it a donut chart
            outerRadius={100}
            dataKey="value"
            paddingAngle={5}
            cornerRadius={8} // More rounded edges
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Total Cards in Center */}
        <div className="absolute text-center">
          <p className="text-gray-500 text-sm">Total Cards</p>
          <p className="text-3xl font-medium">{total?.toLocaleString()}</p>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {data?.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-gray-600 text-sm">{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
