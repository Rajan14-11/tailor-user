import Images from "@/assets/Images";
import { actionTypes, useCartStateContext } from "@/Context/CartContext";
import { useStateContext } from "@/Context/ContextState";
import { useGetCartMutation } from "@/Redux/api";
import { useAppSelector } from "@/Redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { UIButton } from "../Common/Buttons/UIButton";
// import CurrencyFormat from "react-currency-format";

const SideCart = () => {
  let quantity = 10;
  const { dispatch, state } = useCartStateContext();
  const { setOpenCart } = useStateContext();
  const cart = useAppSelector((state) => state.cart);
  const auth = useAppSelector((state) => state.user.isAuthenticated);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  // console.log(cartItems);
  const [getCartItems, { data, isSuccess, isError, error, isLoading }] =
    useGetCartMutation();

  useEffect(() => {
    if (auth) {
      getCartItems("");
    }
  }, [auth]);

  useEffect(() => {
    if (data === undefined) setCartItems(cart.cartItems);
    else setCartItems(data?.newItems);
  }, [cart.cartItems]);
  // useEffect(()=>{
  //   setCartItems(data?.newItems);
  //   console.log(cartItems)
  // },[typeof(data)])

  //  console.log(data,error,typeof(data))
  const removeItem = (id: number) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: id });
  };

  const increaseProductCount = (id: number) => {
    dispatch({ type: actionTypes.INCREASE_COUNT, payload: id });
  };
  const decreaseProductCount = (id: number) => {
    dispatch({ type: actionTypes.DECREASE_COUNT, payload: id });
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
              {cartItems !== undefined ? (
                Object.keys(cartItems && cartItems).map((key) => (
                  <>
                    <div
                      className="grid items-center my-6 border-b-[1px] border-b-black border-spacing-[10px]"
                      key={cartItems[key]._id}
                    >
                      <div className="mb-8 flex w-full h-40 items-center justify-center py-4 gap-4 ">
                        <Link href={`/productdetail/${cartItems[key]._id}`}>
                          <Image
                            src={
                              cartItems[key].img !== undefined
                                ? cartItems[key].img
                                : cartItems[key].productPictures[0].img
                            }
                            alt=""
                            className="w-full h-40 rounded "
                            width={500}
                            height={500}
                          />
                        </Link>
                        <div className="mx-8 w-1/2 flex flex-col justify-center">
                          <h4 className="font-bold ">{cartItems[key].name}</h4>
                          <h6 className="font-primary text-xl font-semibold">
                            {"summary"}
                          </h6>

                          {cartItems[key].qty > 0 ? (
                            <div className="flex w-full items-center">
                              <AiOutlineMinusCircle
                                className="cursor-pointer hover:text-primary text-xl"
                                onClick={
                                  cartItems[key].qty > 1
                                    ? () =>
                                        decreaseProductCount(cartItems[key]._id)
                                    : () => removeItem(cartItems[key]._id)
                                }
                              />

                              <p className="mx-4 text-xl py-4 px-2 ">
                                {cartItems[key].qty}
                              </p>
                              <AiOutlinePlusCircle
                                className="cursor-pointer hover:text-primary text-xl"
                                onClick={() =>
                                  increaseProductCount(cartItems[key]._id)
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
                            onClick={() => removeItem(cartItems[key]._id)}
                          />

                          {cartItems[key].qty > 0 ? (
                            <h5 className="text-xl">
                              <span className="font-semibold text-black mr-1">
                                ₹
                              </span>

                              {cartItems[key].price * cartItems[key].qty}
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
                  <Image
                    src="/imgs/download.png"
                    alt="download"
                    width={600}
                    height={600}
                  />
                  <h4>Your Cart is empty </h4>
                </div>
              )}
              {quantity !== 0 ? (
                <div className="mb-4 flex flex-col justify-center items-center">
                  <UIButton
                    title="Clear Cart"
                    onClick={clearCart}
                    css="flex justify-center"
                  />

                  <Link href={"/checkout"}>
                    <UIButton
                      title="Checkout"
                      css="mb-12"
                      onClick={() => setOpenCart(false)}
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideCart;
