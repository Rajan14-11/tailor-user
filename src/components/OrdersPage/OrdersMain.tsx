import Filter from '@/components/HomePage/Filter'
import { useGetOrdersQuery } from '@/Redux/api'
import React from 'react'
import OrderCard from './OrderCard'

const OrdersMain = () => {
  const {data,error} =useGetOrdersQuery('')
  return (
    <div className="w-full h-fit bg-login-gradient text-white p-8">
        <div className='w-full flex justify-center'>
             <h1 className='text-center w-fit my-4 text-2xl font-bold inline-block'>Your Orders <span className='h-[2.5px] w-full bg-primary block'></span></h1>
        </div>
      <div className="w-full md:w-3/4 m-auto flex flex-col gap-4">
        {
          data?.orders.map((order)=>(
            <OrderCard key={order._id} order={order} />
          ))
        }
      </div>
    </div>
  );
}

export default OrdersMain