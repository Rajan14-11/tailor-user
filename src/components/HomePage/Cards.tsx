import Link from 'next/link'
import React from 'react'
import Card from "./Card"
const Cards = (props:{wishlist?:boolean}) => {
  return (
    <div className='my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[85%] lg:grid-cols-4 m-auto gap-4 md:gap-8 h-fit bg-white p-4 justify-center'>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
        <Link href="/tailordetails"><Card wishlist={props.wishlist}/></Link>
    </div>
  )
}

export default Cards