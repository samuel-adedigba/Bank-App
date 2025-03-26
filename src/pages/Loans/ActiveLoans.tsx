import React, { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Table/DataTable";

export interface TableData {
  slNo?: string; // Make slNo optional since it will be calculated dynamically
  loanMoney: string;
  leftToRepay: string;
  duration: string;
  interestRate: string;
  installment: string;
}

export const loanData: TableData[] = [
  {
    loanMoney: "$100,000",
    leftToRepay: "$40,500",
    duration: "8 Months",
    interestRate: "12%",
    installment: "$2,000 / month",
  },
  {
    loanMoney: "$500,000",
    leftToRepay: "$250,000",
    duration: "36 Months",
    interestRate: "10%",
    installment: "$8,000 / month",
  },
  {
    loanMoney: "$900,000",
    leftToRepay: "$40,500",
    duration: "12 Months",
    interestRate: "12%",
    installment: "$5,000 / month",
  },
  {
    loanMoney: "$50,000",
    leftToRepay: "$40,500",
    duration: "25 Months",
    interestRate: "5%",
    installment: "$2,000 / month",
  },
  {
    loanMoney: "$50,000",
    leftToRepay: "$40,500",
    duration: "5 Months",
    interestRate: "16%",
    installment: "$10,000 / month",
  },
  {
    loanMoney: "$80,000",
    leftToRepay: "$25,500",
    duration: "14 Months",
    interestRate: "8%",
    installment: "$2,000 / month",
  },
  {
    loanMoney: "$12,000",
    leftToRepay: "$5,500",
    duration: "9 Months",
    interestRate: "13%",
    installment: "$500 / month",
  },
  {
    loanMoney: "$160,000",
    leftToRepay: "$100,800",
    duration: "3 Months",
    interestRate: "12%",
    installment: "$900 / month",
  },
  {
    loanMoney: "$1,250,000",
    leftToRepay: "$750,000",
    duration: "",
    interestRate: "",
    installment: "$50,000 / month",
  },
];

const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "slNo",
    header: "SL No",
    cell: (props) => {
      // Calculate SL No dynamically based on the row index
      const rowIndex = props.row.index + 1; // Add 1 to start from 1 instead of 0
      return <span className="text-base">{`${rowIndex}.`}</span>;
    },
  },
  {
    accessorKey: "loanMoney",
    header: "Loan Money",
    cell: (props) => {
      const { loanMoney } = props.row.original;
      return <span className="text-base">{loanMoney}</span>;
    },
  },
  {
    accessorKey: "leftToRepay",
    header: "Left to Repay",
    cell: (props) => {
      const { leftToRepay } = props.row.original;
      return <span className="text-base">{leftToRepay}</span>;
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: (props) => {
      const { duration } = props.row.original;
      return <span className="text-base">{duration}</span>;
    },
  },
  {
    accessorKey: "interestRate",
    header: "Interest Rate",
    cell: (props) => {
      const { interestRate } = props.row.original;
      return <span className="text-base">{interestRate}</span>;
    },
  },
  {
    accessorKey: "installment",
    header: "Installment",
    cell: (props) => {
      const { installment } = props.row.original;
      return <span className="text-base">{installment}</span>;
    },
  },
  {
    accessorKey: "repay",
    header: "Repay",
    cell: () => {
      return (
        <button className="text-[#123288] text-base font-medium px-4 py-1 rounded-2xl border border-[#123288] hover:border-[#1814F3] hover:text-[#1814F3]">
          Repay
        </button>
      );
    },
  },
];

export default function ActiveLoans() {
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    // Set the loanData as the table data
    setData(loanData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Active Loans Overview</h2>
      <div className="p-4 bg-white rounded-2xl shadow-md overflow-auto scrollbar-hide">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}