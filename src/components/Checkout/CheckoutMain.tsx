
import Link from "next/link";
import React, { useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import { OrderSummary } from "../DetailCart/DetailCart";
import { Address } from "./Address";
import AddressForm from "./AddressForm";
import CheckoutStep from "./CheckoutStep";

export interface Address{
  name:string,
  address:string,
  addressType:string,
  state:string,
  city:string,
  Country:string,
  mobileNumber:number,
  _id:number,
  pinCode:number,
  edit?:boolean,
  selected?:boolean
}

const CheckoutMain = () => {
    const addresses = [
      { name:"Rajan",
        address: "place name",
        addressType:"home",
        state: "Punjab",
        city: "Maur",
        Country: "India",
        mobileNumber: 988656548,
        _id:1,
        pinCode:15109
      },
      {  name:"Deepak",
        address: "place name 2",
        state: "Punjab",
        addressType:"Work",
        city: "Maur Mandi",
        Country: "India",
        mobileNumber: 7654324578,
        _id:2,
        pinCode:151509
      },
    ];
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState(addresses||[]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress]:any = useState("");
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const onAddressSubmit = (addr: any) => {
    alert("called")
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const selectAddress = (addr: any) => {
    console.log(addr);
       const updatedAddress = address.map((adr) =>
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
       const updatedAddress = address.map((adr) =>
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
    setConfirmOrder(true);
  };

  const auth = true;

  return (
    <>
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
                  <span className="font-semibold">Rajan</span>
                  <span className="ml-2 font-semibold">Goyal</span>
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
                    <div className="font-neutral">{`${selectedAddress.name} ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                  </div>
                ) : (
                  address.map((adr,index) => (
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
                  <OrderSummary checkoutStep={true} />
                  {orderSummary && (
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                        <p className="w-full px-4 font-primary font-semibold">
                          Order confirmation email will be sent to{" "}
                          <strong>Rajan@gmail.com</strong>
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
                <div className="sm:pl-20 font-neutral pl-4 font-semibold py-2 sm:py-4">8 items</div>
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
                    />
                    <div>Cash on delivery</div>
                  </div>
                </div>
              )
            }
          />
        </div>
        <OrderSummary />
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
