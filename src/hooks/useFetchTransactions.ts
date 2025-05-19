// // src/hooks/useFetchTransactions.ts
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { dummyTransactions } from '../components/mock/data/dummyTransactions'


// /**
//  * Paginated fetch of dummy transactions.
//  */
// export function useFetchTransactions() {
//   return useInfiniteQuery(
//     ['transactions'],                            // ✅ queryKey must be an array
//     async ({ pageParam = '' }) => {              // your pageParam is the cursor
//       // simulate network delay if you like:
//       await new Promise(res => setTimeout(res, 500))

//       return pageParam === ''
//         ? dummyTransactions.initialData
//         : dummyTransactions.olderData(pageParam)
//     },
//     {
//       initialPageParam: '',
//       getNextPageParam: (_lastPage, allPages) =>
//         allPages.length > 0 ? allPages.length.toString() : undefined,
//       staleTime: 1000 * 60 * 10, // 10m
//     }
//   )
// }
