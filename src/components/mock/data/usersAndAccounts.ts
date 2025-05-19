// src/components/mock/data/usersAndAccounts.ts

export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: 'user' | 'admin'
  }
  
  export interface BankAccount {
    id: string
    userId: string            // link to a User
    bankName: string
    accountNumber: string
  }
  
//   // Users
//   export const users: User[] = [
//     {
//       id: '4',
//       firstName: 'Alice',
//       lastName: 'Baby',
//       email: 'user1@bankapp.com',
//       password: '123456',
//       role: 'user',
//     },
//     {
//       id: '5',
//       firstName: 'Ben',
//       lastName: 'John',
//       email: 'user2@bankapp.com',
//       password: '123456',
//       role: 'user',
//     },
//   ]
  
//   // Each user has multiple bank accounts
  export const bankAccounts: BankAccount[] = [
    { id: 'acc_1', userId: '4', bankName: 'Zenith Bank', accountNumber: '0123456789' },
    { id: 'acc_2', userId: '4', bankName: 'GTBank',      accountNumber: '1234567890' },
    { id: 'acc_3', userId: '4', bankName: 'UBA',         accountNumber: '2345678901' },
  
    { id: 'acc_4', userId: '5', bankName: 'Access Bank', accountNumber: '3456789012' },
    { id: 'acc_5', userId: '5', bankName: 'First Bank',  accountNumber: '4567890123' },
    { id: 'acc_6', userId: '5', bankName: 'Fidelity',   accountNumber: '5678901234' },
  ]
  
  export const spendingAnalysisData = [
    {
        userId: "4",
        period: { "start": "2025-04-01", "end": "2025-04-30" },
        summary: {
          "totalSpent": 75000,
          "totalIncome": 250000,
          "netCashFlow": 175000
        },
        byAccount: [
          { "bankAccountId": "acc_1", "bankName": "Zenith Bank",   "spent": 30000, "income": 0 },
          { "bankAccountId": "acc_2", "bankName": "GTBank",        "spent": 20000, "income": 200000 },
          { "bankAccountId": "acc_3", "bankName": "UBA",           "spent": 25000, "income": 50000 }
        ],
        byCategory: [
          { "categoryId": "food",     "categoryName": "Food",      "spent": 15000, "pctOfTotal": 20 },
          { "categoryId": "rent",     "categoryName": "Rent",      "spent": 50000, "pctOfTotal": 66.67 },
          { "categoryId": "others",   "categoryName": "Other",     "spent": 10000, "pctOfTotal": 13.33 }
        ],
        monthlyTrend: [
          { "month": "Feb", "spent": 60000, "income": 200000 },
          { "month": "Mar", "spent": 70000, "income": 220000 },
          { "month": "Apr", "spent": 75000, "income": 250000 }
        ],
        topMerchants: [
          { "merchantId": "m001", "merchantName": "SuperMart",   "spent": 12000, "transactionCount": 5 },
          { "merchantId": "m002", "merchantName": "Power Co.",   "spent": 15000, "transactionCount": 1 },
          { "merchantId": "m003", "merchantName": "E-Shop",      "spent": 8000,  "transactionCount": 2 }
        ],
        anomalies: [
          { "transactionId": "txn_009", "date": "2025-04-17", "amount": 9500,  "merchantName": "Daniel Craig", "reason": "20% above usual" }
        ],
        budgets: [
          { "categoryId": "food",   "categoryName": "Food",      "budgetLimit": 12000, "spent": 15000, "pctUsed": 125 },
          { "categoryId": "rent",   "categoryName": "Rent",      "budgetLimit": 50000, "spent": 50000, "pctUsed": 100 },
          { "categoryId": "others", "categoryName": "Other",     "budgetLimit": 8000,  "spent": 10000, "pctUsed": 125 }
        ]
      },
      {
        userId: "5",
        period: { "start": "2025-04-01", "end": "2025-04-30" },
        summary: {
          "totalSpent": 43700,
          "totalIncome": 15000,
          "netCashFlow": -28700
        },
        byAccount: [
          {
            "bankAccountId": "acc_4",
            "bankName": "Access Bank",
            "spent": 8000,
            "income": 15000
          },
          {
            "bankAccountId": "acc_5",
            "bankName": "First Bank",
            "spent": 25000,
            "income": 0
          },
          {
            "bankAccountId": "acc_6",
            "bankName": "Fidelity",
            "spent": 10700,
            "income": 0
          }
        ],
        byCategory: [
          {
            "categoryId": "transfer",
            "categoryName": "Transfer",
            "spent": 9200,
            "pctOfTotal": 21.04
          },
          {
            "categoryId": "payment",
            "categoryName": "Payment",
            "spent": 26500,
            "pctOfTotal": 60.63
          },
          {
            "categoryId": "withdrawal",
            "categoryName": "Withdrawal",
            "spent": 8000,
            "pctOfTotal": 18.33
          }
        ],
        monthlyTrend: [
          {
            "month": "2025-04",
            "spent": 43700,
            "income": 15000
          }
        ],
        topMerchants: [
          {
            "merchantId": "m011",
            "merchantName": "Travel Co",
            "spent": 22000,
            "transactionCount": 1
          },
          {
            "merchantId": "m012",
            "merchantName": "Emma Stone",
            "spent": 6200,
            "transactionCount": 1
          },
          {
            "merchantId": "m006",
            "merchantName": "Jane Wilson",
            "spent": 4500,
            "transactionCount": 1
          }
        ],
        anomalies: [
          {
            "transactionId": "txn_011",
            "date": "2025-04-15",
            "amount": 22000,
            "merchantName": "Travel Co",
            "reason": "65% above average spend"
          }
        ],
        budgets: [
          {
            "categoryId": "transfer",
            "categoryName": "Transfer",
            "budgetLimit": 10000,
            "spent": 9200,
            "pctUsed": 92
          },
          {
            "categoryId": "payment",
            "categoryName": "Payment",
            "budgetLimit": 20000,
            "spent": 26500,
            "pctUsed": 132.5
          },
          {
            "categoryId": "withdrawal",
            "categoryName": "Withdrawal",
            "budgetLimit": 5000,
            "spent": 8000,
            "pctUsed": 160
          }
        ]
      }
      
  ]


