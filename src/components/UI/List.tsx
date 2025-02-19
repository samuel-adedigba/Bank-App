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
    <div className={`p-4 ${className}`}>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <div className="grid w-fit py-2 rounded-3xl bg-white shadow-md">
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
