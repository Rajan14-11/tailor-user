import Footer from '@/components/Footer/Footer'
import Cards from '@/components/HomePage/Cards'
import Filter from '@/components/HomePage/Filter'
import HomeSlider from '@/components/HomePage/Slider'
import Topbar from '@/components/HomePage/Topbar'
import LandingPageFooter from '@/components/LandingPage/LandingPageFooter'
import { useStateContext } from '@/Context/ContextState'
import { useGetSellersByPincodeQuery, useLazyGetSellersByPincodeQuery } from '@/Redux/api'
import React, { useEffect } from 'react'

function homepage() {
  let pincode;
  const [getSellers,{data:sellersData}] = useLazyGetSellersByPincodeQuery()
  const {setSelectLocation} =useStateContext()
  if (typeof window !== "undefined") {
    pincode = JSON.parse(
      window?.localStorage.getItem("address")
    )?.address_components?.filter(
      (add: any) => add.types[0] == "postal_code"
    )[0]?.long_name;
    console.log(pincode);
  }
      useEffect(() => {
       console.log('inside',pincode)
        getSellers(pincode);
      }, [setSelectLocation]);
  const { data, error } = useGetSellersByPincodeQuery(pincode);


  return (
    <div className="h-fit bg-login-gradient">
      <Topbar sellers={data?.users} />
      <HomeSlider sellers={data?.users} />
      <Filter sellers={data?.users} />
      <Cards sellers={data?.users} />
      <LandingPageFooter />
    </div>
  );
}

export default homepage