import Link from 'next/link'
import React, { Component, useState } from 'react'
import { MouseEventHandler } from 'react'

interface Menu{
    label:string,
    href:string,
    icon:null|any,
    onClick?:MouseEventHandler
  }

interface Props{
menus:Menu[],
show:boolean,
setShow:Function
}

const Dropdown = (props:Props) => {
    // console.log(props.show)
  return (
    <div
      className={`relative inline-block`}
      onMouseEnter={() => props.setShow(true)}
    >
      <div
        className={`absolute right-[50px] ease-in top-[25px] translate-x-1/2 w-56 bg-white border ${
          props.show ? "block" : "hidden"
        }`}
      >
        <div
          className="bg-white shadow-xl rounded"
          onMouseLeave={() => props.setShow(false)}
        >
          <ul className="m-0 p-0 bg-white">
            {props.menus.map((item: Menu, index: number) => (
              <li
                className="list-none block p-6 border-b hover:cursor-pointer hover:text-primary"
                key={index}
              >
                <Link href={item.href} className="flex items-center "
                 onClick={item.onClick}
                 >
                  <h1 className='font-primary text-xl font-semibold mr-2'>{item.icon}</h1>
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown