"use-client";
import Images from "@/assets/Images";
import { actionTypes, useCartStateContext } from "@/Context/CartContext";
import {
  useAddToCartMutation,
  useAddToWishlistMutation,
  useGetCartMutation,
  useRemoveItemMutation,
} from "@/Redux/api";
import { addTocart, getCartItems } from "@/Redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { ImBin } from "react-icons/im";

const allproducts = {
  id: 1,
  products: [
    {
      id: 59,
      title: "Spring and summershoes",
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
    },
    {
      id: 88,
      title: "TC Reusable Silicone Magic Washing Gloves",
      price: 29,
      quantity: 2,
      total: 58,
      discountPercentage: 3.19,
      discountedPrice: 56,
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      price: 40,
      quantity: 2,
      total: 80,
      discountPercentage: 13.1,
      discountedPrice: 70,
    },
    {
      id: 95,
      title: "Wholesale cargo lashing Belt",
      price: 930,
      quantity: 1,
      total: 930,
      discountPercentage: 17.67,
      discountedPrice: 766,
    },
    {
      id: 39,
      title: "Women Sweaters Wool",
      price: 600,
      quantity: 2,
      total: 1200,
      discountPercentage: 17.2,
      discountedPrice: 994,
    },
  ],
  total: 2328,
  discountedTotal: 1941,
  userId: 97,
  totalProducts: 5,
  totalQuantity: 10,
};

interface Props {
  checkoutStep?: boolean;
  orderDetails?: boolean;
  cartItems?: any;
}

