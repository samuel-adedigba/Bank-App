// TablePagination.tsx
import React from "react";
import { Table } from "@tanstack/react-table";

type TablePaginationProps<T> = {
  table: Table<T>;
};

const TablePagination = <T,>({ table }: TablePaginationProps<T>) => {
  const { pageIndex } = table.getState().pagination;
  const totalPages = table.getPageCount();

  return (
    <div className="flex flex-wrap items-center gap-2 justify-center mt-4">
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {pageIndex + 1} of {totalPages}
      </span>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
