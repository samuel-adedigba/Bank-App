// // src/data/dummyTransactions.ts
// export interface Transaction {
//     id: string
//     title: string
//     date: string
//     amount: string
//     status: 'pending' | 'completed' | 'failed'
//   }
  
//   const NOW = new Date()
  
//   export const generateTransactions = (count: number, daysOffset: number): Transaction[] => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `txn_${NOW.getTime()}_${i}`,
//       title: `Transaction ${i + 1}`,
//       date: new Date(
//         NOW.getFullYear(),
//         NOW.getMonth(),
//         NOW.getDate() - daysOffset,
//         NOW.getHours(),
//         NOW.getMinutes() - i
//       ).toISOString(),
//       amount: `₦${Math.floor(Math.random() * 10000) + 1000}`,
//       status: ['pending', 'completed', 'failed'][Math.floor(Math.random() * 3)] as const,
//     }))
//   }
  
//   export const dummyTimelineTransactions = {
//     initialData: generateTransactions(20, 0),
//     olderData: (cursor: string) => generateTransactions(10, 7),
//     newerData: (cursor: string) => generateTransactions(5, -1),
//   }