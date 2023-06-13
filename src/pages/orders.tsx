import OrdersMain from '@/components/OrdersPage/OrdersMain'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import React from 'react'

const Orders = () => {
  return (
    <div>
        <Topbar/>
        <OrdersMain/>
        <LandingPageFooter/>
    </div>
  )
}

export default Orders