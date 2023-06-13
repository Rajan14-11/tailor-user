import { ContextProvider } from "@/Context/ContextState";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../Context/CartContext";
import { Yeseva_One, Josefin_Sans } from "next/font/google";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ContextProvider>
    </>
  );
}
