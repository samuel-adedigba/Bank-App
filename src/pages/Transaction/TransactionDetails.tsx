// import React from 'react'
// import { Transaction,  } from "../../components/mock/data/transactions";
// import { CellContext, ColumnDef } from "@tanstack/react-table";
// import DataTable from "../../components/Table/DataTable";
// import { TransactionDetail, transactionDetails } from '../../components/mock/data/transactionDetails';
// import { useParams } from 'react-router-dom';

// const columns: ColumnDef<TransactionDetail>[] = [
//   {
//     header: "Narration",
//     accessorKey: "narration",
//   },
//   {
//     header: "Beneficiary (Bank)",
//     accessorKey: "beneficiaryName",
//     cell: ({ row, getValue }: CellContext<TransactionDetail, unknown>) => 
//       `${getValue()} (${row.original.beneficiaryBank})`,
//   },
//   {
//     header: "Date Debited",
//     accessorKey: "dateDebited",
//   },
//   {
//     header: "Sender Bank",
//     accessorKey: "senderBank",
//   },
//   {
//     header: "Amount",
//     accessorKey: "amount",
//     cell: ({ getValue }: CellContext<Transaction, unknown>) =>
//       `₦${(getValue() as number).toLocaleString()}`,
//   },
//   {
//     header: "Old Balance",
//     accessorKey: "oldBalance",
//     cell: ({ getValue }: CellContext<Transaction, unknown>) =>
//       `₦${(getValue() as number).toLocaleString()}`,
//   },
//   {
//     header: "New Balance",
//     accessorKey: "newBalance",
//     cell: ({ getValue }: CellContext<Transaction, unknown>) =>
//       `₦${(getValue() as number).toLocaleString()}`,
//   },
//   {
//     header: "Status",
//     accessorKey: "status",
//     cell: ({ getValue }: CellContext<Transaction, unknown>) => (
//       <span
//         className={`px-2 py-1 text-base font-bold  ${
//           getValue() === "debit"
//             ? " text-red-600"
//             : " text-green-600"
//         }`}
//       >
//         {(getValue() as string).toUpperCase()}
//       </span>
//     ),
//   },
// ];

// const TransactionDetails = () => {
//     const { id } = useParams<{ id: string }>()
//     const detail = transactionDetails[id!]

//     if (!detail) return <p className="p-4">Transaction not found.</p>

//   return (
//     <>
//       <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
//       <div className="bg-white p-4 rounded-xl shadow-md">
//       <div className="overflow-x-auto w-full scrollbar-hide snap-x scroll-smooth">
//           <DataTable columns={columns} data={detail} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionDetails
