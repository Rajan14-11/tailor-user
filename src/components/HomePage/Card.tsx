import Image from "next/image";
import React from "react";
import Images from "@/assets/Images";
import { UIButton } from "../Common/Buttons/UIButton";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

const Card = ({wishlist}:{wishlist?:boolean}) => {
  return (
    <div className={`w-4/5 md:w-full m-auto ${wishlist?"h-[35rem]":"h-80"} hover:shadow-xl hover:border border-secondary my-4 cursor-pointer rounded relative`}>
      <div className="w-full object-fill h-2/3 p-2 rounded-xl">
        <Image src={Images.service3} alt="" className="w-full h-full rounded" />
      </div>
      <div className="flex flex-col w-full h-1/3">
        <div className="flex flex-col px-4 w-full items-center">
          <h1 className="text-lg font-bold font-secondary">Name</h1>
          <p className="text-slate-600 font-primary">Desc</p>
        </div>

        {wishlist ? (
          <div className="flex flex-col justify-between items-center my-2 px-2">
            <div className="flex justify-center items-center w-full font-neutral">
              <p className="mt-2 text-lg">
                <strong className="mr-1">₹</strong>
                <strong>456</strong>
              </p>
              <p className="mt-2 text-lg ml-2 text-slate-500 line-through ">
                <strong className="mr-1">₹</strong>
                <strong>666</strong>
              </p>
              <p className="ml-2 mt-2">
                (12%)
              </p>
            </div>
            <UIButton title="Add to Cart" css="flex justify-center"/>
            <AiOutlineClose  className="absolute top-5 text-2xl  hover:text-primary font-neutral right-5"/>
          </div>
        ) : (
          <div className="flex justify-between items-center my-2 px-2">
            <div className="bg-green-900 h-fit px-2 text-base sm:text-lg text-white rounded">
              4⭐
            </div>
            <h1 className="">.</h1>
            <div className="sm:text-lg text-slate-700 hover:text-neutralFocus font-primary">
              Time
            </div>
            <h1>.</h1>
            <div className="text-slate-600 hover:text-neutralFocus font-primary">
              Min Price
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
