// // hooks/useMonthlyTotals.ts
// import { useMemo } from 'react'
// import { dummyTransactions } from '../components/mock/data/dummyTimelineTransactions'


// export function useMonthlyTotals() {
//   return useMemo(() => {
//     let inSum = 0, outSum = 0
//     dummyTransactions.initialData.forEach(txn => {
//       const num = Number(txn.amount.replace(/[₦,]/g, ''))
//       if (num >= 0) inSum += num
//       else outSum += -num
//     })
//     return {
//       in: inSum.toLocaleString('en-NG',{style:'currency',currency:'NGN'}),
//       out: outSum.toLocaleString('en-NG',{style:'currency',currency:'NGN'}),
//     }
//   }, [])
// }
