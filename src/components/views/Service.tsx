import React from 'react'
import ServiceAnalytics from '../../pages/Service/ServiceAnalytics'
import BankServicesList from '../../pages/Service/BankServicesList'

const Service = () => {
  return (
    <div>

      <div className='p-2' >
        <ServiceAnalytics />
      </div>
      <div className='mt-2 p-2'>
        <BankServicesList />
      </div>
    </div>
  )
}

export default Service
