
import CheckoutMain from '@/components/Checkout/CheckoutMain'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import { useAppSelector } from '@/Redux/hooks'
import { redirect, useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { useLayoutEffect } from 'react'


const checkout = () => {
  // const router = useRouter()
  // const isAuth = useAppSelector(state=>state.user.isAuthenticated)
  // useLayoutEffect(()=>{
  //   if(!isAuth){
  //     router.push('/login')
  //   }
  // },[])

  return (
    <div className=''>
        <Topbar/>
        <CheckoutMain />
        <LandingPageFooter/>
    </div>
  )
}

export default checkout