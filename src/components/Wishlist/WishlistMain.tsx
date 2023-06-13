import React from 'react'
import Card from '../HomePage/Card'
import Cards from '../HomePage/Cards'

const WishlistMain = () => {
  return (
    <div className='w-full h-fit my-4'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-center w-fit font-secondary text-2xl font-bold '>My Wishlist
            <span className='w-full h-[3px] bg-primary block'></span>
            </h1>
        </div>

        <div>
            <Cards wishlist={true}/>
        </div>
    </div>
  )
}

export default WishlistMain