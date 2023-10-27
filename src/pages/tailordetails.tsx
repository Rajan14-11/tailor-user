
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import MiddlePart from '@/components/TailorDetails/MiddlePart'
import TailorDetailsSlider from '@/components/TailorDetails/Slider'
import { useGetProductsQuery } from '@/Redux/api'
import { useRouter } from 'next/router'
import React from 'react'

const tailordetails = () => {
  const router = useRouter()
  const {data,error} = useGetProductsQuery(router.query.seller)
  return (
    <>
      <Topbar />
      <TailorDetailsSlider />
      <MiddlePart products={data?.products} />
      <LandingPageFooter />
    </>
  );
}

export default tailordetails