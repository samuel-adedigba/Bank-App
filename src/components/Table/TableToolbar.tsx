// TableToolbar.tsx
import React from "react";
import { Table } from "@tanstack/react-table";
import ExportData from "./ExportData";

type TableToolbarProps<T> = {
  table: Table<T>;
  onSearch?: (query: string) => void;
};

const TableToolbar = <T,>({ table, onSearch }: TableToolbarProps<T>) => {
  return (
    <div className="flex flex-wrap items-center justify-between p-4">
      {onSearch && (
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 border rounded mr-4"
        />
      )}
      <div className="flex space-x-2">
        {table.getAllColumns().map((column) =>
          column.getCanHide() ? (
            <label key={column.id} className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={(e) => column.toggleVisibility(e.target.checked)}
              />
              <span>{column.columnDef.header as string}</span>
            </label>
          ) : null
        )}
      </div>
      <ExportData data={table.getRowModel().rows.map((row) => row.original)} />
    </div>
  );
};

export default TableToolbar;
