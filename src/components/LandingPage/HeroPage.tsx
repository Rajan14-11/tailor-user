import Link from "next/link";
import React from "react";
import TextInput from "../Common/Inputs/TextInput";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";
import { useEffect } from "react";
import { useStateContext } from "@/Context/ContextState";
function HeroPage() {

  const inputRef = useRef();
  const {getLocation} = useStateContext()

useEffect(()=>{
  getLocation(inputRef)
},[])

  return (
    <div className="flex flex-col px-4 justify-center items-center h-[90vh] md:h-[85vh] mb-12">
      <h1 className="text-3xl text-center sm:text-5xl lg:text-6xl font-bold text-neutral relative transition-ease-in">
        <div className="overflow-hidden float-right relative h-24 pt-0 mt-0">
          <ul className="animate-flip1 font-secondary">
            <li className="font-bold p-0 h-[2.5rem] mb-[3.5rem] block">
              <h1>Need to Customize Your Clothes</h1>
            </li>
            <li className="font-bold p-0 h-[2.5rem] mb-[3.5rem] block">
              <h1>Get New Clothings</h1>
            </li>
            <li className="font-bold p-0 h-[2.5rem] mb-[3.5rem] block">
              <h1>Wanna Try New Designs</h1>
            </li>
            <li className="font-bold p-0 h-[2.5rem] mb-[3.5rem] block">
              <h1>Tailor headaches??</h1>
            </li>
          </ul>
        </div>
      </h1>

      <div className="mt-8 rounded w-full h-16 md:h-12 text-center flex justify-center ">
          <input
            placeholder="Enter location to Search for Tailors"
            type="text"
            name="location"
            className="rounded-l p-2 outline-none w-[80%] md:w-[30%] "
            ref={inputRef}
          />
        <Link
          href="/homepage"
          className="bg-primary flex items-center justify-center font-secondary p-2 rounded-r font-bold text-neutral md:w-[15%]"
        >
          Click Me
        </Link>
      </div>
    </div>
  );
}

export default HeroPage
