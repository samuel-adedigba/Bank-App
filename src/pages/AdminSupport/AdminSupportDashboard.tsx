import React from 'react'
import { useAppSelector } from '../../store/hook'

const Dashboard = () => {
  const userRole = useAppSelector(state => state.auth.user?.role)
  console.log( 'ROLE', userRole)
  if (!userRole){
    return <div> Loading... </div>
  }

    
    return (
      <>
  Admin Support Dashboard
      </>
    )
}

export default Dashboard

