import React from 'react'
import LineChartComponent from '../../components/charts/LineChartComponent';

const data = [
  { name: "Mon", value: 50 },
  { name: "Tue", value: 20 },
  { name: "Wed", value: 60 },
  { name: "Thu", value: 40 },
  { name: "Fri", value: 70 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 80 },
];

const LineChartDiagram = () => {
  return (
    <div>
      <LineChartComponent data={data} title={"This Week’s Income"} />
    </div>
  )
}

export default LineChartDiagram
