import React from 'react'
import PieChartComponent from '../../components/charts/PieChartComponent'

const cardData = [
    { name: "Active", value: 1800, color: "#00984C" },
    { name: "Expired", value: 400, color: "#FFBA24" },
    { name: "Inactive", value: 100, color: "#014DAF" },
    { name: "Blocked", value: 80, color: "#8020E7" },
    { name: "Lost", value: 70, color: "#FF4457" },
  ];

const PieChartDiagram = () => {
  return (
    <div className="flex items-center justify-end bg-white p-6 rounded-2xl shadow-md shadow-slate-400">
    <PieChartComponent data={cardData} title="Card Status Distribution" />
  </div>  
  )
}

export default PieChartDiagram
