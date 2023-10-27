import DetailCart from "@/components/DetailCart/DetailCart";
import Topbar from "@/components/HomePage/Topbar";
import LandingPageFooter from "@/components/LandingPage/LandingPageFooter";
import {
  useAddToCartMutation,
  useGetCartMutation,
  useRemoveItemMutation,
} from "@/Redux/api";
import { useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const detailCart = ({ addTocart }: any) => {
  const [cartItem, setCartItem] = useState<any>({});
  const [getCartItems, { data, isSuccess, isError, error, isLoading }] =
    useGetCartMutation();
  const auth = useAppSelector((state) => state.user.isAuthenticated);
  const [removeItemMutation, { data: removeData, error: removeError }] =
    useRemoveItemMutation();
  const [addToCartMutation, { data: addData }] = useAddToCartMutation();

  const onQuantityIncrement = (_id: number) => {
    addToCartMutation({ productId: _id, quantity: 1 });
  };
  const onQuantityDecrement = (_id: number) => {
    addToCartMutation({ productId: _id, quantity: -1 });
  };

  const removeItem = (id: number) => {
    removeItemMutation({ productId: id });
  };

  useEffect(() => {
    if (data?.newcartItems !== undefined) setCartItem(data?.newcartItems);
  }, [data?.newcartItems]);

  useEffect(() => {
    if (auth) getCartItems("");
  }, [auth, removeData, addData]);

  return (
    <div>
      <Topbar />
      <DetailCart
        cartItem={cartItem && cartItem}
        loading={isLoading}
        removeItem={removeItem}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
      />
      <LandingPageFooter />
    </div>
  );
};

export default detailCart;
