import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LinehartProps {
  data?: { name: string; value: number }[];
  title?: string;
}

const LineChartComponent: React.FC <LinehartProps>= ({data, title}) => {
  return (
    <>
        <div className="bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
      <h2 className="text-xl font-semibold mb-4"> {title} This Week’s Income</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 10 }}>
          {/* Background Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

          {/* X-Axis */}
          <XAxis dataKey="name" tick={{ fill: "#616161", fontSize: 12 }} />

          {/* Y-Axis */}
          <YAxis tick={{ fill: "#616161", fontSize: 12 }} domain={[0, 100]} />

          {/* Tooltip on Hover */}
          <Tooltip />

          {/* Smooth Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00C853"
            strokeWidth={3}
            dot={false} 
            animationDuration={800}
            strokeLinecap="round"
          />
        </LineChart>
      </ResponsiveContainer>
    </div> 
    </>

  );
};

export default LineChartComponent;
