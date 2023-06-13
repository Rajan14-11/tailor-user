import React from 'react'
import TextInput from '../Common/Inputs/TextInput';
import {AiOutlineClose} from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi";
import { useStateContext } from '@/Context/ContextState';

function SelectLocation() {
  const {setSelectLocation} = useStateContext()
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[2] backdrop-brightness-50">
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-neutral h-screen fixed top-0 left-0 z-[3]">
        <div className="flex justify-end h-12 mr-4 mt-4 text-2xl">
          <AiOutlineClose className="cursor-pointer hover:text-neutralFocus" onClick={()=>setSelectLocation(false)} />
        </div>
        <div className="w-full h-[70%] flex flex-col justify-center items-center p-12">
          <div className="w-3/4 text-center h-fit m-4">
            <input
              type="text"
              name="location"
              className="shadow-xl w-full p-4 rounded outline-primary"
              placeholder='Enter Location'
            />
          </div>
          <div className="m-4 flex h-fit bg-white p-4 w-3/4 text-center justify-center items-center cursor-pointer shadow-xl">
            <BiCurrentLocation className="text-xl mr-4" />
            <p className="flex flex-col hover:text-primary">
              Get Current Location{" "}
              <span className="text-sm text-neutralFocus font-primary font-semibold">Using GPS</span>
            </p>
          </div>
          <div className="m-4 flex flex-col h-fit bg-white p-4 w-3/4 text-center justify-center items-center cursor-pointer shadow-xl">
            <span className='text-neutralFocus font-bold'>Recent Searches</span>
            <div className='flex flex-col justify-center items-center font-primary'>
              <p className='font-bold hover:text-primary'>Dashmesh Nagar</p>
              <p>Maur Mandi </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLocation