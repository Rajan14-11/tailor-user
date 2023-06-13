import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import WishlistMain from '@/components/Wishlist/WishlistMain'
import React from 'react'

const wishlist = () => {
  return (
    <div>
      <Topbar/>
      <WishlistMain/>
      <LandingPageFooter/>
    </div>
  )
}

export default wishlist