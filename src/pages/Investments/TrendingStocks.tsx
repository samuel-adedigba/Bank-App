// TrendingStocks.tsx
import React, { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/Table/DataTable";

type Trending = {
  name: string;
  price: string;
  rate: string;
};
// const id = []
// const Number = (num: number )=>{
//     for(let i = 1; i<num; i++ ){
//       id.push( i)
//     }
// }
// Number(dummyData.length)
const columns: ColumnDef<Trending>[] = [
    // {
    //     accessorKey: "name",
    //     header: "SL No",
    //     cell: (props) => {
    //         const { name } = props.row.original
    //         const id = 0

    //         return <span className="text-base" >{name}</span>
    //     },
    //   },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => {
        const { name } = props.row.original
        return <span className="text-base" >{name}</span>
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (props) => {
        const { price } = props.row.original
        return <span className="text-base" >{price}</span>
    },
  },
  {
    accessorKey: "rate",
    header: "Return",
    cell: (props) => {
        const { rate } = props.row.original
        return <span className="text-base" > {rate}</span>
    },
  }, 
 
];

export default function TrendingStocks() {
  const [data, setData] = useState<Trending[]>([]);

  useEffect(() => {
        const dummyData: Trending[] = [
            { name: "Trivago", price: "$547", rate: "+5%", },
            { name: "Canon", price: "$879", rate: "+10%",  },
            { name: "Uber Food", price: "$876", rate: "-3%",  },
            { name: "Nokia", price: "$252", rate: "-5%", },
            { name: "Tiktok", price: "$254", rate: "-12%",  },
            { name: "Test 6", price: "#6", rate: "Transfer",  },
            { name: "Test 7", price: "#7", rate: "Service", },
            { name: "Test 8", price: "#8", rate: "Shopping",  },
            { name: "Test 9", price: "#9", rate: "Transfer",  },
            { name: "Test 10", price: "#10", rate: "Transfer",  },
            { name: "Test 11", price: "#11", rate: "Shopping",  },
          ];
      setData(dummyData);
  }, []);

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Trending Stock</h2>
      <div className="p-2 bg-white rounded-2xl shadow-md overflow-auto scrollbar-hide w-full min-w-[330px] ">
    <DataTable columns={columns} data={data} initialPageSize={5}  />
      </div> 
     
    </div>
  );
}
