import React from "react";

type SkeletonRowProps = {
  columns: number;
};

const SkeletonRow: React.FC<SkeletonRowProps> = ({ columns }) => {
  const cells = Array.from({ length: columns }, (_, index) => index);
  return (
    <tr>
      {cells.map((cell) => (
        <td key={cell} className="p-2 border-b">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </td>
      ))}
    </tr>
  );
};

export default SkeletonRow;
