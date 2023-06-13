
import CheckoutMain from '@/components/Checkout/CheckoutMain'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import React from 'react'

const checkout = () => {
  return (
    <div className=''>
        <Topbar/>
        <CheckoutMain/>
        <LandingPageFooter/>
    </div>
  )
}

export default checkout