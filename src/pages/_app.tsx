import { ContextProvider } from "@/Context/ContextState";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../Context/CartContext";
import { Yeseva_One, Josefin_Sans } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <CartContextProvider>
          <NextNProgress color="primary" />
          <Component {...pageProps} />
        </CartContextProvider>
      </ContextProvider>
    </>
  );
}
