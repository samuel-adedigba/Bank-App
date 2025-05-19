// // // TimelineTransaction.tsx
// // import { Link } from 'react-router-dom'
// // import { FaMoneyBillWave, FaArrowRight } from 'react-icons/fa'
// // import Timeline from '../../components/UI/Timeline'
// // import { dummyTransactions, Transaction } from '../../components/mock/data/dummyTransactions'
// // import { useState } from 'react'

// // const TimelineTransaction = () => {
// //   const [transactions, setTransactions] = useState<Transaction[]>(dummyTransactions.initialData)

// //   const fetchNewer = async (cursor: string) => {
// //     try {
// //       // Simulate network delay
// //       await new Promise(resolve => setTimeout(resolve, 1000))
// //       return dummyTransactions.newerData(cursor)
// //     } catch (error) {
// //       console.error('Error fetching newer transactions', error)
// //       return []
// //     }
// //   }

// //   const fetchOlder = async (cursor: string) => {
// //     try {
// //       // Simulate network delay
// //       await new Promise(resolve => setTimeout(resolve, 1000))
// //       return dummyTransactions.olderData(cursor)
// //     } catch (error) {
// //       console.error('Error fetching older transactions', error)
// //       return []
// //     }
// //   }

// //   const addNewTransaction = () => {
// //     const newTx = dummyTransactions.newerData(new Date().toISOString())[0]
// //     setTransactions(prev => [newTx, ...prev])
// //   }

// //   return (
// //     <div className="w-full ">
// //       <div className="bg-whit rounded-2xl shadow-l p-">
// //         <div className="flex flex-col md:flex-row justify-between mb-4">
// //           <h3 className="font-semibold text-gray-900 text-xl">Recent Transactions</h3>
// //           {/* <div className="flex items-center gap-3 mt-3 md:mt-0">
// //             <button
// //               onClick={addNewTransaction}
// //               className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
// //             >
// //               Simulate Transaction
// //             </button>
// //             <Link 
// //               to="/timeline-transaction" 
// //               className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium gap-1"
// //             >
// //               See all
// //               <FaArrowRight className="mt-0.5" size={14} />
// //             </Link>
// //           </div> */}
// //         </div>

// //         <Timeline<Transaction>
// //           queryKey={['transactions']}
// //           fetchNewer={fetchNewer}
// //           fetchOlder={fetchOlder}
// //           getItemDate={(item) => new Date(item.date)}
// //           estimateSize={80}
// //           renderItem={(item) => (
// //             <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border-b last:border-0">
// //               <div className="flex items-center flex-1 min-w-0">
// //                 <div className="bg-blue-100 p-3 rounded-full mr-4">
// //                   <FaMoneyBillWave className="text-blue-600" size={18} />
// //                 </div>
// //                 <div className="min-w-0">
// //                   <p className="text-base font-semibold text-gray-900 truncate">{item.title}</p>
// //                   <p className="text-xs text-gray-500">
// //                     {new Date(item.date).toLocaleDateString('en-US', {
// //                       weekday: 'short',
// //                       month: 'short',
// //                       day: 'numeric',
// //                       hour: '2-digit',
// //                       minute: '2-digit'
// //                     })}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="text-right ml-4">
// //                 <p
// //                   className={`text-lg font-semibold ${
// //                     item.status === 'failed'
// //                       ? 'text-red-600'
// //                       : item.status === 'pending'
// //                       ? 'text-yellow-600'
// //                       : 'text-gray-900'
// //                   }`}
// //                 >
// //                   {item.amount}
// //                 </p>
// //                 <p
// //                   className={`text-xs capitalize ${
// //                     item.status === 'failed'
// //                       ? 'text-red-500'
// //                       : item.status === 'pending'
// //                       ? 'text-yellow-500'
// //                       : 'text-gray-500'
// //                   }`}
// //                 >
// //                   {item.status}
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default TimelineTransaction

// // TimelineTransaction.tsx
// // import { useState, useMemo } from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import { FaMoneyBillWave, FaArrowLeft, FaArrowRight, FaDownload } from 'react-icons/fa'
// // import Timeline from '../../components/UI/Timeline'
// // import { dummyTransactions, Transaction } from '../../components/mock/data/dummyTransactions'

// // export default function TimelineTransaction() {
// //   const navigate = useNavigate()