// 3. Enable Financial Analytics
// With this structure, FinSight can perform detailed analytics, such as:

// Spending Analysis: Track spending patterns across different banks for each user.

// Income Tracking: Monitor income sources and amounts per bank account.

// Financial Recommendations: Provide tailored advice based on transaction history and bank usage.

// Budgeting Assistance: Help users set budgets per bank account or overall.

// Technology Stack
// Backend: Node.js/Express or Python/FastAPI, PostgreSQL with TimescaleDB for time-series, Kafka for event streaming.

// Analytics: dbt for transformations, Apache Flink or Spark Streaming for real-time, TensorFlow or PyTorch for ML recommendations.

// Frontend: React + D3/recharts for charts, Tailwind for styling, React Query/RTK Query for data fetching
// Visualization & UI Sketch
// Spending Analysis
// Overview Chart: A stacked bar chart showing monthly spend by category across all accounts, with filters for individual banks 
// Qlik
// .

// Trend Line: Visualization of spending trends over time, highlighting spikes and seasonal patterns 
// Coupler.io Blog
// .

// Top Merchants: A horizontal bar list of top spenders (e.g. “SuperMart: ₦12,000 last month”) 
// F9 Finance
// .

// <figure> <img src="https://via.placeholder.com/600x300?text=Spending+Dashboard+Mockup" alt="Spending analysis mockup"/> <figcaption>Mockup: Monthly spend by category with drill-down per bank account</figcaption> </figure>
// Income Tracking
// Income Sources: Pie chart or donut showing income split by source (salary, transfers, interest) per account 
// Coupler.io Blog
// .

// Cash Flow Summary: Net cash flow KPI cards (e.g. “Net +₦50,000 in April”) with sparkline mini-charts 
// Qlik
// .

// Financial Recommendations
// Alerts Panel: A list of AI-powered suggestions, e.g. “Move 20% of savings to a higher-interest account” or “Set a budget for Groceries—spend is 30% above average” 
// F9 Finance
// .

// Goal Progress: Visual trackers showing progress towards user-defined goals (e.g. emergency fund, trip savings) 
// Coupler.io Blog
// .

// Budgeting Assistance
// Budget Setup Wizard: Interactive UI to set monthly budgets per category and account.

// Usage Meter: Circular progress bars showing percent of budget used (e.g. 70% of ₦20,000 Groceries budget) 
// Coupler.io Blog
// .

// Forecast Projection: Predictive chart projecting end-of-month balance based on current spend rate 
// F9 Finance
// .

