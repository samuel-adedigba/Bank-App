import React from "react";
import { Transaction, transactions } from "../../components/mock/data/transactions";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Table/DataTable";

const columns: ColumnDef<Transaction>[] = [
  {
    header: "Narration",
    accessorKey: "narration",
  },
  {
    header: "Beneficiary (Bank)",
    accessorKey: "beneficiaryName",
    cell: ({ row, getValue }: CellContext<Transaction, unknown>) => 
      `${getValue()} (${row.original.beneficiaryBank})`,
  },
  {
    header: "Date Debited",
    accessorKey: "dateDebited",
  },
  {
    header: "Sender Bank",
    accessorKey: "senderBank",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ getValue }: CellContext<Transaction, unknown>) =>
      `₦${(getValue() as number).toLocaleString()}`,
  },
  {
    header: "Old Balance",
    accessorKey: "oldBalance",
    cell: ({ getValue }: CellContext<Transaction, unknown>) =>
      `₦${(getValue() as number).toLocaleString()}`,
  },
  {
    header: "New Balance",
    accessorKey: "newBalance",
    cell: ({ getValue }: CellContext<Transaction, unknown>) =>
      `₦${(getValue() as number).toLocaleString()}`,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }: CellContext<Transaction, unknown>) => (
      <span
        className={`px-2 py-1 text-base font-bold  ${
          getValue() === "debit"
            ? " text-red-600"
            : " text-green-600"
        }`}
      >
        {(getValue() as string).toUpperCase()}
      </span>
    ),
  },
];

const RecentTransactions = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="overflow-x-auto w-full scrollbar-hide snap-x scroll-smooth">
          <DataTable columns={columns} data={transactions} />
        </div>
      </div>
    </>
  );
};


export default RecentTransactions;