export const OrderSummary = (props: Props) => {

 let totalAmount,totalQty;
 if (props.cartItems !== undefined) {
   totalAmount = Object.keys(props.cartItems && props.cartItems).reduce(
     (totalPrice, key) => {
       const { price, qty }:any = props.cartItems[key];
       return totalPrice + price * qty;
     },
     0
   );
   totalQty = Object.keys(props.cartItems && props.cartItems).reduce(
     (totalqty, key) => {
       const { price, qty }: any = props.cartItems[key];
       return totalqty + qty;
     },
     0
   );
 }
 console.log(totalAmount,totalQty)
 let shippingCharges =50
  return (
    <div
      className={`h-fit ${
        props.checkoutStep || props.orderDetails
          ? "w-full md:w-3/4 m-auto"
          : "md:w-1/3 md:ml-4"
      }`}
    >
      <div className="h-full flex flex-col">
        <ul
          className={`border ${
            props.orderDetails ? "p-4 mt-2" : "p-8 shadow-xl"
          } bg-white rounded`}
        >
          <li
            className={`list-none font-secondary font-bold flex justify-between  uppercase overflow-hidden border-b border-t py-4 ${
              props.orderDetails ? "hidden" : ""
            }`}
          >
            Order Summary
            <span>
              <span className="font-semibold text-black mr-1">₹</span>
              {totalAmount && totalAmount + shippingCharges}
            </span>
          </li>

          <div className="grid gap-3 font-neutral">
            <div className={`${props.orderDetails ? "p-0" : "py-3"}`}>
              <li
                className={`font-semibold flex justify-between capitalize border-b ${
                  props.orderDetails ? "pb-0" : "pb-6"
                }`}
              >
                Total
                <span className="">
                  <span className="font-semibold text-black mr-1">₹</span>
                  {totalAmount && totalAmount}
                </span>
              </li>
            </div>
            <div className={`${props.orderDetails ? "p-0" : "py-3"}`}>
              <li
                className={`font-semibold flex font-neutral justify-between capitalize border-b ${
                  props.orderDetails ? "pb-0" : "pb-6"
                }`}
              >
                Total Qty
                <span>
                  {totalQty}
                  <span className="font-semibold text-black ml-1"> items</span>
                </span>
              </li>
            </div>
            <div className={`${props.orderDetails ? "p-0" : "py-3"}`}>
              <li
                className={`font-semibold font-neutral flex justify-between capitalize border-b ${
                  props.orderDetails ? "pb-0" : "pb-6"
                }`}
              >
                Shipping
                <span>
                  <span className="font-semibold text-black mr-1">₹</span>
                  {shippingCharges}
                </span>
              </li>
            </div>
          </div>

          <li
            className={`font-bold flex font-secondary justify-between capitalize ${
              props.orderDetails ? "" : " border-b pb-6"
            } `}
          >
            Total Order
            <span>
              <span className="font-semibold text-black mr-1">₹</span>
              {totalAmount && totalAmount + shippingCharges}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
// const { dispatch, state } = useCartStateContext();
const DetailCart = ({
  cartItem,
  loading,
  removeItem,
  onQuantityIncrement,
  onQuantityDecrement,
}: any) => {

  const [cartItems, setCartItems] = useState<any>({});

  useEffect(() => {
    if (cartItem !== undefined) setCartItems(cartItem);
  }, [cartItem]);

  const [addToWishlist,{data,error,isSuccess}] =useAddToWishlistMutation()
  const handleWishlist =(id:number)=>{
     addToWishlist({prodId:id})
  }


  return (
    <div className="bg-neutral h-fit">
      {/* <CheckoutSteps activeStep={0} /> */}
      <section className="mt-5 mx-4">
        <div className="flex justify-center">
          <h1 className="w-fit font-secondary text-center text-3xl font-bold mb-8 text-secondary">
            {" "}
            Shopping Cart
            <div className="w-full h-[3px] bg-primary" />
          </h1>
        </div>
        <div className="w-full m-auto flex flex-col md:flex-row justify-between ">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="flex flex-col md:flex-row w-full justify-between">
              {Object.keys(cartItems).length == 0 ? (
                <h1 className="text-2xl text-center my-12 font-secondary w-full">No products to show Kindly add One.</h1>
              ) : (
                <>
                  <div className="w-full bg-white shadow-xl py-4 md:w-2/3 mb-4 rounded">
                    <div className="">
                      <table className="w-full py-4">
                        <thead className="w-full text-xl p-4">
                          <tr className="border-b border-b-black p-4 font-secondary">
                            <th
                              style={{ width: "35%", textAlign: "center" }}
                              scope="col"
                            >
                              Product
                            </th>
                            <th
                              style={{ width: "15%", textAlign: "center" }}
                              scope="col"
                            >
                              Price
                            </th>
                            <th
                              style={{ width: "35%", textAlign: "center" }}
                              scope="col"
                            >
                              Quantity
                            </th>
                            <th
                              style={{ width: "15%", textAlign: "center" }}
                              scope="col"
                            >
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems !== undefined &&
                            Object.keys(cartItems && cartItems).map((key) => {
                              return (
                                <tr
                                  key={cartItems[key]._id}
                                  className="border relative font-secondary"
                                >
                                  <td style={{ width: "35%" }}>
                                    <div className="w-full py-8 px-4">
                                      <div
                                        className="flex flex-col md:flex-row justify-center items-center"
                                        style={{ position: "relative" }}
                                      >
                                        <Link
                                          href={`/productPage?productId=${cartItems[key]._id}`}
                                        >
                                          <Image
                                            src={
                                              cartItems[key].img
                                                ? cartItems[key].img
                                                : cartItems[key]
                                                    ?.productPictures[0].img
                                            }
                                            alt=""
                                            width={500}
                                            height={500}
                                            className="w-full mr-2 h-28 border border-primary shadow-xl mb-2 rounded "
                                          />
                                        </Link>
                                        <div className="w-full text-center">
                                          <p className="">
                                            {cartItems[key].name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      width: "15%",
                                      textAlign: "center",
                                    }}
                                  >
                                    <h6>
                                      <span className="font-semibold text-black mr-1">
                                        ₹
                                      </span>
                                      {cartItems[key].price}
                                    </h6>
                                  </td>
                                  <td style={{ width: "35%" }}>
                                    <div className="flex justify-center items-center">
                                      <AiOutlineMinusCircle
                                        onClick={
                                          cartItems[key].qty > 1
                                            ? () =>
                                                onQuantityDecrement(
                                                  cartItems[key]._id
                                                )
                                            : () =>
                                                removeItem(cartItems[key]._id)
                                        }
                                        className="cursor-pointer hover:text-primary text-xl"
                                      />
                                      <p className="mx-4 text-xl py-4 px-2 ">
                                        {cartItems[key].qty}
                                      </p>
                                      <AiOutlinePlusCircle
                                        className="cursor-pointer hover:text-primary text-xl"
                                        onClick={() =>
                                          onQuantityIncrement(
                                            cartItems[key]._id
                                          )
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      width: "20%",
                                      textAlign: "center",
                                    }}
                                  >
                                    <h6>
                                      <span className="font-semibold text-black mr-1">
                                        ₹
                                      </span>
                                      {cartItems[key].price *
                                        cartItems[key].qty}
                                    </h6>
                                    <ImBin
                                      className="cursor-pointer text-neutralFocus hover:text-primary absolute right-[5px] bottom-[10px] text-xl ml-4"
                                      onClick={() =>
                                        removeItem(cartItems[key]._id)
                                      }
                                    />
                                    {
                                      isSuccess ?
                                      <AiOutlineHeart
                                        className="cursor-pointer text-secondary hover:text-primary absolute right-[5px] top-[10px] text-xl ml-4"
                                        onClick={() =>
                                          handleWishlist(cartItems[key]._id)
                                        }
                                      />:
                                    <AiOutlineHeart
                                      className="cursor-pointer text-secondary hover:text-primary absolute right-[5px] top-[10px] text-xl ml-4"
                                      onClick={() =>
                                        handleWishlist(cartItems[key]._id)
                                      }
                                    />
                                    }
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <OrderSummary cartItems={cartItems} />
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex justfiy-center w-full">
          {
              Object.keys(cartItems).length == 0 ? "":
          <Link
          href="/checkout"
            className="w-1/3 font-bold m-auto font-secondary my-4 text-center p-4 text-xl capitalize bg-primary rounded text-neutral hover:bg-primaryFocus"
          >
            Proceed to Checkout
          </Link>
      }
        </div>
      </section>
    </div>
  );
};

export default DetailCart;
