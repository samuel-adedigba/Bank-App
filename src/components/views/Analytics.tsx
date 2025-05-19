import React from 'react'
import ExpenseCategoryBreakdown from '../../pages/Analytics/ExpenseCategoryBreakdown'
import MonthlyTrend from '../../pages/Analytics/MonthlyTrend'
import AccountCombineChart from '../../pages/Analytics/AccountCombineChart'

const Analytics = () => {
  return (
    <>
    <div className='mx-auto' >    
      <ExpenseCategoryBreakdown />
      <MonthlyTrend />
      <AccountCombineChart />
      </div>
    </>
  )
}

export default Analytics
