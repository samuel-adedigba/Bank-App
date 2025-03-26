// RecentTransactions.tsx
import React, { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Table/DataTable";

type Transaction = {
  description: string;
  transactionId: string;
  type: string;
  card: string;
  date: string;
  amount: number;
  receipt: string;
};

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "description",
    header: "Description",
    cell: (props) => {
        const { description } = props.row.original
        return <span className="text-base" >{description}</span>
    },
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
    cell: (props) => {
        const { transactionId } = props.row.original
        return <span className="text-base" >{transactionId}</span>
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (props) => {
        const { type } = props.row.original
        return <span className="text-base" >{type}</span>
    },
  },
  {
    accessorKey: "card",
    header: "Card",
    cell: (props) => {
        const { card } = props.row.original
        return <span className="text-base" >{card}</span>
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => {
        const { date } = props.row.original
        return <span className="text-base" >{date}</span>
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const value = row.original.amount;
      // Negative amounts in red, positive in green
      const color = value < 0 ? "text-red-500 text-base" : "text-green-600 text-base";
      return <span className={color}>{value < 0 ? `-$${Math.abs(value)}` : `+$${value}`}</span>;
    },
  },
  {
    accessorKey: "receipt",
    header: "Receipt",
    cell: ({ row }) => {
      return (
        <button className=" text-[#123288]  text-base font-medium px-4 py-1 rounded-2xl border border-[#123288]  hover:border-[#1814F3] hover:text-[#1814F3]">
          Download
        </button>
      );
    },
  },
];

export default function RecentTransactions() {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
        const dummyData: Transaction[] = [
            { description: "Spotify Subscription", transactionId: "#12548796", type: "Shopping", card: "1234 ****", date: "28 Jan, 12.30 AM", amount: -2500, receipt: "some-link" },
            { description: "Freepik Sales", transactionId: "#12548796", type: "Transfer", card: "1234 ****", date: "25 Jan, 10.40 PM", amount: 750, receipt: "some-link" },
            { description: "Mobile Service", transactionId: "#12548796", type: "Service", card: "1234 ****", date: "20 Jan, 10.40 PM", amount: -150, receipt: "some-link" },
            { description: "Wilson", transactionId: "#12548796", type: "Transfer", card: "1234 ****", date: "15 Jan, 03.29 PM", amount: -100, receipt: "some-link" },
            { description: "Emilly", transactionId: "#12548796", type: "Transfer", card: "1234 ****", date: "14 Jan, 10.40 AM", amount: 840, receipt: "some-link" },
            { description: "Test 6", transactionId: "#6", type: "Transfer", card: "1234 ****", date: "13 Jan, 10.40 AM", amount: 500, receipt: "some-link" },
            { description: "Test 7", transactionId: "#7", type: "Service", card: "1234 ****", date: "12 Jan, 10.40 AM", amount: -200, receipt: "some-link" },
            { description: "Test 8", transactionId: "#8", type: "Shopping", card: "1234 ****", date: "11 Jan, 10.40 AM", amount: -100, receipt: "some-link" },
            { description: "Test 9", transactionId: "#9", type: "Transfer", card: "1234 ****", date: "10 Jan, 10.40 AM", amount: 300, receipt: "some-link" },
            { description: "Test 10", transactionId: "#10", type: "Transfer", card: "1234 ****", date: "09 Jan, 10.40 AM", amount: 400, receipt: "some-link" },
            { description: "Test 11", transactionId: "#11", type: "Shopping", card: "1234 ****", date: "08 Jan, 10.40 AM", amount: -150, receipt: "some-link" },
          ];
      setData(dummyData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="p-4 bg-white rounded-2xl shadow-md overflow-x-auto overflow-y-auto  scrollbar-hide w-full">
      <div className="min-w-full">
      <DataTable columns={columns} data={data} />
    </div>

      </div> 
     
    </div>
  );
}
