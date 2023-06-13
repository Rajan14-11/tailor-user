import Footer from '@/components/Footer/Footer'
import Cards from '@/components/HomePage/Cards'
import Filter from '@/components/HomePage/Filter'
import HomeSlider from '@/components/HomePage/Slider'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import React from 'react'

function homepage() {
  return (
    <div className='h-fit bg-login-gradient'>
      <Topbar/>
      <HomeSlider/>
      <Filter/>
      <Cards/>
      <LandingPageFooter/>
    </div>
  )
}

export default homepage