// //   // --- Filters & state ---
// //   const [categoryFilter, setCategoryFilter] = useState<'All' | 'Income' | 'Expense'>('All')
// //   const [statusFilter, setStatusFilter] = useState<'All' | 'pending' | 'completed' | 'failed'>('All')

// //   // --- Raw data state (initial + paginated handled in Timeline) ---
// //   // We’ll pass fetchNewer/fetchOlder into Timeline just like before:
// //   const fetchNewer = async (cursor: string) => {
// //     await new Promise(r => setTimeout(r, 800))
// //     return dummyTransactions.newerData(cursor)
// //   }
// //   const fetchOlder = async (cursor: string) => {
// //     await new Promise(r => setTimeout(r, 800))
// //     return dummyTransactions.olderData(cursor)
// //   }

// //   // --- Compute this month’s totals from the “initial” load: ---
// //   const thisMonth = useMemo(() => {
// //     const now = new Date()
// //     return `${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`
// //   }, [])

// //   const monthlyTotals = useMemo(() => {
// //     let inSum = 0, outSum = 0
// //     dummyTransactions.initialData.forEach(txn => {
// //       const amt = Number(txn.amount.replace(/[₦,]/g, ''))
// //       if (amt >= 0) inSum += amt
// //       else outSum += -amt
// //     })
// //     return {
// //       in: inSum.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }),
// //       out: outSum.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }),      
// //     }
// //   }, [])

// //   return (
// //     <div className="flex flex-col h-screen bg-gray-50">
// //       {/* Top bar */}
// //       <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
// //         <button onClick={() => navigate(-1)}>
// //           <FaArrowLeft size={20} className="text-gray-700" />
// //         </button>
// //         <h1 className="text-lg font-semibold">Transactions</h1>
// //         <button onClick={() => console.log('Download CSV')} className="text-green-500">
// //           <FaDownload size={18} />
// //         </button>
// //       </div>

// //       {/* Filters */}
// //       <div className="flex px-4 py-2 space-x-2 bg-white">
// //         <select
// //           value={categoryFilter}
// //           onChange={e => setCategoryFilter(e.target.value as any)}
// //           className="flex-1 border rounded p-2 bg-white"
// //         >
// //           <option>All Categories</option>
// //           <option>Income</option>
// //           <option>Expense</option>
// //         </select>
// //         <select
// //           value={statusFilter}
// //           onChange={e => setStatusFilter(e.target.value as any)}
// //           className="flex-1 border rounded p-2 bg-white"
// //         >
// //           <option>All Status</option>
// //           <option value="pending">Pending</option>
// //           <option value="completed">Successful</option>
// //           <option value="failed">Failed</option>
// //         </select>
// //       </div>

// //       {/* Monthly summary */}
// //       <div className="px-4 py-3 bg-white mb-1">
// //         <div className="flex justify-between items-center">
// //           <h2 className="text-base font-medium">{thisMonth}</h2>
// //           <FaArrowRight className="text-gray-400 transform rotate-90" />
// //         </div>
// //         <div className="flex text-sm text-gray-600 mt-1 space-x-4">
// //           <span>In: <span className="font-semibold text-green-600">{monthlyTotals.in}</span></span>
// //           <span>Out: <span className="font-semibold text-red-600">{monthlyTotals.out}</span></span>
// //         </div>
// //       </div>

// //       {/* Timeline list */}
// //       <div className="flex-1 overflow-y-auto">
// //         <Timeline<Transaction>
// //           queryKey={['transactions']}
// //           fetchNewer={fetchNewer}
// //           fetchOlder={fetchOlder}
// //           getItemDate={item => new Date(item.date)}
// //           estimateSize={80}
// //           overscan={5}
// //           renderItem={item => (
// //             <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 border-b">
// //               <div className="flex items-center space-x-3">
// //                 <div className="p-2 rounded-full bg-green-100">
// //                   <FaMoneyBillWave className="text-green-600" size={18} />
// //                 </div>
// //                 <div>
// //                   <p className="font-medium text-gray-900 truncate">{item.title}</p>
// //                   <p className="text-xs text-gray-500">
// //                     {new Date(item.date).toLocaleString('en-NG', {
// //                       month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
// //                     })}
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="text-right">
// //                 <p className={`text-lg font-semibold ${
// //                   item.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
// //                 }`}>
// //                   {item.amount}
// //                 </p>
// //                 <p className={`text-xs capitalize ${
// //                   item.status === 'failed'
// //                     ? 'text-red-500'
// //                     : item.status === 'pending'
// //                     ? 'text-yellow-500'
// //                     : 'text-gray-500'
// //                 }`}>
// //                   {item.status === 'completed' ? 'Successful' : item.status}
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         />
// //       </div>

