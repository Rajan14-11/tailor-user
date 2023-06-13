import React from 'react'

const Footer = () => {
  return (
    <div className="flex text-grayish justify-evenly items-center font-secondary">
      <div className="flex justify-between ">
        <p className="py-4 cursor-none">2023 Tailor All rights reserved</p>
      </div>
      <div className="hidden md:flex">
        <ul className="flex ">
          <li className="mx-4 cursor-pointer hover:scale-110">Notices</li>
          <li className="mx-4 cursor-pointer hover:scale-110">
            Privacy Policy
          </li>
          <li className="mx-4 cursor-pointer hover:scale-110">
            Terms of Service
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer