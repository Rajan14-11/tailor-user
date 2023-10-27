
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import ProductPage from '@/components/ProductPage/ProductPage'
import { useGetProductByIdQuery } from '@/Redux/api'
import { useRouter } from 'next/router'
import React from 'react'

const productPage = ({ addTocart }:any) => {
  const router = useRouter();
  const { data, error } = useGetProductByIdQuery(router.query.productId);
  return (
    <div className="bg-neutral h-screen w-full">
      <Topbar />
      <ProductPage product={data?.product} addTocart={addTocart} />
      <LandingPageFooter />
    </div>
  );
};

export default productPage