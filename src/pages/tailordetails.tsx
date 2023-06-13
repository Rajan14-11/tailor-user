
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import MiddlePart from '@/components/TailorDetails/MiddlePart'
import TailorDetailsSlider from '@/components/TailorDetails/Slider'
import React from 'react'

const tailordetails = () => {
  return (
    <>
    <Topbar/>
    <TailorDetailsSlider/>
    <MiddlePart/>
    <LandingPageFooter/>
    </>
  )
}

export default tailordetails