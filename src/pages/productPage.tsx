
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import ProductPage from '@/components/ProductPage/ProductPage'
import React from 'react'

const productPage = () => {
  return (
    <div className='bg-neutral h-screen w-full'>
        <Topbar/>
        <ProductPage/>
        <LandingPageFooter/>
    </div>
  )
}

export default productPage