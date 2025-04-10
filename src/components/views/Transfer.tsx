import React from 'react'
import BankList from '../../pages/Transfer/BankList'
import QuickTransferCard from '../../pages/Transfer/QuickTransferCard'
import QuickTransfer from '../../pages/Users/QuickTransfer'

const Transfer = () => {
  return (
    <div className='w-fit mx-auto lg:w-full space-y-5' >
         {/* <div className='w-fit mx-auto lg:w-full' > */}
           < QuickTransfer />
        {/* </div>
     
        <div className='w-fit mx-auto lg:w-full' > */}
         <BankList />
      {/* </div>
     
      <div className='w-fit mx-auto lg:w-full' > */}
             <QuickTransferCard />
          {/* </div> */}
    

    </div>
  )
}

export default Transfer
