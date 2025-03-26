export const data = {
  barChart: {
    series: [
      {
        name: "Deposit",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Withdraw",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  },

  pieChart: {
    series: [30, 15, 35, 20],
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
  },
  expensePieChart: {
    series: [25, 30, 20, 25], // Adjusted for proper segment sizing
    labels: ["DBL Bank", "ABM Bank", "BRC Bank", "MCP Bank"],
  },

  expense: {
    series: [
      {
        name: "Expense",
        data: [54, 65, 77, 66, 81, 65],
      },
    ],
    categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  },
  
  yearlyInvestment: {
    investmentSeries : [
    {
      name: "Investment",
      data: [5000, 22000, 17000, 35000, 14000, 23000], // Dummy data
    },
  ],
  
  investmentCategories : ["2016", "2017", "2018", "2019", "2020", "2021"],
  },
  
  balanceHistory : {
    series : [
     {
       name: "Balance",
       data: [400, 500, 300, 700, 600, 800, 900], 
     },
   ],
  }


};
