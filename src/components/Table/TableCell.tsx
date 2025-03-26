// TableCell.tsx
import React from "react";
import { flexRender, Cell } from "@tanstack/react-table";

type TableCellProps<T> = {
  cell: Cell<T, unknown>;
};

const TableCell = <T,>({ cell }: TableCellProps<T>) => {
  return (
    <td className="p-2 border-b">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default TableCell;
