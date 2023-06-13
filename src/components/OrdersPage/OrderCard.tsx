import Images from "@/assets/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UIButton } from "../Common/Buttons/UIButton";

export const ProductCard = () => {
  return (
    <div className=" border m-2 flex p-4 flex-col sm:flex-row">
      <div className="flex flex-col w-full md:w-2/3 justify-between mr-4">
        <div>
          <h1 className="text-xl py-4 font-bold text-primary font-secondary">Successful</h1>
        </div>
        <div className="flex w-full">
          <Image
            src={Images.service2}
            alt=""
            width={200}
            height={100}
            className="w-1/2 md:w-1/3 h-full rounded"
          />
          <p className="ml-4 text-center w-2/3 font-primary font-bold text-lg">Product name come shere</p>
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-1/3 flex justify-center items-center">
        <UIButton
          title="Write a Review"
          css="justify-center flex items-center"
        />
      </div>
    </div>
  );
};

const OrderCard = () => {
  return (
    <div className="border shadow-xl bg-white rounded text-black h-fit flex flex-col">
      <div className="border w-full h-fit p-4 flex justify-between bg-slate-200 flex-col md:flex-row">
        <div className="flex justify-between w-full md:w-[40%] items-center">
          <div className="w-1/2 flex flex-col font-primary items-start md:block justify-start">
            <p className="text-sm uppercase">Order Placed</p>
            <p className="font-semibold">23/05/2023</p>
          </div>
          <div className="w-1/2 flex flex-col font-primary items-end md:block justify-end">
            <p className="text-sm uppercase">Total</p>
            <p className="font-semibold">₹ 3000</p>
          </div>
        </div>
        <div className="w-full mt-4 flex-wrap md:mt-0 md:w-1/2 md:justify-end flex md:flex-col justify-between md:items-end">
          <div className="w-1/2 md:flex justify-end font-primary font-semibold">Order Id #1234567</div>
          <div className="font-bold font-secondary">
            <Link href={"/orderDetails"}>
              <span className="hover:text-primary cursor-pointer">
                Order Details
              </span>{" "}
            </Link>
            | <span className="hover:text-primary cursor-pointer">Invoice</span>
          </div>
        </div>
      </div>
      <ProductCard />
    </div>
  );
};

export default OrderCard;
