// import { useState, useEffect, useMemo } from 'react'
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { dummyTransactions, Transaction } from '../components/mock/data/dummyTimelineTransactions'

// export function useTransactionsTimeline() {
//   const [search, setSearch] = useState('')

//   const query = useInfiniteQuery<Transaction[]>({
//     queryKey: ['transactions'],
//     initialPageParam: 0,
//     queryFn: async ({ pageParam }) => {
//       await new Promise((res) => setTimeout(res, 1000))
//       return pageParam === 0
//         ? dummyTransactions.initialData
//         : dummyTransactions.olderData('')
//     },
//     getNextPageParam: (_lastPage, allPages) => allPages.length,
//     staleTime: 1000 * 60 * 10, // 10 minutes
//     cacheTime: 1000 * 60 * 30,
//   })

//   const allTransactions = useMemo(
//     () =>
//       query.data?.pages
//         .flat()
//         .filter((txn) =>
//           search ? txn.title.toLowerCase().includes(search.toLowerCase()) : true
//         ) ?? [],
//     [query.data, search]
//   )

//   const groupedByDate = useMemo(() => {
//     const groups: Record<string, Transaction[]> = {}
//     for (const txn of allTransactions) {
//       const date = new Date(txn.date).toDateString()
//       if (!groups[date]) groups[date] = []
//       groups[date].push(txn)
//     }
//     return groups
//   }, [allTransactions])

//   const dates = Object.keys(groupedByDate)

//   return {
//     transactionsByDate: groupedByDate,
//     dates,
//     hasNextPage: query.hasNextPage,
//     fetchNextPage: query.fetchNextPage,
//     isFetchingNextPage: query.isFetchingNextPage,
//     isLoading: query.isLoading,
//     search,
//     setSearch,
//   }
// }
