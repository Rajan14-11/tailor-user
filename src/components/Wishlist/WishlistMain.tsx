import { useGetWishlistQuery } from '@/Redux/api'
import React from 'react'
import Card from '../HomePage/Card'

const WishlistMain = () => {
  const {data,error} = useGetWishlistQuery('')
  return (
    <div className="w-full h-fit my-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center w-fit font-secondary text-2xl font-bold ">
          My Wishlist
          <span className="w-full h-[3px] bg-primary block"></span>
        </h1>
      </div>

{
  data?.wishlist.length==0? <h1 className='text-center font-secondary w-full text-3xl my-52'>No Products available in Wishlist.</h1>:
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[85%] lg:grid-cols-4 m-auto gap-4 md:gap-8 h-fit bg-white p-4 justify-center">
        {data?.wishlist?.map((card:any) => (
          <Card wishlist={true} wishlistData={card} />
        ))}
      </div>
}
    </div>
  );
}

export default WishlistMain