// //       {/* Bottom nav */}
// //       <nav className="flex justify-around items-center h-14 bg-white border-t">
// //         <Link to="/transactions" className="flex flex-col items-center text-green-600">
// //           <FaMoneyBillWave size={20} /><span className="text-xs">Transactions</span>
// //         </Link>
// //         <Link to="/stats" className="flex flex-col items-center text-gray-500">
// //           <FaArrowRight size={20} /><span className="text-xs">Statistics</span>
// //         </Link>
// //       </nav>
// //     </div>
// //   )
// // }

// // components/Transactions/TimelineTransaction.tsx
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { FaArrowLeft, FaDownload, FaMoneyBillWave } from 'react-icons/fa'
// import { useFetchTransactions } from '../../hooks/useFetchTransactions'
// import { useMonthlyTotals } from '../../hooks/useMonthlyTotals'
// import { TopBar } from '../../components/UI/TopBar'
// import { SelectDropdown } from '../../components/UI/SelectDropdown'
// import { SummaryCard } from '../../components/UI/SummaryCard'
// import { Tabs } from '../../components/UI/Tabs'
// import Timeline from '../../components/UI/Timeline'
// import { BottomNav } from '../../components/UI/BottomNav'

// export default function TimelineTransaction() {
//   const navigate = useNavigate()
//   const { data, fetchNextPage, isFetchingNextPage } = useFetchTransactions()
//   const totals = useMonthlyTotals()

//   const [category, setCategory] = useState('')
//   const [status, setStatus] = useState('')

//   const items = data?.pages.flat() ?? []

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <TopBar
//         title="Transactions"
//         backIcon={<FaArrowLeft size={20} />}
//         onBack={() => navigate(-1)}
//         actionIcon={<FaDownload size={18} />}
//         onAction={() => console.log('Download')}
//       />

//       <div className="bg-white px-4 py-2 flex space-x-2">
//         <SelectDropdown
//           options={[
//             { label: 'All', value: '' },
//             { label: 'Income', value: 'income' },
//             { label: 'Expense', value: 'expense' },
//           ]}
//           value={category}
//           onChange={setCategory}
//         />
//         <SelectDropdown
//           options={[
//             { label: 'All', value: '' },
//             { label: 'Pending', value: 'pending' },
//             { label: 'Successful', value: 'completed' },
//             { label: 'Failed', value: 'failed' },
//           ]}
//           value={status}
//           onChange={setStatus}
//         />
//       </div>

//       <SummaryCard
//         month={new Date().toLocaleString('default', { month: 'short', year: 'numeric' })}
//         inTotal={totals.in}
//         outTotal={totals.out}
//       />

//       <Tabs
//         tabs={[
//           { key: 'txn', label: 'Transactions' },
//           { key: 'stats', label: 'Statistics' },
//         ]}
//         activeKey="txn"
//         onChange={key => console.log('Switched to', key)}
//       />

//       <div className="flex-1 overflow-y-auto">
//         <Timeline
//           items={items}
//           loadMore={fetchNextPage}
//           isLoading={isFetchingNextPage}
//           renderItem={item => (
//             <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 border-b">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 rounded-full bg-green-100">
//                   <FaMoneyBillWave className="text-green-600" size={18} />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900 truncate">{item.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {new Date(item.date).toLocaleString('en-NG', {
//                       month: 'short',
//                       day: 'numeric',
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className={`text-lg font-semibold ${
//                   item.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
//                 }`}>
//                   {item.amount}
//                 </p>
//                 <p className={`text-xs capitalize ${
//                   item.status === 'failed'
//                     ? 'text-red-500'
//                     : item.status === 'pending'
//                     ? 'text-yellow-500'
//                     : 'text-gray-500'
//                 }`}>
//                   {item.status === 'completed' ? 'Successful' : item.status}
//                 </p>
//               </div>
//             </div>
//           )}
//         />
//       </div>

//       <BottomNav />
//     </div>
//   )
// }
