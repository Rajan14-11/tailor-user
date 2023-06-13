import Link from "next/link";
import React, { useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface Props {
  product: Product;
}
const RightSection = ({ product }: Props) => {
  const rating = product && product.rating;
  const maxPrice = (
    product &&
    product.price +
      (product && product.discountPercentage / 100) * (product && product.price)
  ).toFixed(2);

  const [changeValue, setChangeValue] = useState(1);
  const [counterValue, setCounterValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product && product.price);
  const Cart = () => {
    // ("/detailcart", { replace: true });
  };

  const increment = () => {
    setCounterValue((prevValue) => prevValue + changeValue);
    setTotalPrice(product && product.price * (counterValue + 1));
  };
  return (
    <>
      <div className="w-full md:w-[45%] ">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start m-4 p-8 w-full z-[1] overflow-hidden">
          <strong>
            <div className="w-full">
              <h3 className="text-2xl mb-2 font-bold font-secondary">{product && product.title}</h3>
            </div>
          </strong>

          <p className="text-xl text-slate-600 font-primary">{product && product.description}</p>

          <div className="flex justify-center items-center font-secondary">
            <p className="mt-2 text-2xl">
              <strong className="mr-1">₹</strong>
              <strong>{product && product.price}</strong>
            </p>
            <p className="mt-2 text-xl ml-4 text-slate-500 line-through ">
              <strong className="mr-1">₹</strong>
              <strong>{maxPrice}</strong>
            </p>
            <p className="ml-2 mt-2">
              {product && product.discountPercentage} %
            </p>
          </div>

          <div className="flex mt-2">
            {Array(rating > 1 ? Math.ceil(rating) : 1)
              .fill(rating)
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>

          <div className="text-slate-600 font-primary">
            <ul>
              <li>{product && product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel natus exercitationem quasi illo, odit eligendi itaque corrupti neque nesciunt. Laboriosam ipsam cupiditate nihil necessitatibus distinctio nam error voluptatibus quas quibusdam.</li>
              <li>{product && product.description}</li>
              <li>{product && product.description}</li>
              <li> {product && product.description}</li>
              <li> {product && product.description}</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center md:justify-start md:items-start  w-full">
            <div className="mt-12  mr-4 w-1/3 h-1/3 p-2 border border-neutral font-secondary flex items-center justify-between rounded">
              <button
                className="bg-transparent border-none w-8 h-8 rounded-xl"
                onClick={() => increment()}
              >
                <b>+</b>
              </button>

              <input
                className="w-full bg-transparent border-none m-auto p-auto text-center font-secondary"
                value={counterValue}
                type="text"
                onChange={(e) => setChangeValue(parseInt(e.target.value))}
              />
              <button
                className="bg-transparent border-none w-8 h-8 rounded-xl"
                onClick={() => {
                  setCounterValue((prevValue) => prevValue - changeValue);
                  // setTotalPrice(totalPrice - product && product.price);
                }}
                disabled={counterValue == 1 ? true : false}
              >
                <b>-</b>
              </button>
            </div>
            <Link href={"/detailCart"} className="w-full">
              {/* <button
                className="bg-primary text-neutral mb-8 w-full my-8 py-2 px-20 lg:px-40 md:py-4 mr-4 rounded hover:bg-primaryFocus"
                type="button"
              >
                Add To Cart
              </button> */}
              <UIButton title="Add to Cart" css="w-full flex justify-center"/>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default RightSection;
