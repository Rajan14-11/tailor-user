import Images from "@/assets/Images";
import {
  useAddOrderMutation,
  useCheckoutMutation,
  useCreateUserAddressesMutation,
  useGetCartMutation,
  useGetKeyQuery,
  useGetUserAddressesMutation,
} from "@/Redux/api";
import { emptyCart } from "@/Redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { AnyListenerPredicate } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import { OrderSummary } from "../DetailCart/DetailCart";
import { Address } from "./Address";
import AddressForm from "./AddressForm";
import CheckoutStep from "./CheckoutStep";

export interface Address {
  name: string;
  address: string;
  addressType: string;
  state: string;
  city: string;
  Country: string;
  mobileNumber: number;
  _id: number;
  pinCode: number;
  edit?: boolean;
  selected?: boolean;
}

declare global {
  export interface Window {
    Razorpay: any;
  }
}

const CheckoutMain = () => {
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState<any>([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress]: any = useState("");
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [user, setUser] = useState({});
  const [paymentStatus, setPaymentStatus] = useState("card");
  const [paymentState, setPaymentState] = useState(true);

  // const cart = useAppSelector((state) => state.cart);

  const [getAddresses, { data, error }] = useGetUserAddressesMutation();
  const [addOrder, { data: orderData, isSuccess: orderDataSuccess }] =
    useAddOrderMutation();
  const [getCart, { data: cartItems }] = useGetCartMutation();
  const [checkoutMutation, { data: orderdata }] = useCheckoutMutation();
  const { data: key } = useGetKeyQuery("");

  useEffect(() => {
    if (Cookies.get("user")) setUser(JSON.parse(Cookies.get("user") || ""));
    getAddresses("");
    getCart("");
  }, []);

  useEffect(() => {
    if (data !== undefined) setAddress(data?.userAddress[0]?.address);
  }, [typeof data]);
  //  console.log(address,data)

  const onAddressSubmit = (addr: any) => {
    // console.log(addr);
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const selectAddress = (addr: any) => {
    // console.log(addr);
    const updatedAddress = address.map((adr: any) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr: any) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const enableAddressEditForm = (addr: any) => {
    const updatedAddress = address.map((adr: any) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  const onConfirmOrder = () => {
    let totalAmount;

    if (cartItems?.newcartItems !== undefined) {
      totalAmount = Object.keys(cartItems && cartItems?.newcartItems).reduce(
        (totalPrice, key) => {
          const { price, qty } = cartItems?.newcartItems[key];
          return totalPrice + price * qty;
        },
        0
      );
    }
    // console.log(totalAmount);
    const items = Object.keys(cartItems?.newcartItems).map((key) => ({
      productId: key,
      seller:cartItems?.newcartItems[key].seller,
      payablePrice: cartItems?.newcartItems[key].price,
      purchasedQty: cartItems?.newcartItems[key].qty,
    }));

    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: paymentStatus,
      address:selectedAddress
    };
    setConfirmOrder(true);
      addOrder(payload)
  };

  useEffect(()=>{
    let totalAmount
     if (cartItems?.newcartItems !== undefined) {
       totalAmount = Object.keys(cartItems && cartItems?.newcartItems).reduce(
         (totalPrice, key) => {
           const { price, qty } = cartItems?.newcartItems[key];
           return totalPrice + price * qty;
         },
         0
       );
     }
    if (orderData) handlePayment(totalAmount, orderData?.order?._id);
  },[orderData])

  const onOptionChange = (e: any) => {
    setPaymentStatus(e.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      if (orderDataSuccess) window.localStorage.removeItem("cart");
  }, [orderDataSuccess]);

  const auth = useAppSelector((state) => state.user.isAuthenticated);
  // const user = useAppSelector(state=>state.user)


  const handlePayment = (totalAmount: any,id:any) => {
    // console.log({ totalAmount });
    checkoutMutation({ amount: totalAmount,orderId:id });
  };

  useEffect(() => {
    // console.log("jdbhvbj", orderdata);
    if (orderdata) {
      const options = {
        key: key.key,
        amount: orderdata.order.amount,
        currency: "INR",
        name: "Tailor App",
        description: "Order Payment",
        image: Images.service2,
        order_id: orderdata.order.id,
        callback_url: "http://localhost:2000/api/paymentverification",
        notes: {
          address: "company address here",
        },
        theme: {
          color: "#121212",
        },
      };
      //  if (typeof window !== "undefined") {
      // console.log(options);
      const razor = new window.Razorpay(options);
      console.log(razor);
      razor.open()
      razor.on("payment.failed", function (response: any) {
        console.log(response);
        // setPaymentState(false);
      });
      razor.on("payment.success", function (response: any) {
        console.log(response);
        if(response.error)
         setPaymentState(false);
      });
      //  }
    }
  }, [orderdata]);

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="flex flex-col md:flex-row p-4 mt-8 w-full">
        <div className="md:w-2/3 w-full">
          {/* check if user logged in or not */}
          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth}
            body={
              auth ? (
                <div className="py-2 sm:py-4 pl-4 sm:pl-20 font-neutral">
                  <span className="font-semibold">
                    {user?.fullName?.toUpperCase()}
                  </span>
                  {/* <span className="ml-2 font-semibold">Goyal</span> */}
                </div>
              ) : (
                <div className="pl-20 py-4 font-secondary text-xl font-semibold hover:text-primary inline-block">
                  <Link href="/login">Login Now</Link>
                </div>
              )
            }
          />
          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress && auth}
            body={
              <>
                {confirmAddress && auth ? (
                  <div className="py-2 sm:py-4 pl-4 sm:pl-20 font-semibold">
                    {/* {"Selected Address shown here"} */}
                    <div className="font-neutral">{`${selectedAddress.name} ${selectedAddress.completeaddress} - ${selectedAddress.pinCode}`}</div>
                  </div>
                ) : (
                  address &&
                  address.map((adr: any, index: number) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      adr={adr}
                      key={index}
                    />
                  ))
                )}
                {/* AddressForm */}
                {confirmAddress ? null : newAddress ? (
                  <AddressForm onSubmitForm={onAddressSubmit} />
                ) : auth ? (
                  <CheckoutStep
                    stepNumber={"+"}
                    title={"ADD NEW ADDRESS"}
                    active={false}
                    onClick={() => setNewAddress(!newAddress)}
                  />
                ) : null}
              </>
            }
          />

          <CheckoutStep
            stepNumber={"3"}
            title={"ORDER SUMMARY"}
            active={orderSummary}
            body={
              orderSummary ? (
                <div className="py-8 m-auto sm:pl-20 w-full">
                  <OrderSummary
                    cartItems={cartItems?.newcartItems}
                    checkoutStep={true}
                  />
                  {orderSummary && (
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                        <p className="w-full px-4 font-primary font-semibold">
                          Order confirmation email will be sent to{" "}
                          <strong>{user?.email}</strong>
                        </p>
                        <UIButton
                          title="CONTINUE"
                          css="flex justify-center"
                          onClick={userOrderConfirmation}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : orderConfirmation ? (
                <div className="sm:pl-20 font-neutral pl-4 font-semibold py-2 sm:py-4">
                  {Object.keys(cartItems?.newcartItems).length} items
                </div>
              ) : null
            }
          />

          <CheckoutStep
            stepNumber={"4"}
            title={"PAYMENT OPTIONS"}
            active={paymentOption}
            body={
              paymentOption && (
                <div>
                  <div className="flex font-primary font-bold py-4 pl-4 sm:pl-20 items-center font-semibold">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="cod"
                      className=" mr-4"
                      checked={paymentStatus === "cod"}
                      onChange={onOptionChange}
                    />
                    <div>Cash on delivery</div>
                    <input
                      type="radio"
                      name="paymentOption"
                      value="card"
                      className=" mr-4"
                      checked={paymentStatus === "card"}
                      onChange={onOptionChange}
                    />
                    <div>Razorpay</div>
                  </div>
                </div>
              )
            }
          />
        </div>
        <OrderSummary cartItems={cartItems?.newcartItems} />
      </div>
      <UIButton
        css="flex justify-center pb-6"
        title="CONFIRM ORDER"
        onClick={onConfirmOrder}
      />
    </>
  );
};

export default CheckoutMain;
