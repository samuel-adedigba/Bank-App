// ExportData.tsx
import React from "react";
import { utils, writeFile } from "xlsx";

type ExportDataProps<T> = { data: T[] };

const ExportData = <T,>({ data }: ExportDataProps<T>) => {
  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, "data.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className="bg-blue-500 text-white px-3 py-2 rounded"
    >
      Export
    </button>
  );
};

export default ExportData;
