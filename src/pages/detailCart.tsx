import DetailCart from '@/components/DetailCart/DetailCart'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import React from 'react'

const detailCart = () => {
  return (
    <div>
      <Topbar/>
      <DetailCart/>
      <LandingPageFooter/>
    </div>
  )
}

export default detailCart