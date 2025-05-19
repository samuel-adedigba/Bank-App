/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Card from "./Card";

interface ListProps {
  title: string;
  data: any[];
  keyMap: { [key: string]: string };
  className?: string;
  renderItem: (item: any) => React.ReactNode;
}

const List: React.FC<ListProps> = ({ title, data, className, renderItem }) => {
  return (
    <div className={`p-2 ${className}`}>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <div className="grid w-f py-2 rounded-3xl bg-white shadow-md">
        {data.map((item, index) => (
          <Card key={index} className="rounded-lg">
            {renderItem(item)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default List;
