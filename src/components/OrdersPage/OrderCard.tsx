import Images from "@/assets/Images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import WriteReview from "./WriteReview";

export const ProductCard = ({ item,status }:any) => {
  console.log(item)
  const [writeReview, setWriteReview] = useState(false);
  const [prodId, setProdId] = useState('');

  return (
    <div className=" border m-2 flex p-4 flex-col sm:flex-row">
      <div className="flex flex-col w-full md:w-2/3 justify-between mr-4">
        <div>
          <h1 className="text-xl py-4 font-bold text-primary font-secondary">
            {item?.itemStatus[0].type}
          </h1>
        </div>
        <div className="flex w-full">
          <Image
            src={item?.productId?.productPictures[0].img}
            alt=""
            width={200}
            height={100}
            className="w-1/2 md:w-1/3 h-full rounded"
          />
          <p className="ml-4 text-center w-2/3 font-primary font-bold text-lg">
            {item?.productId.name}
          </p>
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-1/3 flex justify-center items-center">
        <UIButton
          title="Write a Review"
          css="justify-center flex items-center"
          onClick={()=>{
            setWriteReview(true)
            setProdId(item?.productId._id)
          }}
        />
      </div>
      {
        writeReview && <WriteReview prodId={prodId} setWriteReview={setWriteReview}/>
      }
    </div>
  );
};

const OrderCard = ({ order}:any) => {
  return (
    <div className="border shadow-xl bg-white rounded text-black h-fit flex flex-col">
      <div className="border w-full h-fit p-4 flex justify-between bg-slate-200 flex-col md:flex-row">
        <div className="flex justify-between w-full md:w-[40%] items-center">
          <div className="w-1/2 flex flex-col font-primary items-start md:block justify-start">
            <p className="text-sm uppercase">Order Placed</p>
            <p className="font-semibold">
              {order?.orderStatus[0].date.substring(0, 10)}
            </p>
          </div>
          <div className="w-1/2 flex flex-col font-primary items-end md:block justify-end">
            <p className="text-sm uppercase">Total</p>
            <p className="font-semibold">₹ {order?.totalAmount}</p>
          </div>
        </div>
        <div className="w-full mt-4 flex-wrap md:mt-0 md:w-1/2 md:justify-end flex md:flex-col justify-between md:items-end">
          <div className="w-1/2 md:flex justify-end font-primary font-semibold">
            Order Id {order?._id}
          </div>
          <div className="font-bold font-secondary">
            <Link href={`/orderDetails?orderId=${order?._id}`}>
              <span className="hover:text-primary cursor-pointer">
                Order Details
              </span>{" "}
            </Link>
            | <span className="hover:text-primary cursor-pointer">Invoice</span>
          </div>
        </div>
      </div>
      {order?.items.map((item:any) => (
        <ProductCard
          item={item}
        />
      ))}
    </div>
  );
};

export default OrderCard;
