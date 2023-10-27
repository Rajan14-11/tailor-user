import { ContextProvider, useStateContext } from "@/Context/ContextState";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../Context/CartContext";
import { Yeseva_One, Josefin_Sans } from "next/font/google";

import { Provider, useDispatch } from "react-redux";
import store from "../Redux/store";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export let token: any;
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (Cookies.get("token") != undefined)
      token = store?.getState()?.user?.authToken;
  }, [store?.getState()?.user.authToken]);

  const [cart, setCart] = useState<any>({});
  const [progress,setProgress] =useState(0)
  const router =useRouter()
  useEffect(()=>{
 router.events.on('routeChangeStart',()=>{
  setProgress(40)
 })
 router.events.on('routeChangeComplete',()=>{
  setProgress(100)
 })
  },[])

  const addTocart = (
    _id: any,
    name: string,
    price: number,
    qty: number,
    cartItems: any
  ) => {
    console.log(cartItems, cart);
    setCart(cartItems);
    let newCart: any = cart;
    console.log(newCart, cart);
    let newItems, payload;
    if (cartItems && qty > 0) {
      if (cartItems[_id]) {
        console.log("inside hu");
        const newcartItem = cartItems[_id];
        // newcartItem.qty = cartItems[_id].qty + qty;
        newItems = Object.keys(cartItems).map((key) => {
          const { _id, qty } = cartItems[key];
          return {
            product: _id,
            quantity: qty + 1,
          };
        });
        console.log(newItems);
        payload = {
          newItems,
        };
      }
    } else if (cartItems && qty < 0) {
      if (cartItems[_id]) {
        console.log("inside minus");
        const newcartItem = cartItems[_id];
        // newcartItem.qty = cartItems[_id].qty + qty;
        newItems = Object.keys(cartItems).map((key) => {
          const { _id, qty } = cartItems[key];
          return {
            product: _id,
            quantity: qty - 1,
          };
        });
        console.log(newItems);
        payload = {
          newItems,
        };
      }
    } else {
      if (cart[_id]) {
        console.log("inside hu");
        newCart[_id].qty = cart[_id].qty + qty;
      } else {
        newCart[_id] = { qty, name, price, _id };
      }
      console.log({ newCart });
      setCart(newCart);
      newItems = Object.keys(cart).map((key) => {
        const { _id, qty } = cart[key];
        return {
          product: _id,
          quantity: qty,
        };
      });
      console.log(newItems);
      payload = {
        newItems,
      };
    }
    console.log(payload);
    console.log(cart);

    return payload;
  };

  return (
    <>
      <Provider store={store}>
        <ContextProvider>
          <CartContextProvider>
            <LoadingBar
              color="#E7717D"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <Component cart={cart} addTocart={addTocart} {...pageProps} />
          </CartContextProvider>
        </ContextProvider>
      </Provider>
    </>
  );
}
