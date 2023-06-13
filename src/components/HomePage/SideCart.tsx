import Images from '@/assets/Images';
import { actionTypes, useCartStateContext } from '@/Context/CartContext';
import {useStateContext} from "@/Context/ContextState"
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect} from 'react'
import { AiOutlineClose, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import {ImBin} from "react-icons/im"
import { UIButton } from '../Common/Buttons/UIButton';
// import CurrencyFormat from "react-currency-format";

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

const SideCart = () => {
      let quantity = 10;
      const { dispatch, state } = useCartStateContext();
      const {setOpenCart} = useStateContext()

    useEffect(() => {
      dispatch({type:actionTypes.GET_CART_REQ})
      dispatch({type:actionTypes.GET_CART_SUCCESS})
    }, [state.cartproducts])
   const removeItem = (id:number) => {
     dispatch({type:actionTypes.REMOVE_ITEM,payload:id});
   };

   const increaseProductCount = (id:number) => {
     dispatch({type:actionTypes.INCREASE_COUNT,payload:id});
   };
   const decreaseProductCount = (id:number) => {
     dispatch({type:actionTypes.DECREASE_COUNT,payload:id});
   };

   const clearCart = () => {
     dispatch({});
   };
  return (
    <>
      <div className="backdrop-brightness-50 w-full h-screen fixed top-0 right-0 z-[2]">
        <div className="w-full z-[10] sm:w-1/2 lg:w-1/3 bg-neutral h-[106vh] fixed top-0 right-0 overflow-y-auto">
          <div className="flex justify-between items-center px-8 py-4 sticky top-0 z-[2] bg-white">
            <h1 className="text-2xl font-secondary">Cart</h1>
            <AiOutlineClose
              className="cursor-pointer text-2xl hover:text-neutralFocus"
              onClick={() => setOpenCart(false)}
            />
          </div>

          <div>
            <div className="grid gap-4 p-4">
              {allproducts.totalQuantity !== 0 ? (
                allproducts.products.map((singleproduct) => (
                  <>
                    <div
                      className="grid items-center my-6 border-b-[1px] border-b-black border-spacing-[10px]"
                      key={singleproduct.id}
                    >
                      <div className="mb-8 flex w-full h-40 items-center justify-center py-4 gap-4 ">
                        <Link href={`/productdetail/${singleproduct.id}`}>
                          <Image
                            src={Images.service1}
                            alt=""
                            className="w-full h-40 rounded "
                          />
                        </Link>
                        <div className="mx-8 w-1/2 flex flex-col justify-center">
                          <h4 className="font-bold ">{singleproduct.title}</h4>
                          <h6 className='font-primary text-xl font-semibold'>{"summary"}</h6>

                          {singleproduct.quantity > 0 ? (
                            <div className="flex w-full items-center">
                              <AiOutlineMinusCircle
                                className="cursor-pointer hover:text-primary text-xl"
                                onClick={
                                  singleproduct.quantity > 1
                                    ? () =>
                                        decreaseProductCount(singleproduct.id)
                                    : () => removeItem(singleproduct.id)
                                }
                              />

                              <p className="mx-4 text-xl py-4 px-2 ">
                                {singleproduct.quantity}
                              </p>
                              <AiOutlinePlusCircle
                                className="cursor-pointer hover:text-primary text-xl"
                                onClick={() =>
                                  increaseProductCount(singleproduct.id)
                                }
                              />
                            </div>
                          ) : (
                            <div>
                              <h4 style={{ color: "primary" }}>Out of Stock</h4>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-center justify-between w-1/6 h-full">
                          <ImBin
                            className="cursor-pointer hover:text-primary text-xl"
                            onClick={() => removeItem(singleproduct.id)}
                          />

                          {singleproduct.quantity > 0 ? (
                            <h5 className="text-xl">
                              <span className="font-semibold text-black mr-1">
                                ₹
                              </span>

                              {singleproduct.price * singleproduct.quantity}
                            </h5>
                          ) : (
                            " "
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img src="/imgs/download.png" />
                  <h4>Your Cart is empty </h4>
                </div>
              )}
              {quantity !== 0  ? (
                <div className="mb-4 flex flex-col justify-center items-center">
                  <UIButton title="Clear Cart" onClick={clearCart} css="flex justify-center"/>

              <Link href={"/checkout"}>
                    <UIButton title="Checkout" css="mb-12" onClick={()=>setOpenCart(false)}/>
                  </Link>
              </div>
               ) : (
                ""
              )
               }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideCart