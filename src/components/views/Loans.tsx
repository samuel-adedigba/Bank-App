import React from 'react'
import LoanAnalytics from '../../pages/Loans/LoanAnalytics'
import ActiveLoans from '../../pages/Loans/ActiveLoans'

const Loans = () => {
  return (
    <div>
      <div>
        <LoanAnalytics />
      </div>
      <div>
        <ActiveLoans />
      </div>
    </div>
  )
}

export default Loans
